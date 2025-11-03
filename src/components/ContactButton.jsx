import React from "react";

export default function ContactButton({ onClick }) {
  return (
    <>
      <style>{`
        .collab-pill {
          position: fixed;
          right: 1rem;
          bottom: 1rem;
          z-index: 90;
          border: 0;
          background: transparent;
          padding: 0;
          -webkit-tap-highlight-color: transparent;
        }

        @media (min-width: 640px) {
          .collab-pill {
            right: 1.5rem;
            bottom: 1.5rem;
          }
        }

        .collab-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 12px 20px;
          border-radius: 50px;

          border: 2px solid rgba(139, 92, 246, 0.5);
          background: linear-gradient(135deg, #8b5cf6, #6d28d9 60%, #5b21b6);

          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          outline: none;
          user-select: none;

          box-shadow:
            0 10px 25px rgba(139, 92, 246, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .collab-btn {
            padding: 14px 24px;
            gap: 10px;
          }
        }

        .collab-btn::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 50px;
          border-radius: 50px;
          background: rgba(30, 30, 40, 0.95);
          transition: width 0.7s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.7s ease;
        }

        .collab-label {
          position: relative;
          z-index: 1;
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: #ffffff;
          white-space: nowrap;
          line-height: 1;
          text-shadow: 0 2px 4px rgba(0,0,0,.2);
        }

        @media (min-width: 640px) {
          .collab-label {
            font-size: 16px;
          }
        }

        .collab-arrow {
          position: relative;
          z-index: 1;
          width: 14px;
          height: 10px;

          fill: none;
          stroke: #ffffff;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;

          transform: translateX(-3px);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 2px 4px rgba(0,0,0,.2));
        }

        .collab-btn:hover::before {
          width: 100%;
          background: rgba(30, 30, 40, 0.95);
        }

        .collab-btn:hover .collab-arrow {
          transform: translateX(2px);
        }

        .collab-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(167, 139, 250, 0.6);
          box-shadow:
            0 15px 35px rgba(139, 92, 246, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.15) inset,
            0 0 20px rgba(139, 92, 246, 0.3);
        }

        .collab-btn:active {
          transform: translateY(0) scale(0.98);
          box-shadow:
            0 5px 15px rgba(139, 92, 246, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1) inset;
        }

        @media (prefers-reduced-motion: reduce) {
          .collab-btn, .collab-btn::before, .collab-arrow {
            transition: none !important;
          }
        }

        /* Pulsing animation */
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }

        .collab-pill::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50px;
          border: 2px solid rgba(139, 92, 246, 0.6);
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          pointer-events: none;
        }
      `}</style>

      <button
        type="button"
        onClick={onClick}
        className="collab-pill"
        aria-label="Open contact form"
      >
        <span className="collab-btn">
          <span className="collab-label">Let's Collaborate</span>
          <svg viewBox="0 0 13 10" className="collab-arrow" aria-hidden="true" focusable="false">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </span>
      </button>
    </>
  );
}
