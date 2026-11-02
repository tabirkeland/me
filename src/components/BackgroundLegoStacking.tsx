import { useEffect, useState } from "react";

interface LegoBlock {
  id: number;
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
  delay: number;
}

const colors = [
  "bg-[#112240]",
  "bg-[#1d3461]",
  "bg-[#233554]",
  "bg-[#2a4a7c]",
  "bg-[#64ffda]/10",
  "bg-[#64ffda]/20",
  "bg-slate-800",
  "bg-slate-700",
];

const BackgroundLegoStacking = () => {
  const [blocks, setBlocks] = useState<LegoBlock[]>([]);
  const [isStacked, setIsStacked] = useState(false);

  useEffect(() => {
    const generateBlocks = () => {
      const newBlocks: LegoBlock[] = [];
      const columns = Math.floor(window.innerWidth / 60);
      
      for (let i = 0; i < 20; i++) {
        const column = Math.floor(Math.random() * columns);
        newBlocks.push({
          id: i,
          color: colors[Math.floor(Math.random() * colors.length)],
          x: column * 60 + 10,
          y: Math.random() * -500 - 100,
          width: 40 + Math.random() * 20,
          height: 20,
          delay: Math.random() * 2,
        });
      }
      setBlocks(newBlocks);
      
      setTimeout(() => setIsStacked(true), 100);
    };

    generateBlocks();
    
    const handleResize = () => {
      setIsStacked(false);
      generateBlocks();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.02] z-0">
      {blocks.map((block) => (
        <div
          key={block.id}
          className={`absolute ${block.color} rounded-sm transition-all duration-1000 ease-bounce`}
          style={{
            left: `${block.x}px`,
            width: `${block.width}px`,
            height: `${block.height}px`,
            transform: `translateY(${isStacked ? `${window.innerHeight - 100 - block.id * 22}px` : `${block.y}px`})`,
            transitionDelay: `${block.delay}s`,
            boxShadow: 'inset 0 -2px 0 rgba(0,0,0,0.2)',
          }}
        >
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/30 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundLegoStacking;