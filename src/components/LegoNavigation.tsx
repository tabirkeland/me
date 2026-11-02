import { useState } from "react";
import { Download } from "lucide-react";

interface LegoNavProps {
  sections: { id: string; title: string; number: string }[];
  onResumeDownload: () => void;
}

const LegoNavigation = ({ sections, onResumeDownload }: LegoNavProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isBuilt, setIsBuilt] = useState(false);

  const blockColors = [
    "from-[#112240] to-[#1d3461]",
    "from-[#1d3461] to-[#233554]",
    "from-[#233554] to-[#2a4a7c]",
    "from-[#2a4a7c] to-[#3e5f8a]",
    "from-[#3e5f8a] to-[#4a6fa5]",
    "from-[#112240] to-[#233554]",
  ];

  return (
    <nav className="hidden md:flex items-center space-x-2 relative">
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onMouseEnter={() => {
            setHoveredIndex(index);
            if (!isBuilt) setIsBuilt(true);
          }}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative group lego-block"
          style={{
            animation: isBuilt ? `stackIn ${0.3 + index * 0.1}s ease-out forwards` : 'none',
            animationDelay: `${index * 0.1}s`,
          }}
        >
          <div
            className={`
              relative px-4 py-2 rounded-md
              bg-gradient-to-b ${blockColors[index % blockColors.length]}
              transform transition-all duration-300
              ${hoveredIndex === index ? 'scale-110 -translate-y-2' : ''}
              ${hoveredIndex !== null && hoveredIndex !== index ? 'scale-95 opacity-75' : ''}
              shadow-lg
            `}
          >
            <div className="absolute inset-0 bg-black/20 rounded-md pointer-events-none"></div>
            
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
              <div className="w-1.5 h-1.5 bg-[#64ffda]/30 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[#64ffda]/30 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[#64ffda]/30 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-[#64ffda]/30 rounded-full"></div>
            </div>
            
            <div className="relative text-[#ccd6f6] font-mono text-sm mt-2">
              <span className="text-[#64ffda] text-xs">{section.number}.</span>
              <span className="ml-1">{section.title}</span>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-md"></div>
          </div>
          
          {hoveredIndex === index && (
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-1 bg-[#64ffda]/20 rounded-full blur-sm"></div>
          )}
        </a>
      ))}
      
      <button
        onClick={onResumeDownload}
        onMouseEnter={() => setHoveredIndex(-1)}
        onMouseLeave={() => setHoveredIndex(null)}
        className="relative ml-2 group lego-block"
        style={{
          animation: isBuilt ? `stackIn ${0.3 + sections.length * 0.1}s ease-out forwards` : 'none',
          animationDelay: `${sections.length * 0.1}s`,
        }}
      >
        <div
          className={`
            relative px-4 py-2 rounded-md
            bg-gradient-to-b from-[#64ffda]/20 to-[#64ffda]/10 border border-[#64ffda]
            transform transition-all duration-300
            ${hoveredIndex === -1 ? 'scale-110 -translate-y-2' : ''}
            ${hoveredIndex !== null && hoveredIndex !== -1 ? 'scale-95 opacity-75' : ''}
            shadow-lg flex items-center
          `}
        >
          <div className="absolute inset-0 bg-black/20 rounded-md pointer-events-none"></div>
          
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
            <div className="w-1.5 h-1.5 bg-[#64ffda]/30 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#64ffda]/30 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#64ffda]/30 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-[#64ffda]/30 rounded-full"></div>
          </div>
          
          <div className="relative text-[#64ffda] font-mono text-sm mt-2 flex items-center">
            <Download className="w-4 h-4 mr-1" />
            Resume
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-md"></div>
        </div>
        
        {hoveredIndex === -1 && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-full h-1 bg-[#64ffda]/20 rounded-full blur-sm"></div>
        )}
      </button>
    </nav>
  );
};

export default LegoNavigation;