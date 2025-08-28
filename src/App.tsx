import { useState, useEffect } from "react";
import { TypedName } from "./components/AnimatedComponents";
import LoadingScreen from "./components/LoadingScreen";
import { LegoStackingProvider } from "./components/BackgroundLegoStacking";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Database,
  Server,
  Code,
  Cpu,
  LineChart,
  Layers,
  Download,
} from "lucide-react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle resume download
  const handleResumeDownload = () => {
    // Create a link element
    const link = document.createElement("a");

    // Set the link's href to the path of your PDF file
    // You would need to add your actual resume.pdf to the public folder of your React app
    link.href = "/resume.pdf";

    // Set download attribute to suggest a filename
    link.download = "taylor_birkeland_resume.pdf";

    // Append link to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up: remove the link from the DOM
    document.body.removeChild(link);
  };

  const sections = [
    { id: "about", title: "About", number: "01" },
    { id: "skills", title: "Skills", number: "02" },
    { id: "experience", title: "Experience", number: "03" },
    { id: "education", title: "Education", number: "04" },
    { id: "contact", title: "Contact", number: "05" },
  ];


  const technologies = {
    backend: ["PHP/Laravel", "Python", "Node.js", "GraphQL", "MySQL", "Redis"],
    frontend: [
      "React",
      "Angular",
      "Tailwind",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "Vite",
      "Webpack",
    ],
    infrastructure: ["AWS", "Docker", "CI/CD", "Linux", "Microservices"],
  };

  // Add useEffect to simulate resources loading and handle real loading
  useEffect(() => {
    // This ensures the loading screen shows for at least 2 seconds
    // even if resources load faster
    const minLoadingTime = setTimeout(() => {
      // When all resources are loaded, this will run
      if (document.readyState === "complete") {
        setIsLoading(false);
      } else {
        // If resources aren't loaded yet, set up an event listener
        window.addEventListener("load", () => setIsLoading(false));
      }
    }, 2000);

    return () => {
      clearTimeout(minLoadingTime);
      window.removeEventListener("load", () => setIsLoading(false));
    };
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      )}
      <LegoStackingProvider>
        <div
          className={`min-h-screen bg-[#0a192f] text-gray-400 ${
            isLoading ? "hidden" : ""
          }`}
        >
        {/* Header */}
        <header className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50">
          <nav className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex justify-between items-center">
              <a href="#" className="text-[#64ffda] font-mono text-xl">
                TB
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-300 hover:text-[#64ffda] transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

              {/* Desktop navigation */}
              <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="relative text-sm font-mono text-gray-400 hover:text-[#64ffda] transition-colors"
                  >
                    <span className="text-[#64ffda]">{section.number}. </span>
                    {section.title}
                  </a>
                ))}
                <button
                  onClick={handleResumeDownload}
                  className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors flex items-center"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </button>
              </div>
            </div>

            {/* Mobile navigation */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 md:hidden bg-[#112240] border-b border-[#233554] animate-fadeIn">
                <div className="px-4 py-6 space-y-4">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block py-2 font-mono text-base text-gray-400 hover:text-[#64ffda] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="text-[#64ffda]">{section.number}. </span>
                      {section.title}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      handleResumeDownload();
                    }}
                    className="inline-flex items-center px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors mt-4"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </button>
                </div>
              </div>
            )}
          </nav>
        </header>

        {/* Main content */}
        <main className="container mx-auto px-4 sm:px-6">
          {/* Hero section */}
          <section id="hero" className="min-h-screen flex items-center pt-20 sm:pt-0 relative">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                  {/* Left Content - 70% */}
                  <div className="lg:col-span-3 relative">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-3 sm:mb-4">
                    <TypedName fullName="Taylor Birkeland" />.
                  </h1>
                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#64ffda] mb-2">
                      Software Engineering Leader & AI Enthusiast
                    </h2>
                    <div className="font-mono text-lg text-gray-300">
                      14 years building systems • Scaled teams 2→10 engineers • $300K+ monthly revenue
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8 font-mono text-sm">
                    <span>Minneapolis, MN</span>
                    <span className="hidden sm:inline text-[#64ffda]">|</span>
                    <a
                      href="mailto:birkelandtaylor@gmail.com"
                      className="hover:text-[#64ffda] transition-colors"
                    >
                      birkelandtaylor@gmail.com
                    </a>
                  </div>
                  <p className="max-w-2xl text-gray-400 text-base sm:text-lg mb-8 sm:mb-12">
                    Co-founded TipHaus and scaled platform to <span className="text-[#64ffda] font-semibold">90,000+ users</span> while 
                    growing engineering team from <span className="text-[#64ffda] font-semibold">2 to 10 engineers</span>. 
                    Expert in fintech systems, AI integration, and scalable infrastructure that processes millions annually.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                      href="#experience"
                      className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
                    >
                      View Experience
                    </a>
                    <button
                      onClick={handleResumeDownload}
                      className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-[#64ffda] text-[#0a192f] rounded font-mono text-sm hover:bg-[#64ffda]/90 transition-colors flex items-center justify-center"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </button>
                    <a
                      href="https://www.linkedin.com/in/taylor-birkeland-a0100175"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-500 text-gray-300 rounded font-mono text-sm hover:border-[#64ffda] hover:text-[#64ffda] transition-colors flex items-center justify-center"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/tabirkeland"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-500 text-gray-300 rounded font-mono text-sm hover:border-[#64ffda] hover:text-[#64ffda] transition-colors flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Right Impact Metrics - 30% */}
                <div className="lg:col-span-2 hidden lg:block relative">
                  <div className="bg-[#112240] rounded-lg p-6 border border-[#233554] relative overflow-hidden">
                    <h3 className="text-[#64ffda] font-mono text-sm mb-4 relative z-10">Leadership Impact</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Platform Users</span>
                        <span className="text-gray-200 font-semibold">90,000+</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Team Growth</span>
                        <span className="text-gray-200 font-semibold">2→10 Engineers</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">User Growth</span>
                        <span className="text-gray-200 font-semibold">30x Scale</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Years Leadership</span>
                        <span className="text-gray-200 font-semibold">6 Years</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#233554]">
                      <h4 className="text-[#64ffda] font-mono text-xs mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#0a192f] text-xs rounded font-mono text-gray-300">React</span>
                        <span className="px-2 py-1 bg-[#0a192f] text-xs rounded font-mono text-gray-300">Python</span>
                        <span className="px-2 py-1 bg-[#0a192f] text-xs rounded font-mono text-gray-300">AWS</span>
                        <span className="px-2 py-1 bg-[#0a192f] text-xs rounded font-mono text-gray-300">GraphQL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About section */}
          <section id="about" className="py-20 sm:py-32 relative z-10">
            <div className="max-w-5xl">
              <p className="section-heading">01. About Me</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-6">
                Professional Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="md:col-span-2 text-gray-400">
                  <p className="mb-6 sm:mb-8">
                    As a Software Engineering Leader, I've dedicated my career
                    to building scalable solutions and leading high-performance
                    engineering teams. At TipHaus, I co-founded and grew the
                    engineering team, scaling our platform to support over
                    90,000 users and generating substantial recurring revenue.
                  </p>
                  <p className="mb-6 sm:mb-8">
                    My expertise spans across advanced ledgering systems,
                    real-time APIs, and robust application architectures. I'm
                    particularly passionate about creating efficient,
                    maintainable systems that drive business growth while
                    ensuring the highest standards of security and reliability.
                  </p>
                  <div className="mb-8">
                    <h3 className="text-gray-200 font-semibold mb-4">
                      Technical Proficiencies:
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(technologies).map(([category, techs]) => (
                        <div key={category}>
                          <h4 className="text-[#64ffda] font-mono text-sm mb-2">
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                            :
                          </h4>
                          <p className="font-mono text-sm">
                            {techs.join(", ")}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative group max-w-sm mx-auto">
                  <div className="relative z-10 overflow-hidden rounded aspect-square">
                    <img
                      src="/headshot.jpeg"
                      alt="Taylor Birkeland"
                      className="w-full h-full object-cover object-center shadow-lg hover:shadow-xl transition-all duration-300 image-crisp"
                    />
                  </div>
                  <div className="absolute top-6 left-6 w-full aspect-square border-2 border-[#64ffda] rounded -z-0 group-hover:top-4 group-hover:left-4 transition-all duration-300 opacity-80"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills section */}
          <section id="skills" className="py-20 sm:py-32 relative z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#112240]/20 to-transparent pointer-events-none"></div>
            <div className="max-w-7xl relative">
                <p className="section-heading">02. Core Skills</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-12">
                  Building Blocks of Expertise
                </h2>
                
                {/* Modular Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                  
                  {/* Leadership Block - Larger */}
                  <div className="sm:col-span-2 lg:col-span-1 xl:col-span-2 bg-gradient-to-br from-[#1e3a8a] to-[#3730a3] rounded-lg p-6 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 border border-blue-400/30 hover:border-blue-300/50 group">
                    <div className="flex items-center mb-4">
                      <Layers className="w-8 h-8 text-blue-300 mr-3 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-bold text-gray-200 group-hover:text-blue-300 transition-colors">
                        Leadership & Strategy
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-400/20">
                        <div className="text-blue-300 font-mono text-sm">Team Scaling: 2→10 Engineers</div>
                      </div>
                      <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-400/20">
                        <div className="text-blue-300 font-mono text-sm">Product Strategy & Vision</div>
                      </div>
                      <div className="bg-blue-900/30 rounded-lg p-3 border border-blue-400/20">
                        <div className="text-blue-300 font-mono text-sm">Engineering Culture Building</div>
                      </div>
                    </div>
                  </div>

                  {/* Backend Block */}
                  <div className="bg-gradient-to-br from-[#166534] to-[#15803d] rounded-lg p-6 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 border border-green-400/30 hover:border-green-300/50 group">
                    <div className="flex items-center mb-4">
                      <Server className="w-7 h-7 text-green-300 mr-3 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-bold text-gray-200 group-hover:text-green-300 transition-colors">
                        Backend Systems
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="text-green-300 font-mono">PHP/Laravel</div>
                      <div className="text-green-300 font-mono">Python</div>
                      <div className="text-green-300 font-mono">Node.js</div>
                      <div className="text-green-300 font-mono">GraphQL APIs</div>
                      <div className="text-green-300 font-mono">Microservices</div>
                    </div>
                  </div>

                  {/* Frontend Block */}
                  <div className="bg-gradient-to-br from-[#7c2d12] to-[#dc2626] rounded-lg p-6 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 border border-red-400/30 hover:border-red-300/50 group">
                    <div className="flex items-center mb-4">
                      <Code className="w-7 h-7 text-red-300 mr-3 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-bold text-gray-200 group-hover:text-red-300 transition-colors">
                        Frontend Development
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="text-red-300 font-mono">React</div>
                      <div className="text-red-300 font-mono">TypeScript</div>
                      <div className="text-red-300 font-mono">Tailwind CSS</div>
                      <div className="text-red-300 font-mono">Vite</div>
                      <div className="text-red-300 font-mono">Angular</div>
                    </div>
                  </div>

                  {/* AI Tools Block */}
                  <div className="bg-gradient-to-br from-[#581c87] to-[#7c3aed] rounded-lg p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1 border border-purple-400/30 hover:border-purple-300/50 group">
                    <div className="flex items-center mb-4">
                      <Cpu className="w-7 h-7 text-purple-300 mr-3 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-bold text-gray-200 group-hover:text-purple-300 transition-colors">
                        AI & Modern Tools
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="text-purple-300 font-mono">Claude Code</div>
                      <div className="text-purple-300 font-mono">AI Workflows</div>
                      <div className="text-purple-300 font-mono">Automated Testing</div>
                      <div className="text-purple-300 font-mono">Code Generation</div>
                      <div className="text-purple-300 font-mono">Agent Systems</div>
                    </div>
                  </div>

                  {/* Architecture Block */}
                  <div className="bg-gradient-to-br from-[#a16207] to-[#d97706] rounded-lg p-6 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 border border-orange-400/30 hover:border-orange-300/50 group">
                    <div className="flex items-center mb-4">
                      <Database className="w-7 h-7 text-orange-300 mr-3 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-bold text-gray-200 group-hover:text-orange-300 transition-colors">
                        Architecture & Scale
                      </h3>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="text-orange-300 font-mono">System Design</div>
                      <div className="text-orange-300 font-mono">Database Optimization</div>
                      <div className="text-orange-300 font-mono">Performance Tuning</div>
                      <div className="text-orange-300 font-mono">AWS Infrastructure</div>
                      <div className="text-orange-300 font-mono">Redis Caching</div>
                    </div>
                  </div>

                </div>
            </div>
          </section>

          {/* Experience section */}
          <section id="experience" className="py-20 sm:py-32 relative z-10">
            <div className="max-w-7xl relative">
              <p className="section-heading">03. Experience</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-12">
                  Building My Career
                </h2>
              
              {/* Building Blocks Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-min">
                
                {/* TipHaus - Large Featured Block (spans 2 columns) */}
                <div className="md:col-span-2 bg-gradient-to-br from-[#112240] to-[#1a365d] rounded-lg p-6 hover:shadow-2xl hover:shadow-[#64ffda]/10 transition-all duration-300 hover:-translate-y-1 border border-[#233554] hover:border-[#64ffda]/30 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-200 mb-1 group-hover:text-[#64ffda] transition-colors">
                        Co-Founder & Engineering Leader
                      </h3>
                      <a
                        href="https://tiphaus.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#64ffda] hover:text-[#64ffda]/80 inline-flex items-center font-mono text-sm"
                      >
                        @ TipHaus <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                    <span className="text-[#64ffda] font-mono text-sm bg-[#64ffda]/10 px-3 py-1 rounded-full">2018 - 2024</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-[#0a192f]/80 rounded-lg p-3 text-center border border-[#233554]">
                      <div className="text-[#64ffda] text-2xl font-bold">90K+</div>
                      <div className="text-gray-400 text-xs font-mono">Platform Users</div>
                    </div>
                    <div className="bg-[#0a192f]/80 rounded-lg p-3 text-center border border-[#233554]">
                      <div className="text-[#64ffda] text-2xl font-bold">2→10</div>
                      <div className="text-gray-400 text-xs font-mono">Team Growth</div>
                    </div>
                    <div className="bg-[#0a192f]/80 rounded-lg p-3 text-center border border-[#233554]">
                      <div className="text-[#64ffda] text-2xl font-bold">30x</div>
                      <div className="text-gray-400 text-xs font-mono">Scale Growth</div>
                    </div>
                    <div className="bg-[#0a192f]/80 rounded-lg p-3 text-center border border-[#233554]">
                      <div className="text-[#64ffda] text-2xl font-bold">$300K+</div>
                      <div className="text-gray-400 text-xs font-mono">Monthly Revenue</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex items-start">
                      <span className="text-[#64ffda] mr-2 mt-1 text-lg">◦</span>
                      <span>Led fintech "Earned Tip Access" product with banking API integration, boosting adoption 40%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#64ffda] mr-2 mt-1 text-lg">◦</span>
                      <span>Architected scalable infrastructure supporting millions in annual transactions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#64ffda] mr-2 mt-1 text-lg">◦</span>
                      <span>Built engineering culture, code review processes, and mentorship programs</span>
                    </li>
                  </ul>
                </div>

                {/* AI Journey Block - Prominent */}
                <div className="md:col-span-1 lg:col-span-2 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg p-6 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 border border-purple-500/30 hover:border-purple-400/50 group">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Cpu className="w-6 h-6 text-purple-400 mr-3" />
                      <h3 className="text-xl font-bold text-gray-200 group-hover:text-purple-400 transition-colors">
                        AI Engineering & Claude Expertise
                      </h3>
                    </div>
                    <span className="text-purple-400 font-mono text-sm bg-purple-400/10 px-3 py-1 rounded-full">2023 - Present</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="bg-[#0a192f]/80 rounded-lg p-3 border border-purple-500/20">
                      <div className="text-purple-400 text-lg font-bold">Claude Code Expert</div>
                      <div className="text-gray-400 text-sm">AI-assisted development workflows</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 text-sm text-gray-400">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1 text-lg">◦</span>
                      <span>Built AI-powered development workflows using Claude for code generation and architecture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1 text-lg">◦</span>
                      <span>Pioneered AI-assisted debugging and automated code review processes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1 text-lg">◦</span>
                      <span>Leading team adoption of AI development tools and best practices</span>
                    </li>
                  </ul>
                </div>

                {/* HED Block */}
                <div className="bg-gradient-to-br from-[#112240] to-[#1a365d] rounded-lg p-6 hover:shadow-2xl hover:shadow-[#64ffda]/10 transition-all duration-300 hover:-translate-y-1 border border-[#233554] hover:border-[#64ffda]/30 group">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-200 mb-1 group-hover:text-[#64ffda] transition-colors">
                      CANect Solutions Engineer
                    </h3>
                    <a
                      href="https://www.hedcontrols.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64ffda] hover:text-[#64ffda]/80 inline-flex items-center font-mono text-sm"
                    >
                      @ HED <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                  <span className="text-[#64ffda] font-mono text-xs bg-[#64ffda]/10 px-2 py-1 rounded-full mb-4 inline-block">2017 - 2021</span>
                  
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start">
                      <span className="text-[#64ffda] mr-2 mt-1">▸</span>
                      <span>Reduced system downtime 60% via firmware pipeline optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#64ffda] mr-2 mt-1">▸</span>
                      <span>Integrated IoT telematics for predictive maintenance</span>
                    </li>
                  </ul>
                </div>

                {/* IAPP Block */}
                <div className="bg-gradient-to-br from-[#112240] to-[#1a365d] rounded-lg p-6 hover:shadow-2xl hover:shadow-[#64ffda]/10 transition-all duration-300 hover:-translate-y-1 border border-[#233554] hover:border-[#64ffda]/30 group">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-200 mb-1 group-hover:text-[#64ffda] transition-colors">
                      Software Developer
                    </h3>
                    <a
                      href="https://iapp.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64ffda] hover:text-[#64ffda]/80 inline-flex items-center font-mono text-sm"
                    >
                      @ IAPP <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                  <span className="text-[#64ffda] font-mono text-xs bg-[#64ffda]/10 px-2 py-1 rounded-full mb-4 inline-block">2016 - 2017</span>
                  
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start">
                      <span className="text-[#64ffda] mr-2 mt-1">▸</span>
                      <span>Built Salesforce-integrated purchasing systems</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#64ffda] mr-2 mt-1">▸</span>
                      <span>Mentored team members, established dev processes</span>
                    </li>
                  </ul>
                </div>

                {/* Leadership Impact Block */}
                <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-lg p-6 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1 border border-orange-500/30 hover:border-orange-400/50 group">
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <LineChart className="w-5 h-5 text-orange-400 mr-2" />
                      <h3 className="text-lg font-bold text-gray-200 group-hover:text-orange-400 transition-colors">
                        Leadership Impact
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Team Building</span>
                      <span className="text-orange-400 font-mono text-sm">6 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Mentoring</span>
                      <span className="text-orange-400 font-mono text-sm">7 years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Architecture</span>
                      <span className="text-orange-400 font-mono text-sm">8 years</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Education section */}
          <section id="education" className="py-20 sm:py-32 relative">
            <div className="max-w-4xl">
              <p className="section-heading">04. Education</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-6">
                Academic Background
              </h2>
              <div className="space-y-6">
                <div className="bg-[#112240] rounded-lg p-6 sm:p-8 hover:bg-[#112240]/70 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">
                    Electronics Engineering Technology (ETEC)
                  </h3>
                  <p className="text-[#64ffda] font-mono text-sm mb-4">
                    Western Washington University
                  </p>
                  <p className="font-mono text-sm mb-4">2006 - 2013</p>
                  <ul className="space-y-4">
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>
                        Specialized in electronics engineering and embedded
                        systems development
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>
                        Focused on hardware-software integration and system
                        design
                      </span>
                    </li>
                    <li className="flex">
                      <span className="text-[#64ffda] mr-2">▹</span>
                      <span>
                        Developed strong foundation in electrical engineering
                        principles and programming
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact section */}
          <section id="contact" className="py-20 sm:py-32 relative">
            <div className="max-w-4xl mx-auto text-center px-4">
              <p className="section-heading">05. What's Next?</p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-6">
                Let's Build Something Together
              </h2>
              <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
                I'm always interested in hearing about new opportunities and
                exciting projects. Whether you need an engineering leader, an AI integration expert,
                or just want to discuss the future of software development.
              </p>
              
              {/* Contact Building Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                <div className="bg-gradient-to-br from-[#112240] to-[#1a365d] rounded-lg p-6 hover:shadow-2xl hover:shadow-[#64ffda]/10 transition-all duration-300 hover:-translate-y-1 border border-[#233554] hover:border-[#64ffda]/50 group">
                  <Mail className="w-8 h-8 text-[#64ffda] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-mono text-sm text-gray-300 mb-2">Email</h3>
                  <a
                    href="mailto:birkelandtaylor@gmail.com"
                    className="text-[#64ffda] hover:text-[#64ffda]/80 text-sm transition-colors"
                  >
                    Get in touch
                  </a>
                </div>
                
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3730a3] rounded-lg p-6 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 border border-blue-400/30 hover:border-blue-300/50 group">
                  <Linkedin className="w-8 h-8 text-blue-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-mono text-sm text-gray-300 mb-2">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/taylor-birkeland-a0100175"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 text-sm transition-colors"
                  >
                    Connect professionally
                  </a>
                </div>
                
                <div className="bg-gradient-to-br from-[#374151] to-[#4b5563] rounded-lg p-6 hover:shadow-2xl hover:shadow-gray-500/10 transition-all duration-300 hover:-translate-y-1 border border-gray-400/30 hover:border-gray-300/50 group">
                  <Github className="w-8 h-8 text-gray-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-mono text-sm text-gray-300 mb-2">GitHub</h3>
                  <a
                    href="https://github.com/tabirkeland"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gray-200 text-sm transition-colors"
                  >
                    View my code
                  </a>
                </div>
                
                <div className="bg-gradient-to-br from-[#166534] to-[#15803d] rounded-lg p-6 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1 border border-green-400/30 hover:border-green-300/50 group">
                  <Download className="w-8 h-8 text-green-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-mono text-sm text-gray-300 mb-2">Resume</h3>
                  <button
                    onClick={handleResumeDownload}
                    className="text-green-300 hover:text-green-200 text-sm transition-colors"
                  >
                    Download PDF
                  </button>
                </div>
              </div>
              
              {/* Primary CTA */}
              <div className="max-w-md mx-auto">
                <a
                  href="mailto:birkelandtaylor@gmail.com"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#64ffda] to-[#4ade80] text-[#0a192f] rounded-lg font-mono text-sm font-bold hover:from-[#4ade80] hover:to-[#64ffda] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#64ffda]/20 transform hover:-translate-y-1"
                >
                  <Mail className="mr-2" size={18} />
                  Let's Start a Conversation
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-6 text-center font-mono text-sm">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Taylor Birkeland. All rights reserved.
          </p>
        </footer>
      </div>
      </LegoStackingProvider>
    </>
  );
}

export default App;
