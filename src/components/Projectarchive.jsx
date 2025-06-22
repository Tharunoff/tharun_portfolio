// src/components/Projectarchive.jsx
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const archiveProjects = [
  {
    year: "2024",
    title: "Online Banking System",
    tech: ["Python", "Tkinter", "MySQL"],
    github: "https://github.com/Tharunoff/online-banking-system",
    demo: "#",
  },
  {
    year: "2025",
    title: "AI Code Review Tool",
    tech: ["HTML", "CSS", "OpenRouter API", "Mistral 7B"],
    github: "https://github.com/Tharunoff/ai-code-review-tool",
    demo: "#",
  },
  {
    year: "2025",
    title: "AI Meeting Agent",
    tech: [
      "React",
      "Meetstream API",
      "Google Meet API",
      "Zoom API",
      "OpenAI",
      "Whisper",
    ],
    github: "https://github.com/Tharunoff/ai-meeting-agent",
    demo: "#",
  },
];

const Projectarchive = () => {
  return (
    <div className="min-h-screen px-6 md:px-32 py-24 bg-[#0a192f] text-[#ccd6f6]">
      {/* Back to Main Button */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#64ffda] hover:text-black border border-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda] hover:text-black transition"
        >
          <FaArrowLeft /> Back to Main
        </Link>
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-bold text-center border-b-2 border-[#64ffda] pb-4 mb-12">
        Project Archive
      </h1>

      {/* Table Headers (Desktop only) */}
      <div className="hidden md:grid grid-cols-12 gap-4 text-sm text-[#64ffda] px-4 mb-4">
        <div className="col-span-2 font-mono">Year</div>
        <div className="col-span-3 font-mono">Project</div>
        <div className="col-span-5 font-mono">Built With</div>
        <div className="col-span-2 font-mono">Links</div>
      </div>

      {/* Project Cards Styled as Rows */}
      <div className="flex flex-col gap-4">
        {archiveProjects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-[#112240]/70 backdrop-blur-md p-6 border border-[#64ffda]/30 rounded-xl shadow hover:shadow-[#64ffda]/40 transition-shadow duration-300"
          >
            <div className="md:col-span-2 text-[#8892b0] font-mono text-sm">
              {project.year}
            </div>
            <div className="md:col-span-3 font-semibold text-white text-lg">
              {project.title}
            </div>
            <div className="md:col-span-5 flex flex-wrap gap-2">
              {project.tech.map((techItem, idx) => (
                <span
                  key={idx}
                  className="bg-[#0a192f] border border-[#64ffda] text-[#64ffda] text-xs px-3 py-1 rounded-full font-mono hover:bg-[#64ffda] hover:text-black transition"
                >
                  {techItem}
                </span>
              ))}
            </div>
            <div className="md:col-span-2 flex gap-4 items-center mt-2 md:mt-0">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] hover:text-white transition"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] hover:text-white transition"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projectarchive;
