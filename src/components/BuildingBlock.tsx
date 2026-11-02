import { ReactNode, useEffect, useRef, useState } from 'react';

interface BuildingBlockProps {
  children: ReactNode;
  color?: 'blue' | 'teal' | 'green' | 'purple' | 'gray' | 'navy';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  studs?: number;
  onClick?: () => void;
  hoverable?: boolean;
  animateOnScroll?: boolean;
  delay?: number;
  className?: string;
  glow?: boolean;
  depth?: boolean;
}

const colorClasses = {
  blue: 'bg-gradient-to-b from-block-blue to-blue-800 border-blue-900',
  teal: 'bg-gradient-to-b from-block-teal to-cyan-800 border-cyan-900',
  green: 'bg-gradient-to-b from-block-green to-green-800 border-green-900',
  purple: 'bg-gradient-to-b from-block-purple to-purple-800 border-purple-900',
  gray: 'bg-gradient-to-b from-block-gray to-slate-700 border-slate-800',
  navy: 'bg-gradient-to-b from-primary-navy to-slate-900 border-slate-950',
};

const sizeClasses = {
  sm: 'p-2 text-sm',
  md: 'p-4 text-base',
  lg: 'p-6 text-lg',
  xl: 'p-8 text-xl',
};

const BuildingBlock = ({
  children,
  color = 'teal',
  size = 'md',
  studs = 4,
  onClick,
  hoverable = true,
  animateOnScroll = false,
  delay = 0,
  className = '',
  glow = false,
  depth = true,
}: BuildingBlockProps) => {
  const [isVisible, setIsVisible] = useState(!animateOnScroll);
  const blockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animateOnScroll) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 100);
        }
      },
      { threshold: 0.1 }
    );

    if (blockRef.current) {
      observer.observe(blockRef.current);
    }

    return () => observer.disconnect();
  }, [animateOnScroll, delay]);

  return (
    <div
      ref={blockRef}
      onClick={onClick}
      className={`
        relative rounded-block ${colorClasses[color]} ${sizeClasses[size]}
        ${hoverable && 'cursor-pointer hover:shadow-block-hover hover:-translate-y-1 hover:scale-[1.02]'}
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
        ${glow && 'animate-glow-pulse'}
        ${depth && 'shadow-block'}
        transition-all duration-300 ease-out
        ${className}
      `}
      style={{
        borderWidth: '1px',
        transitionDelay: `${delay * 100}ms`,
      }}
    >
      {/* Top edge highlight - the "studs" */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      
      {/* Stud dots */}
      {studs > 0 && (
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(Math.min(studs, 6))].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white/20 rounded-full border border-white/10"
              style={{
                boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.2)',
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Bottom edge shadow for depth */}
      {depth && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      )}
    </div>
  );
};

export default BuildingBlock;