import React from 'react';

interface LEGOStudsProps {
  count?: number;
  glowing?: boolean;
  prominent?: boolean;
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const LEGOStuds: React.FC<LEGOStudsProps> = ({
  count = 4,
  glowing = false,
  prominent = false,
  color = 'currentColor',
  size = 'medium'
}) => {
  const sizeStyles = {
    small: 'w-2 h-2',
    medium: 'w-3 h-3',
    large: 'w-4 h-4'
  };

  const rows = Math.ceil(Math.sqrt(count));
  const cols = Math.ceil(count / rows);

  return (
    <div 
      className={`absolute -top-1 left-1/2 transform -translate-x-1/2 grid gap-1 pointer-events-none`}
      style={{ 
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        zIndex: prominent ? 20 : 10
      }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`${sizeStyles[size]} rounded-full transition-all duration-200`}
          style={{
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), ${color} 40%)`,
            boxShadow: glowing 
              ? `inset 0 1px 2px rgba(0,0,0,0.3), 0 0 8px ${color}`
              : 'inset 0 1px 2px rgba(0,0,0,0.3)',
            animation: glowing ? 'studPulse 2s ease-in-out infinite' : undefined,
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default LEGOStuds;