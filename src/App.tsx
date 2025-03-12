import { useState } from "react";
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
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "about", title: "About", number: "01" },
    { id: "skills", title: "Skills", number: "02" },
    { id: "education", title: "Education", number: "03" },
    { id: "experience", title: "Experience", number: "04" },
    { id: "contact", title: "Contact", number: "05" },
  ];

  const skills = [
    {
      icon: <Server className="w-6 h-6" />,
      name: "API Development & Integration",
      description:
        "Expert in developing scalable RESTful and GraphQL APIs, with extensive experience in designing ETL frameworks for data integration. Specialized in building secure, real-time systems and enterprise solutions for enhanced operational efficiency.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      name: "Database Management",
      description:
        "Advanced expertise in database design, optimization, and migration strategies across SQL and NoSQL solutions. Proven track record in maintaining data integrity and implementing robust financial data reconciliation systems.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      name: "Full-Stack Development",
      description:
        "Comprehensive full-stack development expertise with proficiency in React, Angular, Node.js, Python, and PHP/Laravel. Strong focus on code quality, review processes, and implementing best practices for scalable applications.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      name: "Fintech Systems",
      description:
        "Specialized in developing high-performance fintech payment processing platforms, implementing advanced ledgering systems, and ensuring financial data accuracy and compliance. Expert in real-time transaction processing and banking API integrations.",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      name: "Scalability & Performance",
      description:
        "Proven expertise in optimizing system architecture for high performance, implementing advanced caching mechanisms, and designing asynchronous job processing systems. Experience in scaling applications to support massive user growth.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      name: "System Design & Architecture",
      description:
        "Skilled in designing microservices architectures, implementing real-time monitoring systems, and developing robust application infrastructures. Focus on maintainable, scalable solutions that drive business growth.",
    },
  ];

  const technologies = {
    backend: [
      "Python",
      "Node.js",
      "GraphQL",
      "PHP/Laravel",
      "MySQL",
      "Redis",
      "AWS",
    ],
    frontend: [
      "React",
      "Angular",
      "Tailwind",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "Vite",
    ],
    infrastructure: ["AWS", "Docker", "CI/CD", "Linux", "Microservices"],
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-gray-400">
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
              <a
                href="#"
                className="px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
              >
                Resume
              </a>
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
                <a
                  href="#"
                  className="inline-block px-4 py-2 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors mt-4"
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 sm:px-6">
        {/* Hero section */}
        <section className="min-h-screen flex items-center pt-20 sm:pt-0">
          <div className="max-w-4xl">
            <p className="font-mono text-[#64ffda] mb-4 sm:mb-5 text-sm sm:text-base">
              Hi, my name is
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-200 mb-3 sm:mb-4">
              Taylor Birkeland.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-400 mb-6 sm:mb-8">
              Software Engineering Leader.
            </h2>
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
            <p className="max-w-xl text-gray-400 text-base sm:text-lg mb-8 sm:mb-12">
              Highly skilled Software Engineer and Engineering Leader with
              extensive expertise in developing scalable systems, real-time
              APIs, and robust application architectures. Proven track record in
              building and leading high-performance engineering teams.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#experience"
                className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 bg-[#64ffda] text-[#0a192f] rounded font-mono text-sm hover:bg-[#64ffda]/90 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-20 sm:py-32">
          <div className="max-w-4xl">
            <p className="section-heading">01. About Me</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-6">
              Professional Overview
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-2 text-gray-400">
                <p className="mb-6 sm:mb-8">
                  As a Software Engineering Leader, I've dedicated my career to
                  building scalable solutions and leading high-performance
                  engineering teams. At TipHaus, I co-founded and grew the
                  engineering team, scaling our platform to support over 90,000
                  users and generating substantial recurring revenue.
                </p>
                <p className="mb-6 sm:mb-8">
                  My expertise spans across advanced ledgering systems,
                  real-time APIs, and robust application architectures. I'm
                  particularly passionate about creating efficient, maintainable
                  systems that drive business growth while ensuring the highest
                  standards of security and reliability.
                </p>
                <div className="mb-8">
                  <h3 className="text-gray-200 font-semibold mb-4">
                    Technical Proficiencies:
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(technologies).map(([category, techs]) => (
                      <div key={category}>
                        <h4 className="text-[#64ffda] font-mono text-sm mb-2">
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                          :
                        </h4>
                        <p className="font-mono text-sm">{techs.join(", ")}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="relative z-10">
                  <img
                    src="https://media.licdn.com/dms/image/v2/C4D03AQGqsIKQuyVGRQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1639631293071?e=1747267200&v=beta&t=GKVvF_XY3V_lj-kMBOS0sG51mm4AQN1kPn7G30h2S9M"
                    alt="Taylor Birkeland"
                    className="w-full rounded grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 border-2 border-[#64ffda] rounded translate-x-4 translate-y-4 -z-0 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section id="skills" className="py-20 sm:py-32">
          <div className="max-w-4xl">
            <p className="section-heading">02. Core Skills</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-6">
              What I Do Best
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#112240] rounded-lg p-5 sm:p-6 hover:bg-[#112240]/70 transition-colors"
                >
                  <div className="text-[#64ffda] mb-4">{skill.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-200 mb-3">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education section */}
        <section id="education" className="py-20 sm:py-32">
          <div className="max-w-4xl">
            <p className="section-heading">03. Education</p>
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
                      Focused on hardware-software integration and system design
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

        {/* Experience section */}
        <section id="experience" className="py-20 sm:py-32">
          <div className="max-w-4xl">
            <p className="section-heading">04. Experience</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-6">
              Where I've Worked
            </h2>
            <div className="space-y-6 sm:space-y-12">
              <div className="bg-[#112240] rounded-lg p-6 sm:p-8 hover:bg-[#112240]/70 transition-colors">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  Co-Founder & VP of Engineering{" "}
                  <a
                    href="https://tiphaus.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64ffda] hover:text-[#64ffda]/80 inline-flex items-center"
                  >
                    @ TipHaus <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </h3>
                <p className="font-mono text-sm mb-4">2018 - 2024</p>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Grew from 2 to 10 engineers, fostered high-performance
                      culture, and drove innovation by expanding and cultivating
                      elite engineering team
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Generated $300K+ in monthly recurring revenue by
                      propelling business expansion from launch to 3,000+ paying
                      customers
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Engineered scalable infrastructure supporting 30x user
                      growth and accommodating 90K+ end-users
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Formulated and implemented ledgering and reconciliation
                      systems ensuring financial data accuracy and compliance
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#112240] rounded-lg p-6 sm:p-8 hover:bg-[#112240]/70 transition-colors">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  CANect Solutions Engineer{" "}
                  <a
                    href="https://www.hedcontrols.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64ffda] hover:text-[#64ffda]/80 inline-flex items-center"
                  >
                    @ HED <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </h3>
                <p className="font-mono text-sm mb-4">2017 - 2021</p>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Reduced system downtime by enhancing firmware deployment
                      pipelines and streamlining automation
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Optimized asset performance by integrating IoT telematics
                      for real-time data tracking and predictive maintenance
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Improved system reliability by developing embedded
                      software for remote monitoring and diagnostics
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Designed and deployed embedded system applications
                      enabling real-time monitoring and control
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#112240] rounded-lg p-6 sm:p-8 hover:bg-[#112240]/70 transition-colors">
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  Software Developer{" "}
                  <a
                    href="https://iapp.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#64ffda] hover:text-[#64ffda]/80 inline-flex items-center"
                  >
                    @ IAPP <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </h3>
                <p className="font-mono text-sm mb-4">2016 - 2017</p>
                <ul className="space-y-4">
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Designed and implemented complex online purchasing systems
                      with Salesforce integration
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Developed comprehensive analytics dashboard integrating
                      Salesforce data for real-time insights
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Established new development processes while optimizing
                      team efficiency
                    </span>
                  </li>
                  <li className="flex">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    <span>
                      Led development of IAPP Events mobile app enhancing
                      conference experiences
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20 sm:py-32">
          <div className="max-w-2xl mx-auto text-center px-4">
            <p className="section-heading">05. What's Next?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-6">
              Get In Touch
            </h2>
            <p className="text-gray-400 mb-8 sm:mb-12">
              I'm always interested in hearing about new opportunities and
              exciting projects. Whether you have a question or just want to say
              hi, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="mailto:birkelandtaylor@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
              >
                <Mail className="mr-2" size={18} />
                Email Me
              </a>
              <a
                href="https://www.linkedin.com/in/taylor-birkeland-a0100175"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
              >
                <Linkedin className="mr-2" size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/tabirkeland"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
              >
                <Github className="mr-2" size={18} />
                GitHub
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
  );
}

export default App;
