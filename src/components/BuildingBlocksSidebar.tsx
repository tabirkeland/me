import { useState, useEffect, useMemo } from "react";
import { 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Mail,
  Sparkles,
  Layers
} from "lucide-react";

interface Block {
  id: string;
  title: string;
  subtitle: string;
  icon: JSX.Element;
  color: string;
  shadowColor: string;
  delay: number;
}

const BuildingBlocksSidebar = () => {
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null);
  const [isBuilding, setIsBuilding] = useState(false);
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const [clickedBlock, setClickedBlock] = useState<string | null>(null);

  const blocks: Block[] = useMemo(() => [
    {
      id: "about",
      title: "Foundation",
      subtitle: "Who I Am",
      icon: <User className="w-5 h-5" />,
      color: "from-[#0a192f] to-[#112240]",
      shadowColor: "shadow-[#64ffda]/20",
      delay: 0
    },
    {
      id: "skills",
      title: "Capabilities",
      subtitle: "What I Do",
      icon: <Code className="w-5 h-5" />,
      color: "from-[#112240] to-[#1d3461]",
      shadowColor: "shadow-[#64ffda]/30",
      delay: 0.2
    },
    {
      id: "experience",
      title: "Journey",
      subtitle: "Where I've Been",
      icon: <Briefcase className="w-5 h-5" />,
      color: "from-[#1d3461] to-[#2a4a7c]",
      shadowColor: "shadow-[#64ffda]/40",
      delay: 0.4
    },
    {
      id: "education",
      title: "Learning",
      subtitle: "How I Grew",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "from-[#2a4a7c] to-[#3e5f8a]",
      shadowColor: "shadow-[#64ffda]/50",
      delay: 0.6
    },
    {
      id: "contact",
      title: "Connect",
      subtitle: "Let's Build",
      icon: <Mail className="w-5 h-5" />,
      color: "from-[#3e5f8a] to-[#64ffda]/20",
      shadowColor: "shadow-[#64ffda]/60",
      delay: 0.8
    }
  ], []);

  useEffect(() => {
    setIsBuilding(true);
    
    const handleScroll = () => {
      const sections = blocks.map(block => ({
        id: block.id,
        element: document.getElementById(block.id)
      }));

      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          const sectionTop = rect.top + scrollY;
          const sectionBottom = sectionTop + rect.height;
          
          if (scrollY >= sectionTop - viewportHeight / 2 && scrollY < sectionBottom - viewportHeight / 2) {
            setActiveBlockId(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [blocks]);

  const handleBlockClick = (id: string) => {
    setClickedBlock(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Reset click animation after 500ms
    setTimeout(() => setClickedBlock(null), 500);
  };

  return (
    <>
      {/* Subtle background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-30 z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#64ffda]/10 rounded-full animate-pulse"
            style={{
              top: `${20 + i * 15}%`,
              right: `${10 + i * 3}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
      
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-b from-[#64ffda]/5 to-transparent rounded-3xl blur-xl"></div>
        
        <div className="relative space-y-0">
          <div className="mb-4 text-center">
            <Sparkles className="w-6 h-6 text-[#64ffda] mx-auto mb-2 animate-pulse" />
            <p className="text-[#64ffda] text-xs font-mono tracking-wider">BUILD</p>
          </div>

          {blocks.map((block, index) => (
            <div
              key={block.id}
              className={`
                relative cursor-pointer transition-all duration-500
                ${isBuilding ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              `}
              style={{
                transitionDelay: `${block.delay}s`,
                marginTop: index === 0 ? '0' : '-8px',
                zIndex: blocks.length - index
              }}
              onMouseEnter={() => setHoveredBlock(block.id)}
              onMouseLeave={() => setHoveredBlock(null)}
              onClick={() => handleBlockClick(block.id)}
            >
              <div
                className={`
                  relative transform transition-all preserve-3d
                  ${hoveredBlock === block.id ? 'scale-110 -translate-x-2' : ''}
                  ${activeBlockId === block.id ? 'translate-x-2' : ''}
                  ${clickedBlock === block.id ? 'animate-pulse' : ''}
                `}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `
                    ${hoveredBlock === block.id ? 'rotateY(-15deg) rotateX(5deg) scale(1.1) translateX(-8px)' : 'rotateY(-25deg) rotateX(10deg)'}
                    ${activeBlockId === block.id ? 'translateX(8px)' : ''}
                    ${clickedBlock === block.id ? 'scale(0.95)' : ''}
                  `,
                  transitionDuration: clickedBlock === block.id ? '100ms' : '300ms'
                }}
              >
                {/* Top face */}
                <div 
                  className={`
                    absolute inset-0 w-32 h-16 bg-gradient-to-br ${block.color}
                    rounded-lg border border-[#64ffda]/20
                    ${activeBlockId === block.id ? 'border-[#64ffda] shadow-lg shadow-[#64ffda]/30' : ''}
                  `}
                  style={{
                    transform: 'rotateX(90deg) translateZ(8px)',
                    transformOrigin: 'bottom'
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`
                          w-2 h-2 rounded-full
                          ${activeBlockId === block.id ? 'bg-[#64ffda]/60' : 'bg-white/20'}
                        `}
                      />
                    ))}
                  </div>
                </div>

                {/* Front face */}
                <div 
                  className={`
                    relative w-32 h-16 bg-gradient-to-br ${block.color}
                    rounded-lg ${block.shadowColor} shadow-xl
                    border border-[#64ffda]/20 overflow-hidden
                    transition-all duration-300
                    ${activeBlockId === block.id ? 'border-[#64ffda] shadow-2xl shadow-[#64ffda]/50' : ''}
                  `}
                >
                  {/* Glow effect */}
                  {(hoveredBlock === block.id || activeBlockId === block.id) && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#64ffda]/20 to-transparent animate-pulse"></div>
                  )}
                  
                  {/* Particle effects on hover */}
                  {hoveredBlock === block.id && (
                    <>
                      <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#64ffda] rounded-full animate-ping"></div>
                      <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#64ffda] rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
                      <div className="absolute top-1/2 -left-2 w-1 h-1 bg-[#64ffda] rounded-full animate-bounce"></div>
                    </>
                  )}

                  <div className="relative z-10 p-3 flex flex-col justify-center h-full">
                    <div className="flex items-center space-x-2">
                      <div className={`
                        text-[#64ffda] transition-transform duration-300
                        ${hoveredBlock === block.id ? 'scale-125 rotate-12' : ''}
                      `}>
                        {block.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white text-xs font-bold tracking-wide">
                          {block.title}
                        </h3>
                        <p className="text-[#64ffda]/70 text-[10px] font-mono">
                          {block.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Active indicator */}
                  {activeBlockId === block.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#64ffda] animate-pulse"></div>
                  )}
                </div>

                {/* Right side face */}
                <div 
                  className={`
                    absolute top-0 w-4 h-16 bg-gradient-to-br ${block.color}
                    border-r border-t border-b border-[#64ffda]/20
                    ${activeBlockId === block.id ? 'border-[#64ffda]/50' : ''}
                  `}
                  style={{
                    right: '-4px',
                    transform: 'rotateY(90deg)',
                    transformOrigin: 'left',
                    background: `linear-gradient(to bottom, rgba(100, 255, 218, ${activeBlockId === block.id ? '0.15' : '0.05'}), rgba(17, 34, 64, 0.9))`
                  }}
                />
              </div>

              {/* Hover tooltip */}
              {hoveredBlock === block.id && (
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <div className="bg-[#112240] text-white px-3 py-1 rounded text-xs font-mono whitespace-nowrap border border-[#64ffda]/30 shadow-lg animate-fadeIn">
                    {block.title}
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="mt-4 text-center">
            <Layers className="w-6 h-6 text-[#64ffda]/50 mx-auto mt-2" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BuildingBlocksSidebar;