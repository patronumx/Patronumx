import React from "react";

export default function ContactButton({ onClick }) {
  return (
    <>
      <style>{`
        /* ---- placement: unchanged ---- */
        .collab-pill {
          position: fixed;
          right: 1.5rem;
          bottom: 1.5rem;
          z-index: 90;
          border: 0;
          background: transparent;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
        }

        /* ---- pill UI (same structure, nicer finish) ---- */
        .collab-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;

          padding: 11.5px 18px;
          border-radius: 50px;

          border: 3px solid #5f37b7; /* slight lift on border */
          background: linear-gradient(90deg, #6d28d9, #5b21b6 60%, #4338ca);

          cursor: pointer;
          transition: box-shadow .2s ease, transform .12s ease, filter .2s ease;
          outline: none;
          user-select: none;

          /* subtle elevation */
          box-shadow: 0 10px 20px rgba(85, 45, 168, 0.28);
          overflow: hidden; /* keep the :before sweep clipped to the pill */
        }

        /* bubble on the right (now black by default) */
        .collab-btn::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 45px;
          height: 45px;
          border-radius: 50px;
          background: #1c1c1c; /* was white */
          transition: width 0.8s ease, background-color 0.8s ease;
        }

        .collab-label {
          position: relative;
          z-index: 1; /* stays above the sweep circle */
          font-family: Montserrat, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
          font-size: 18px;
          font-weight: 700; /* a touch bolder for contrast */
          letter-spacing: 0.05em;
          color: #ffffff;
          white-space: nowrap;
          line-height: 1;
          text-shadow: 0 1px 0 rgba(0,0,0,.15);
        }

        .collab-arrow {
          position: relative;
          z-index: 1; /* above sweep */
          width: 15px;
          height: 10px;
          margin-left: 2px;

          fill: none;
          stroke: #ffffff;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;

          transform: translateX(-5px);
          transition: transform 0.5s ease;
          filter: drop-shadow(0 1px 0 rgba(0,0,0,.15));
        }

        /* hover polish */
        .collab-btn:hover::before {
          width: 100%;
          background: #1c1c1c; /* same dark sweep */
        }
        .collab-btn:hover .collab-arrow { transform: translateX(0); transition: transform .6s ease; }
        .collab-btn:hover {
          filter: brightness(1.05);
          box-shadow: 0 12px 28px rgba(85, 45, 168, 0.36);
        }

        /* active tap */
        .collab-btn:active { transform: translateY(1px) scale(0.99); }

        /* reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .collab-btn, .collab-btn::before, .collab-arrow { transition: none !important; }
        }
      `}</style>

      <button
        type="button"
        onClick={onClick}
        className="collab-pill"
        aria-label="Open contact form"
      >
        <span className="collab-btn">
          <span className="collab-label">Let’s Collaborate</span>
          <svg viewBox="0 0 13 10" className="collab-arrow" aria-hidden="true" focusable="false">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </span>
      </button>
    </>
  );
}
