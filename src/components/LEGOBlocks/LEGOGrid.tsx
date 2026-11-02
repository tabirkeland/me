import React from 'react';

interface LEGOGridProps {
  baseplate?: 'gray' | 'green' | 'blue' | 'dark';
  children?: React.ReactNode;
  className?: string;
  gridSize?: '4x4' | '6x6' | '8x8' | '12x12';
}

const LEGOGrid: React.FC<LEGOGridProps> = ({
  baseplate = 'dark',
  children,
  className = '',
  gridSize = '8x8'
}) => {
  const baseplateColors = {
    gray: 'bg-gray-800',
    green: 'bg-green-900',
    blue: 'bg-blue-950',
    dark: 'bg-gray-950'
  };

  const gridDimensions = {
    '4x4': 'grid-cols-4',
    '6x6': 'grid-cols-6',
    '8x8': 'grid-cols-8',
    '12x12': 'grid-cols-12'
  };

  return (
    <div 
      className={`lego-baseplate ${baseplateColors[baseplate]} ${className} p-4 rounded-lg relative`}
      style={{
        backgroundImage: `
          repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 31px, rgba(255,255,255,0.03) 32px),
          repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, transparent 1px, transparent 31px, rgba(255,255,255,0.03) 32px)
        `,
        backgroundSize: '32px 32px'
      }}
    >
      <div className={`grid ${gridDimensions[gridSize]} gap-1 relative`}>
        {children}
      </div>
      
      {/* Baseplate studs pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.2) 2px, transparent 2px)`,
          backgroundSize: '16px 16px',
          backgroundPosition: '8px 8px'
        }}
      />
    </div>
  );
};

export default LEGOGrid;