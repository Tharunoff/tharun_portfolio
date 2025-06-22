import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Added for navigation

const projects = [
  {
    title: "Online Banking System",
    tech: "Python, Tkinter, MySQL",
    description:
      "Developed a full-stack desktop banking app with user login, transactions, and account management using Python (Tkinter) and MySQL.",
    github: "https://github.com/Tharunoff/online-banking-system",
    demo: "#",
  },
  {
    title: "AI Code Review Tool",
    tech: "HTML, CSS, OpenRouter API, Mistral 7B",
    description:
      "Built a web interface using HTML/CSS that integrates Mistral 7B via OpenRouter to provide intelligent code review suggestions.",
    github: "https://github.com/Tharunoff/ai-code-review-tool",
    demo: "#",
  },
  {
    title: "AI Meeting Agent",
    tech: "React, Meetstream API, Google Meet API, Zoom API, OpenAI, Whisper",
    description:
      "Created a smart meeting assistant that transcribes meetings in real-time and generates notes, tasks, and test cases using AI.",
    github: "https://github.com/Tharunoff/ai-meeting-agent",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-8 md:px-32 py-24 bg-[#0a192f]/60 backdrop-blur-sm text-[#ccd6f6] flex flex-col items-center gap-12"
    >
      {/* Heading with fade-in */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
        className="text-5xl font-bold border-b-2 border-[#64ffda] pb-2 text-center"
      >
        Projects
      </motion.h2>

      {/* Cards container fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col items-center w-full gap-12"
      >
        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#112240]/70 backdrop-blur-md border border-[#64ffda]/30 rounded-xl p-6 shadow-lg hover:shadow-[#64ffda]/50 transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {project.title}
              </h3>
              <p className="text-sm text-[#64ffda] font-mono mb-2">
                {project.tech}
              </p>
              <p className="text-[#8892b0] text-sm mb-4">
                {project.description}
              </p>

              <div className="flex space-x-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-1.5 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda] hover:text-black transition duration-300 font-semibold text-sm"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-1.5 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda] hover:text-black transition duration-300 font-semibold text-sm"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Archive Button — use Link not <a> */}
        <Link
          to="/archive"
          className="mt-10 px-6 py-2 border border-[#64ffda] text-[#64ffda] font-semibold rounded hover:bg-[#64ffda] hover:text-black transition duration-300"
        >
          View Full Project Archive
        </Link>
      </motion.div>
    </section>
  );
};

export default Projects;
