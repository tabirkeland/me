import React, { useState, useEffect } from "react";

// TypedName component for the name typing animation
export const TypedName = ({ fullName }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullName[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 150); // Adjust typing speed here (milliseconds per character)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullName]);

  return (
    <span className="inline-block">
      {displayText}
      {currentIndex < fullName.length && (
        <span className="inline-block w-1 h-8 bg-[#64ffda] animate-pulse ml-1"></span>
      )}
    </span>
  );
};

// RotatingTitle component for cycling through different titles
export const RotatingTitle = ({ titles }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayTitle, setDisplayTitle] = useState(titles[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);

      // First fade out the current title
      setTimeout(() => {
        const nextIndex = (currentTitleIndex + 1) % titles.length;
        setCurrentTitleIndex(nextIndex);
        setDisplayTitle(titles[nextIndex]);

        // Then fade in the new title
        setTimeout(() => {
          setIsAnimating(false);
        }, 300);
      }, 300);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(intervalId);
  }, [currentTitleIndex, titles]);

  return (
    <div className="h-24 md:h-28 mb-6 sm:mb-8">
      <h2
        className={`text-3xl sm:text-4xl md:text-6xl font-bold text-gray-400 transition-opacity duration-300 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
      >
        {displayTitle}.
      </h2>
    </div>
  );
};
