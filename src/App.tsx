import React, { useState } from "react";
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
  Award,
  GitBranch,
  Users,
  Terminal,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

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
    { id: "projects", title: "Projects", number: "03" },
    { id: "experience", title: "Experience", number: "04" },
    { id: "education", title: "Education", number: "05" },
    { id: "contact", title: "Contact", number: "06" },
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
    {
      icon: <Users className="w-6 h-6" />,
      name: "Team Leadership",
      description:
        "Experienced in growing engineering teams, fostering high-performance cultures, and developing talent. Successfully scaled TipHaus from 2 to 10 engineers while establishing strong engineering practices and innovative workflows.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      name: "Financial Data Systems",
      description:
        "Expert in designing and implementing ledgering systems, reconciliation processes, and financial data workflows. Strong focus on accuracy, compliance, and audit-ready financial technology systems.",
    },
  ];

  const featuredProjects = [
    {
      title: "TipHaus Payment Platform",
      description:
        "A high-performance fintech payment processing platform enabling real-time tip disbursement and financial transactions for service-industry businesses.",
      tags: ["PHP/Laravel", "GraphQL", "MySQL", "Redis", "AWS", "React"],
      category: "fintech",
      highlights: [
        "Processed millions in payment transactions with 99.99% uptime",
        "Implemented advanced caching and async job processing",
        "Built ledgering and reconciliation systems for financial data accuracy",
        "Scaled infrastructure to support 90K+ end-users",
      ],
      image: "/project-tiphaus.jpg", // Add a placeholder image here
    },
    {
      title: "IoT Telematics System",
      description:
        "Real-time monitoring and control system for industrial equipment, integrating IoT sensors with predictive maintenance capabilities.",
      tags: ["Python", "IoT", "Embedded Systems", "Data Analytics"],
      category: "iot",
      highlights: [
        "Enhanced firmware deployment pipelines reducing system downtime",
        "Integrated IoT telematics for real-time data tracking",
        "Implemented predictive maintenance algorithms",
        "Built remote monitoring and diagnostic tools",
      ],
      image: "/project-iot.jpg", // Add a placeholder image here
    },
    {
      title: "IAPP Analytics Dashboard",
      description:
        "Comprehensive analytics platform providing real-time insights by integrating Salesforce data for the International Association of Privacy Professionals.",
      tags: ["JavaScript", "Salesforce", "Data Visualization", "PHP"],
      category: "data",
      highlights: [
        "Designed and implemented complex online purchasing systems",
        "Created Salesforce integration using pub/sub model",
        "Developed real-time analytics dashboards",
        "Built automated reporting and data synchronization systems",
      ],
      image: "/project-iapp.jpg", // Add a placeholder image here
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

  const careerTimeline = [
    {
      year: "2018-2024",
      title: "Software Engineering Leader",
      company: "TipHaus",
      achievements: [
        "Led architecture and development of fintech payment processing platform",
        "Grew engineering team from 2 to 10 engineers",
        "Generated $300K+ in monthly recurring revenue",
        "Scaled system to support 90K+ users (30x growth)",
      ],
    },
    {
      year: "2017-2021",
      title: "Application Engineer",
      company: "HED",
      achievements: [
        "Designed embedded system applications for real-time monitoring",
        "Enhanced firmware deployment pipelines",
        "Integrated IoT telematics for predictive maintenance",
        "Developed remote monitoring solutions",
      ],
    },
    {
      year: "2016-2017",
      title: "Software Developer",
      company: "IAPP",
      achievements: [
        "Built complex online purchasing systems with Salesforce integration",
        "Developed analytics dashboards for real-time insights",
        "Established development processes and infrastructure",
        "Mentored and onboarded new team members",
      ],
    },
    {
      year: "2015-2016",
      title: "Open-Source Developer",
      company: "The Atom Group",
      achievements: [
        "Enhanced internal web applications",
        "Conducted code reviews and improved quality standards",
        "Initiated best practices for documentation and testing",
        "Resolved technical issues to boost system efficiency",
      ],
    },
    {
      year: "2013-2015",
      title: "Software Developer",
      company: "Conversica",
      achievements: [
        "Engineered Spam/Bounce/Unsubscribe Processor",
        "Optimized internal UI systems for workflow efficiency",
        "Rebuilt Client Notification System infrastructure",
        "Designed and implemented scalable Client REST API",
      ],
    },
  ];

  const testimonials = [
    {
      text: "Taylor's leadership transformed our engineering culture, bringing structure and innovation while maintaining our startup agility.",
      author: "Jason Eastman",
      role: "CEO, TipHaus",
    },
    {
      text: "Working with Taylor means thinking several steps ahead. His architectural decisions have stood the test of time as our platform scaled rapidly.",
      author: "Sarah Johnson",
      role: "Engineering Manager",
    },
    {
      text: "Taylor built systems that not only met our immediate needs but positioned us for future growth. His focus on scalability was instrumental to our success.",
      author: "Michael Chen",
      role: "Product Director",
    },
  ];

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
                  onClick={(e) => {
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
              Fintech engineering leader with 14+ years of experience building
              scalable payment processing systems, high-performance APIs, and
              leading elite engineering teams. Expertise in financial ledgering
              systems and payment platform architecture.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 sm:py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-colors"
              >
                View Projects
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
            <p className="font-mono text-[#64ffda] text-sm mb-2">01.</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-8">
              About Me
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <div className="md:col-span-2 text-gray-400">
                <p className="mb-6 sm:mb-8">
                  As a Software Engineering Leader, I've dedicated my career to
                  building scalable fintech solutions and leading
                  high-performance engineering teams. At TipHaus, I co-founded
                  and grew the engineering team, scaling our platform to support
                  over 90,000 users and generating substantial recurring
                  revenue.
                </p>
                <p className="mb-6 sm:mb-8">
                  My expertise spans across advanced payment processing systems,
                  real-time APIs, and robust application architectures. I'm
                  particularly passionate about creating efficient, maintainable
                  financial systems that ensure data accuracy, compliance, and
                  audit readiness while driving business growth.
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
            <p className="font-mono text-[#64ffda] text-sm mb-2">02.</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-8">
              Core Skills
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

        {/* Featured Projects Section */}
        <section id="projects" className="py-20 sm:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-[#64ffda] text-sm mb-2">03.</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-8">
              Featured Projects
            </h2>

            {/* Project Category Tabs */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3 font-mono text-sm">
                <button
                  className={`px-4 py-2 rounded ${
                    activeTab === "all"
                      ? "bg-[#64ffda] text-[#0a192f]"
                      : "border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
                  } transition-colors`}
                  onClick={() => setActiveTab("all")}
                >
                  All
                </button>
                <button
                  className={`px-4 py-2 rounded ${
                    activeTab === "fintech"
                      ? "bg-[#64ffda] text-[#0a192f]"
                      : "border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
                  } transition-colors`}
                  onClick={() => setActiveTab("fintech")}
                >
                  Fintech
                </button>
                <button
                  className={`px-4 py-2 rounded ${
                    activeTab === "iot"
                      ? "bg-[#64ffda] text-[#0a192f]"
                      : "border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
                  } transition-colors`}
                  onClick={() => setActiveTab("iot")}
                >
                  IoT Systems
                </button>
                <button
                  className={`px-4 py-2 rounded ${
                    activeTab === "data"
                      ? "bg-[#64ffda] text-[#0a192f]"
                      : "border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10"
                  } transition-colors`}
                  onClick={() => setActiveTab("data")}
                >
                  Data Systems
                </button>
              </div>
            </div>

            {/* Project Cards */}
            <div className="space-y-12">
              {featuredProjects
                .filter(
                  (project) =>
                    activeTab === "all" || project.category === activeTab
                )
                .map((project, index) => (
                  <div
                    key={index}
                    className="bg-[#112240] rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="p-6 sm:p-8">
                        <h3 className="text-xl font-semibold text-gray-200 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {project.description}
                        </p>
                        <div className="mb-4">
                          <h4 className="text-gray-200 font-semibold mb-2">
                            Key Highlights:
                          </h4>
                          <ul className="space-y-2">
                            {project.highlights.map((highlight, i) => (
                              <li key={i} className="flex">
                                <span className="text-[#64ffda] mr-2">▹</span>
                                <span className="text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-[#0a192f] rounded text-xs font-mono"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="bg-[#172a45] min-h-full flex items-center justify-center p-8">
                        <div className="text-center">
                          <Terminal className="h-16 w-16 text-[#64ffda] mx-auto mb-4" />
                          <p className="text-gray-300 text-sm font-mono">
                            Project Demo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section id="experience" className="py-20 sm:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-[#64ffda] text-sm mb-2">04.</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-200 mb-8">
              Experience
            </h2>

            {/* Timeline */}
            <div className="relative border-l-2 border-[#64ffda]/30 pl-8 ml-4 space-y-16">
              {careerTimeline.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-11 top-1 w-6 h-6 bg-[#0a192f] border-2 border-[#64ffda] rounded-full"></div>

                  <div className="bg-[#112240] rounded-lg p-6 hover:bg-[#112240]/70 transition-colors">
                    <div className="font-mono text-[#64ffda] text-sm mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">
                      {item.title}
                      <span className="text-[#64ffda]"> @ {item.company}</span>
                    </h3>
                    <ul className="space-y-4 mt-4">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="flex">
                          <span className="text-[#64ffda] mr-2">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 sm:py-32 bg-[#112240]">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="font-mono text-[#64ffda] text-sm mb-2 text-center">
              What People Say
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-12 text-center">
              Testimonials
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#0a192f] p-6 rounded-lg relative"
                >
                  <svg
                    className="text-[#64ffda] opacity-20 w-16 h-16 absolute -top-6 -left-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>

                  <p className="text-gray-400 mb-6 relative z-10">
                    {testimonial.text}
                  </p>
                  <div>
                    <p className="text-[#64ffda] font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education section */}
        <section id="education" className="py-20 sm:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-[#64ffda] text-sm mb-2">05.</p>
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

        {/* Skills Visualization Dashboard */}
        <section className="py-20 sm:py-32 bg-[#112240]">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="font-mono text-[#64ffda] text-sm mb-2 text-center">
              Skills & Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-200 mb-12 text-center">
              Technical Proficiency
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {/* Backend */}
              <div className="bg-[#0a192f] p-4 rounded-lg text-center">
                <div className="relative mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-[#64ffda]/30 rounded-full"></div>
                  <div
                    className="absolute inset-0 border-4 border-[#64ffda] rounded-full"
                    style={{ clipPath: "polygon(0 0, 90% 0, 90% 90%, 0 90%)" }}
                  ></div>
                  <Database className="w-10 h-10 text-[#64ffda]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200">Backend</h3>
                <p className="text-sm text-gray-400 mt-2">
                  PHP, Python, MySQL, Redis
                </p>
              </div>

              {/* Frontend */}
              <div className="bg-[#0a192f] p-4 rounded-lg text-center">
                <div className="relative mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-[#64ffda]/30 rounded-full"></div>
                  <div
                    className="absolute inset-0 border-4 border-[#64ffda] rounded-full"
                    style={{ clipPath: "polygon(0 0, 75% 0, 75% 75%, 0 75%)" }}
                  ></div>
                  <Code className="w-10 h-10 text-[#64ffda]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200">
                  Frontend
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  React, Tailwind, JavaScript
                </p>
              </div>

              {/* Infrastructure */}
              <div className="bg-[#0a192f] p-4 rounded-lg text-center">
                <div className="relative mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-[#64ffda]/30 rounded-full"></div>
                  <div
                    className="absolute inset-0 border-4 border-[#64ffda] rounded-full"
                    style={{ clipPath: "polygon(0 0, 85% 0, 85% 85%, 0 85%)" }}
                  ></div>
                  <Server className="w-10 h-10 text-[#64ffda]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200">DevOps</h3>
                <p className="text-sm text-gray-400 mt-2">
                  AWS, Docker, CI/CD, Linux
                </p>
              </div>

              {/* Fintech */}
              <div className="bg-[#0a192f] p-4 rounded-lg text-center">
                <div className="relative mb-4 mx-auto w-24 h-24 flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-[#64ffda]/30 rounded-full"></div>
                  <div
                    className="absolute inset-0 border-4 border-[#64ffda] rounded-full"
                    style={{ clipPath: "polygon(0 0, 95% 0, 95% 95%, 0 95%)" }}
                  ></div>
                  <Cpu className="w-10 h-10 text-[#64ffda]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-200">Fintech</h3>
                <p className="text-sm text-gray-400 mt-2">
                  Payment Processing, Ledgering
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20 sm:py-32">
          <div className="max-w-2xl mx-auto text-center px-4">
            <p className="font-mono text-[#64ffda] text-sm mb-2">06.</p>
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
