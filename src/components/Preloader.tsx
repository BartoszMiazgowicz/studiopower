'use client';

import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate progress from 0 to 100
    const duration = 1800;
    const startTime = Date.now();

    const animateProgress = () => {
      const elapsed = Date.now() - startTime;
      const p = Math.min(elapsed / duration, 1);
      // Eased progress (ease-out cubic)
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));

      if (p < 1) {
        requestAnimationFrame(animateProgress);
      } else {
        // Start exit animation
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 800);
        }, 200);
      }
    };

    requestAnimationFrame(animateProgress);
  }, [onComplete]);

  return (
    <div className={`preloader ${isExiting ? 'preloader-exit' : ''}`}>
      {/* Corner decorations */}
      <div className="preloader-corner preloader-corner--tl" />
      <div className="preloader-corner preloader-corner--tr" />
      <div className="preloader-corner preloader-corner--bl" />
      <div className="preloader-corner preloader-corner--br" />

      {/* Main content */}
      <div className="preloader-content">
        <div className="flex flex-col items-center gap-0">
          <div className="preloader-text-wrapper">
            <span className="preloader-text">POWER</span>
          </div>
          <div className="preloader-text-wrapper">
            <span className="preloader-text preloader-text-lime">PERFORMANCE</span>
          </div>
        </div>
        <div className="preloader-line" />
        <div className="preloader-subtitle">
          <span>Studio treningowe</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600 text-xs font-mono tracking-wider">LOADING</span>
          <span className="text-lime-500 text-xs font-mono font-bold">{progress}%</span>
        </div>
        <div className="h-[2px] bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-lime-600 to-lime-400 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
