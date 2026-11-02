import { useEffect, useRef, useState } from 'react';

interface Connection {
  from: string;
  to: string;
  color?: string;
}

interface SkillConnectionsProps {
  connections: Connection[];
  active: boolean;
}

const SkillConnections = ({ connections, active }: SkillConnectionsProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [paths, setPaths] = useState<string[]>([]);

  useEffect(() => {
    if (!active || !svgRef.current) {
      setPaths([]);
      return;
    }

    const newPaths: string[] = [];
    
    connections.forEach(({ from, to }) => {
      const fromElement = document.getElementById(`skill-${from}`);
      const toElement = document.getElementById(`skill-${to}`);
      
      if (fromElement && toElement && svgRef.current) {
        const svg = svgRef.current;
        const svgRect = svg.getBoundingClientRect();
        const fromRect = fromElement.getBoundingClientRect();
        const toRect = toElement.getBoundingClientRect();
        
        const fromX = fromRect.left + fromRect.width / 2 - svgRect.left;
        const fromY = fromRect.top + fromRect.height / 2 - svgRect.top;
        const toX = toRect.left + toRect.width / 2 - svgRect.left;
        const toY = toRect.top + toRect.height / 2 - svgRect.top;
        
        // Create curved path
        const midX = (fromX + toX) / 2;
        const midY = (fromY + toY) / 2;
        const curve = Math.abs(toX - fromX) * 0.3;
        
        const path = `M ${fromX} ${fromY} Q ${midX} ${midY - curve} ${toX} ${toY}`;
        newPaths.push(path);
      }
    });
    
    setPaths(newPaths);
  }, [connections, active]);

  if (!active) return null;

  return (
    <svg
      ref={svgRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ width: '100%', height: '100%' }}
    >
      {paths.map((path, index) => (
        <g key={index}>
          <path
            d={path}
            fill="none"
            stroke={connections[index]?.color || '#64ffda'}
            strokeWidth="2"
            strokeDasharray="1000"
            className="animate-block-connect"
            opacity="0.6"
          />
          <circle r="4" fill={connections[index]?.color || '#64ffda'}>
            <animateMotion
              dur="0.5s"
              repeatCount="1"
              path={path}
            />
          </circle>
        </g>
      ))}
    </svg>
  );
};

export default SkillConnections;