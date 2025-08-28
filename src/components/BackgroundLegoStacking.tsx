import React, { useEffect, useState } from 'react';

// Simple Building Block Component
const BuildingBlock: React.FC<{
  section: string;
  index: number;
  isVisible: boolean;
}> = ({ section, index, isVisible }) => {
  return (
    <div
      className={`
        building-block
        transition-all duration-1000 ease-out
        ${isVisible ? 'opacity-80 scale-100' : 'opacity-0 scale-95'}
      `}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
      data-section={section}
      data-level={index}
    />
  );
};

// Minimal Building Stack System  
export const LegoStackingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sections = React.useMemo(() => ['about', 'skills', 'experience', 'education', 'contact'], []);

  // Simple intersection observer
  useEffect(() => {
    const observers = new Map<string, IntersectionObserver>();

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleSections(prev => new Set([...prev, sectionId]));
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.set(sectionId, observer);
      }
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, [sections]);

  return (
    <>
      {children}
      
      {/* Simple building stack */}
      <div className="building-stack-container">
        {sections.map((section, index) => (
          <BuildingBlock
            key={section}
            section={section}
            index={index}
            isVisible={visibleSections.has(section)}
          />
        ))}
      </div>
    </>
  );
};