import React, { useEffect, useState } from "react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          // When we reach 100%, trigger the onLoadingComplete callback
          if (newProgress >= 100) {
            setTimeout(() => {
              onLoadingComplete();
            }, 500); // Small delay after reaching 100% before hiding
          }
          return newProgress;
        });
      }
    }, 20); // Speed of the progress bar (lower = faster)

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a192f]">
      <div className="mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-[#64ffda]">TB</h1>
      </div>

      {/* Progress bar container */}
      <div className="w-64 h-1 bg-[#112240] rounded-full overflow-hidden">
        {/* Progress bar */}
        <div
          className="h-full bg-[#64ffda] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="mt-4 font-mono text-gray-400">Loading... {progress}%</p>
    </div>
  );
};

export default LoadingScreen;
