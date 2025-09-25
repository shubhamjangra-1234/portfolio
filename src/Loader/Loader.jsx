import React from "react";

/**
 * @param {Object} props
 * @param {boolean} props.loading
 * @param {React.ReactNode} props.children
 * @param {string} [props.overlayText]
 * @param {string} [props.className]
 */
export default function MiddleLoader({
  loading,
  children,
  overlayText = "Loading",
  className = "",
}) {
  return (
    <div className={`relative ${className}`} aria-busy={loading}>
      {/* Middle content (keeps navbar and footer untouched) */}
      <div>{children}</div>

      {loading ? (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden={false}
        >
          {/* The backdrop only covers the middle content area (this wrapper), not the whole page */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-md" />

          <div className="relative z-10 w-[min(90%,460px)] mx-4 rounded-xl bg-gradient-to-r from-white/90 to-white/80 dark:from-slate-800/80 dark:to-slate-700/70 shadow-xl border border-white/30 p-6 flex flex-col items-center gap-4 pointer-events-auto">
            <div className="flex items-end gap-2 h-12">
              <span className="loader-bar bg-gradient-to-b from-violet-600 to-cyan-400" style={{ animationDelay: "0s" }} />
              <span className="loader-bar bg-gradient-to-b from-fuchsia-600 to-pink-400" style={{ animationDelay: "0.12s" }} />
              <span className="loader-bar bg-gradient-to-b from-amber-400 to-rose-400" style={{ animationDelay: "0.24s" }} />
              <span className="loader-dot bg-white/90" />
            </div>

            <div className="text-center">
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{overlayText}…</div>
              <div className="text-xs text-slate-600 dark:text-slate-300 mt-1">Working on it — this won’t block the navbar</div>
            </div>
          </div>
        </div>
      ) : null}

      <style>{`
        /* Loader bars animation */
        .loader-bar {
          width: 8px;
          height: 32px;
          border-radius: 6px;
          display: inline-block;
          box-shadow: 0 6px 18px rgba(2,6,23,0.08);
          transform-origin: bottom center;
          animation: stretch 0.8s ease-in-out infinite;
        }

        .loader-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          margin-left: 6px;
          box-shadow: 0 6px 18px rgba(2,6,23,0.06);
          opacity: 0.95;
          transform: translateY(2px);
          animation: pulse 1.2s infinite ease-in-out;
        }

        @keyframes stretch {
          0% { transform: scaleY(0.35); opacity: 0.7 }
          50% { transform: scaleY(1.2); opacity: 1 }
          100% { transform: scaleY(0.4); opacity: 0.75 }
        }

        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.7 }
          50% { transform: scale(1.15); opacity: 1 }
          100% { transform: scale(0.95); opacity: 0.85 }
        }

        /* Responsive tweaks */
        @media (min-width: 640px) {
          .loader-bar { height: 40px }
          .loader-dot { height: 10px; width: 10px }
        }
      `}</style>
    </div>
  );
}
