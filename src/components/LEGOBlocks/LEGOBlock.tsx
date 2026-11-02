import React from 'react';

interface LEGOBlockProps {
  size?: '1x1' | '2x1' | '1x2' | '2x2' | '4x2' | '2x4';
  color?: 'red' | 'blue' | 'yellow' | 'green' | 'white' | 'black' | 'gray';
  stackable?: boolean;
  animated?: boolean;
  delay?: number;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  glow?: boolean;
}

const LEGOBlock: React.FC<LEGOBlockProps> = ({
  size = '2x2',
  color = 'blue',
  stackable = true,
  animated = true,
  delay = 0,
  children,
  onClick,
  className = '',
  glow = false
}) => {
  const sizeClasses: Record<string, string> = {
    '1x1': 'w-8 h-12',
    '2x1': 'w-16 h-12',
    '1x2': 'w-8 h-24',
    '2x2': 'w-16 h-16',
    '4x2': 'w-32 h-16',
    '2x4': 'w-16 h-32'
  };

  const colorStyles: Record<string, React.CSSProperties> = {
    red: { 
      background: `linear-gradient(135deg, var(--lego-red) 0%, #FF1744 100%)`,
      color: 'white',
      boxShadow: glow ? '0 0 20px rgba(213, 0, 0, 0.5)' : 'var(--block-shadow)'
    },
    blue: { 
      background: `linear-gradient(135deg, var(--lego-blue) 0%, #0052A3 100%)`,
      color: 'white',
      boxShadow: glow ? '0 0 20px rgba(0, 102, 204, 0.5)' : 'var(--block-shadow)'
    },
    yellow: { 
      background: `linear-gradient(135deg, var(--lego-yellow) 0%, #FFC107 100%)`,
      color: 'var(--lego-black)',
      boxShadow: glow ? '0 0 20px rgba(255, 215, 0, 0.5)' : 'var(--block-shadow)'
    },
    green: { 
      background: `linear-gradient(135deg, var(--lego-green) 0%, #00C853 100%)`,
      color: 'white',
      boxShadow: glow ? '0 0 20px rgba(0, 166, 82, 0.5)' : 'var(--block-shadow)'
    },
    white: { 
      background: `linear-gradient(135deg, var(--lego-white) 0%, #F5F5F5 100%)`,
      color: 'var(--lego-black)',
      boxShadow: 'var(--block-shadow)'
    },
    black: { 
      background: `linear-gradient(135deg, var(--lego-black) 0%, #000000 100%)`,
      color: 'white',
      boxShadow: 'var(--block-shadow)'
    },
    gray: { 
      background: `linear-gradient(135deg, var(--lego-gray) 0%, #4A5568 100%)`,
      color: 'white',
      boxShadow: 'var(--block-shadow)'
    }
  };

  const studCount = {
    '1x1': 1,
    '2x1': 2,
    '1x2': 2,
    '2x2': 4,
    '4x2': 8,
    '2x4': 8
  }[size];

  const animationStyle: React.CSSProperties = animated ? {
    animation: `blockAssemble var(--build-duration) cubic-bezier(0.68, -0.55, 0.265, 1.55) ${delay}s backwards`
  } : {};

  return (
    <div
      className={`lego-block ${sizeClasses[size]} ${className} p-2 rounded-sm relative`}
      style={{ 
        ...colorStyles[color], 
        ...animationStyle,
        perspective: '1000px'
      }}
      onClick={onClick}
    >
      {stackable && (
        <div className="lego-studs">
          {Array.from({ length: studCount }).map((_, i) => (
            <div 
              key={i} 
              className="lego-stud"
              style={{ 
                animationDelay: `${delay + i * 0.05}s`,
                background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)`
              }}
            />
          ))}
        </div>
      )}
      <div className="relative z-10 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
};

export default LEGOBlock;