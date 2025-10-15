import { useCallback, useEffect, useMemo, useRef, useState, memo } from "react";

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 1,            // fewer clones → smoother
  MAX_FRAME_DT: 1 / 30         // clamp long frames (~33ms)
};

const toCssLength = v => (typeof v === "number" ? `${v}px` : (v ?? undefined));
const cx = (...p) => p.filter(Boolean).join(" ");

const useResizeObserver = (callback, elements, deps) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const onResize = () => callback();
      window.addEventListener("resize", onResize, { passive: true });
      callback();
      return () => window.removeEventListener("resize", onResize);
    }
    const obs = elements.map(ref => {
      if (!ref.current) return null;
      const ro = new ResizeObserver(callback);
      ro.observe(ref.current);
      return ro;
    });
    callback();
    return () => obs.forEach(o => o?.disconnect());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

const useImageLoader = (seqRef, onLoad, deps) => {
  useEffect(() => {
    const imgs = seqRef.current?.querySelectorAll("img") ?? [];
    if (imgs.length === 0) { onLoad(); return; }
    let left = imgs.length;
    const done = () => { if (--left === 0) onLoad(); };
    imgs.forEach(img => {
      if (img.complete) done();
      else {
        img.addEventListener("load", done, { once: true, passive: true });
        img.addEventListener("error", done, { once: true, passive: true });
      }
    });
    return () => {
      imgs.forEach(img => {
        img.removeEventListener("load", done);
        img.removeEventListener("error", done);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover) => {
  const rafRef = useRef(null);
  const lastRef = useRef(null);
  const offsetRef = useRef(0);
  const velRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // GPU-friendly baseline
    track.style.willChange = "transform";
    track.style.backfaceVisibility = "hidden";
    track.style.transform = track.style.transform || "translate3d(0,0,0)";

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
    }

    if (prefersReduced) {
      track.style.transform = "translate3d(0,0,0)";
      return () => { lastRef.current = null; };
    }

    const animate = t => {
      if (lastRef.current === null) lastRef.current = t;
      let dt = Math.max(0, t - lastRef.current) / 1000;
      if (dt > ANIMATION_CONFIG.MAX_FRAME_DT) dt = ANIMATION_CONFIG.MAX_FRAME_DT; // clamp
      lastRef.current = t;

      const target = pauseOnHover && isHovered ? 0 : targetVelocity;
      const k = 1 - Math.exp(-dt / ANIMATION_CONFIG.SMOOTH_TAU);
      velRef.current += (target - velRef.current) * k;

      if (seqWidth > 0) {
        let next = offsetRef.current + velRef.current * dt;
        next = ((next % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = next;
        track.style.transform = `translate3d(${-next}px,0,0)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, pauseOnHover, trackRef]);
};

const LogoLoop = memo(function LogoLoop({
  logos,
  speed = 120,
  direction = "left",
  width = "100%",
  logoHeight = 28,
  gap = 32,
  pauseOnHover = true,
  fadeOut = false,          // kept for API compat (ignored)
  fadeOutColor,            // ignored
  scaleOnHover = true,     // enable hover effect
  showNames = true,
  nameSize = 14,
  nameColor = "currentColor",
  ariaLabel = "Partner logos",
  className,
  style
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const targetVelocity = useMemo(() => {
    const mag = Math.abs(speed);
    const dir = direction === "left" ? 1 : -1;
    const sign = speed < 0 ? -1 : 1;
    return mag * dir * sign;
  }, [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect?.()?.width ?? 0;
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight, showNames, nameSize]);
  useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, showNames, nameSize]);
  useAnimationLoop(trackRef, targetVelocity, seqWidth, isHovered, pauseOnHover);

  const cssVars = useMemo(() => ({
    "--logoloop-gap": `${gap}px`,
    "--logoloop-logoHeight": `${logoHeight}px`,
    "--logoloop-nameSize": `${nameSize}px`
  }), [gap, logoHeight, nameSize]);

  const rootClasses = useMemo(() =>
    cx(
      "relative overflow-x-hidden overflow-y-visible",  // allow hover lift to escape
      "bg-transparent",
      "[--logoloop-gap:32px]",
      "[--logoloop-logoHeight:28px]",
      className
    ), [className]);

  const onEnter = useCallback(() => { if (pauseOnHover) setIsHovered(true); }, [pauseOnHover]);
  const onLeave = useCallback(() => { if (pauseOnHover) setIsHovered(false); }, [pauseOnHover]);

  const renderLogoItem = useCallback((item, key, eager = false) => {
    const img = (
      <img
        className={cx(
          "h-[var(--logoloop-logoHeight)] w-auto object-contain block",
          "transition-transform duration-200 ease-out",
          scaleOnHover && "group/item:hover:scale-[1.08] group/item:hover:-translate-y-1.5"
        )}
        src={item.src}
        alt={item.alt ?? ""}
        loading={eager ? "eager" : "lazy"}
        // ✅ FIX: React expects camelCase
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        draggable={false}
        style={{ filter: "none", boxShadow: "none", transformOrigin: "center bottom" }}
      />
    );

    const label = showNames ? (
      <span
        className={cx(
          "block mt-1 text-center transition-transform duration-200 ease-out",
          scaleOnHover && "group/item:hover:-translate-y-1"
        )}
        style={{ fontSize: "var(--logoloop-nameSize)", color: nameColor, lineHeight: 1 }}
      >
        {item.alt ?? ""}
      </span>
    ) : null;

    const inner = item.href ? (
      <a
        className={cx(
          "inline-flex flex-col items-center no-underline group/item relative",
          "will-change-transform"
        )}
        href={item.href}
        aria-label={item.alt ?? "logo"}
        target="_blank"
        rel="noreferrer noopener"
        style={{ zIndex: 1 }} // keep hovered item above neighbors
      >
        {img}{label}
      </a>
    ) : (
      <span
        className={cx("inline-flex flex-col items-center group/item relative", "will-change-transform")}
        style={{ zIndex: 1 }}
      >
        {img}{label}
      </span>
    );

    return (
      <li
        key={key}
        role="listitem"
        className="flex-none mr-[var(--logoloop-gap)]"
        style={{ boxShadow: "none", background: "transparent", overflow: "visible" }}
      >
        {inner}
      </li>
    );
  }, [scaleOnHover, showNames, nameColor]);

  const logoLists = useMemo(() =>
    Array.from({ length: copyCount }, (_, i) => (
      <ul
        key={`copy-${i}`}
        className="flex items-center"
        role="list"
        aria-hidden={i > 0}
        ref={i === 0 ? seqRef : undefined}
        style={{ background: "transparent" }}
      >
        {logos.map((it, j) => renderLogoItem(it, `${i}-${j}`, i === 0))}
      </ul>
    )), [copyCount, logos, renderLogoItem]);

  const containerStyle = useMemo(() => ({
    width: toCssLength(width) ?? "100%",
    ...cssVars,
    ...style,
    background: "transparent",
    boxShadow: "none",
    // keep transforms smooth
    willChange: "transform",
    backfaceVisibility: "hidden"
  }), [width, cssVars, style]);

  return (
    <div
      ref={containerRef}
      className={rootClasses}
      style={containerStyle}
      role="region"
      aria-label={ariaLabel}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div
        ref={trackRef}
        className="flex w-max"
        style={{
          background: "transparent",
          boxShadow: "none",
          willChange: "transform",
          backfaceVisibility: "hidden",
          transform: "translate3d(0,0,0)"
        }}
      >
        {logoLists}
      </div>
    </div>
  );
});

LogoLoop.displayName = "LogoLoop";
export default LogoLoop;
