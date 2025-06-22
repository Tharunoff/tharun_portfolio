import { motion } from "framer-motion";
import { FaCode, FaBrain, FaUserGraduate, FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-8 md:px-32 py-24 bg-[#0a192f]/60 backdrop-blur-sm text-[#ccd6f6] flex flex-col items-center justify-start gap-16"
    >
      <motion.h2
        className="text-5xl font-bold text-center border-b-2 border-[#64ffda] pb-2"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-[#8892b0] max-w-5xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        I'm Tharun, a curious and driven Computer Science student at SRM University.  
        My journey in tech began with hands-on experiments, small projects, and a growing passion for building and solving real-world problems.
        I thrive when I'm learning something new, collaborating with like-minded peers, and turning ideas into tangible creations.
      </motion.p>

      {/* Feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {[
          {
            icon: <FaCode size={36} className="text-[#64ffda]" />,
            title: "Developer",
            description:
              "Passionate about creating clean, efficient code and building user-friendly applications.",
          },
          {
            icon: <FaBrain size={36} className="text-[#64ffda]" />,
            title: "Problem Solver",
            description:
              "Can solve any appitude or real based problem given.",
          },
          {
            icon: <FaUserGraduate size={36} className="text-[#64ffda]" />,
            title: "Student",
            description:
              "B.Tech in Computer Science at SRM Institute of Science and Technology (2024–2028).",
          },
          {
            icon: <FaAward size={36} className="text-[#64ffda]" />,
            title: "Achievement",
            description:
              "Multiple certifications from GUVI, Cousera and participated in various Hackathon and events.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#112240]/60 border border-[#233554] rounded-2xl p-8 min-h-[260px] shadow-lg backdrop-blur-md text-center flex flex-col items-center gap-5 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            >
            {item.icon}
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="text-[#8892b0] text-base">{item.description}</p>
            </motion.div>

        ))}
      </div>
    </section>
  );
};

export default About;
