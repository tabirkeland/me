import React, { useState, useEffect } from 'react';
import LEGOBlock from './LEGOBlock';

interface BuildingStep {
  id: string;
  content: React.ReactNode;
  size?: '1x1' | '2x1' | '1x2' | '2x2' | '4x2' | '2x4';
  color?: 'red' | 'blue' | 'yellow' | 'green' | 'white' | 'black' | 'gray';
  delay?: number;
}

interface BuildingAnimationProps {
  sequence: BuildingStep[];
  autoPlay?: boolean;
  playOnScroll?: boolean;
  className?: string;
  stacked?: boolean;
}

const BuildingAnimation: React.FC<BuildingAnimationProps> = ({
  sequence,
  autoPlay = true,
  playOnScroll = false,
  className = '',
  stacked = false
}) => {
  const [visibleSteps, setVisibleSteps] = useState<number>(autoPlay ? sequence.length : 0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (playOnScroll) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
            sequence.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => Math.max(prev, index + 1));
              }, (sequence[index].delay || index * 0.2) * 1000);
            });
          }
        },
        { threshold: 0.3 }
      );

      const element = document.querySelector('.building-animation-container');
      if (element) observer.observe(element);

      return () => {
        if (element) observer.unobserve(element);
      };
    }
  }, [playOnScroll, isInView, sequence]);


  return (
    <div 
      className={`building-animation-container ${className} ${stacked ? 'flex flex-col-reverse' : 'flex flex-wrap gap-2'}`}
    >
      {sequence.map((step, index) => (
        <div
          key={step.id}
          className={`transition-all duration-500 ${stacked ? '-mb-4' : ''}`}
          style={{
            opacity: index < visibleSteps ? 1 : 0,
            transform: index < visibleSteps 
              ? 'translateY(0) scale(1)' 
              : stacked 
                ? 'translateY(20px) scale(0.9)'
                : 'translateY(-20px) scale(0.9)',
            transitionDelay: `${(step.delay || index * 0.2)}s`,
            zIndex: stacked ? sequence.length - index : 'auto'
          }}
        >
          <LEGOBlock
            size={step.size || '2x2'}
            color={step.color || 'blue'}
            animated={index < visibleSteps}
            delay={step.delay || index * 0.2}
            stackable={!stacked}
          >
            {step.content}
          </LEGOBlock>
        </div>
      ))}
    </div>
  );
};

export default BuildingAnimation;