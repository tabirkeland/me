import { useEffect, useState, useRef } from 'react';

interface Block {
  id: string;
  color: string;
  label: string;
}

const sectionConfig = [
  { id: 'about', color: 'bg-[#64ffda]', label: 'About' },
  { id: 'skills', color: 'bg-[#5f8fff]', label: 'Skills' },
  { id: 'experience', color: 'bg-[#9f6fff]', label: 'Experience' },
  { id: 'education', color: 'bg-[#45d97e]', label: 'Education' },
  { id: 'contact', color: 'bg-[#ff6b6b]', label: 'Contact' },
];

const BuildingBlocksTracker = () => {
  const [activeBlocks, setActiveBlocks] = useState<Block[]>([]);
  const [removingBlocks, setRemovingBlocks] = useState<string[]>([]);
  const observersRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer
    observersRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionId = entry.target.id;
          const config = sectionConfig.find(s => s.id === sectionId);
          
          if (!config) return;
          
          if (entry.isIntersecting) {
            // Add block if not already present
            setActiveBlocks(prev => {
              const exists = prev.some(b => b.id === sectionId);
              if (exists) return prev;
              
              // Add in correct order based on sectionConfig
              const newBlock = { ...config };
              const updatedBlocks = [...prev, newBlock];
              
              // Sort by original section order
              return updatedBlocks.sort((a, b) => {
                const aIndex = sectionConfig.findIndex(s => s.id === a.id);
                const bIndex = sectionConfig.findIndex(s => s.id === b.id);
                return aIndex - bIndex;
              });
            });
          } else {
            // Check if section is above viewport (scrolled past)
            const rect = entry.target.getBoundingClientRect();
            const isAbove = rect.bottom < 0;
            
            // Only remove if scrolling back up and section is below viewport
            if (!isAbove) {
              // Add to removing list for animation
              setRemovingBlocks(prev => [...prev, sectionId]);
              
              // Remove after animation
              setTimeout(() => {
                setActiveBlocks(prev => prev.filter(b => b.id !== sectionId));
                setRemovingBlocks(prev => prev.filter(id => id !== sectionId));
              }, 300);
            }
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe all sections
    sectionConfig.forEach(section => {
      const element = document.getElementById(section.id);
      if (element && observersRef.current) {
        observersRef.current.observe(element);
      }
    });

    // Cleanup
    return () => {
      if (observersRef.current) {
        observersRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="fixed right-6 bottom-24 z-40 hidden lg:block">
      <div className="relative">
        {/* Building foundation/base */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-600 opacity-30 rounded-full" />
        
        {/* Blocks container */}
        <div className="flex flex-col-reverse items-center space-y-reverse space-y-1">
          {activeBlocks.map((block, index) => (
            <div
              key={block.id}
              className={`lego-block ${block.color} relative group ${
                removingBlocks.includes(block.id) ? 'removing' : ''
              }`}
              style={{
                animationName: removingBlocks.includes(block.id) ? 'blockRemove' : 'blockDrop',
                animationDuration: removingBlocks.includes(block.id) ? '0.3s' : '0.5s',
                animationTimingFunction: removingBlocks.includes(block.id) ? 'ease-out' : 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                animationFillMode: 'forwards',
                animationDelay: removingBlocks.includes(block.id) ? '0s' : `${index * 0.05}s`,
              }}
            >
              {/* Block body */}
              <div className="w-16 h-8 rounded-sm relative shadow-lg transition-transform duration-200 hover:scale-105">
                {/* LEGO studs */}
                <div className="absolute -top-1 left-3 w-2.5 h-2.5 rounded-full bg-inherit brightness-110 shadow-sm" />
                <div className="absolute -top-1 right-3 w-2.5 h-2.5 rounded-full bg-inherit brightness-110 shadow-sm" />
                
                {/* 3D effect - side shadow */}
                <div className="absolute inset-0 rounded-sm bg-black opacity-20" 
                     style={{
                       clipPath: 'polygon(0 20%, 100% 20%, 100% 100%, 0 100%)'
                     }} />
                
                {/* Hover tooltip */}
                <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-[#112240] text-[#64ffda] text-xs font-mono px-2 py-1 rounded whitespace-nowrap">
                    {block.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress counter */}
        {activeBlocks.length > 0 && (
          <div className="mt-4 text-center">
            <span className="text-xs font-mono text-gray-500">
              {activeBlocks.length}/5
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuildingBlocksTracker;