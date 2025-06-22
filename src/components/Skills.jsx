import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const skillData = {
  Frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ],
  Backend: [
    { name: "Node.js", level: 70 },
    { name: "Express.js", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "Firebase", level: 60 },
  ],
  "AI / ML": [
    { name: "Python", level: 50 },
    { name: "TensorFlow", level: 20 },
    { name: "OpenCV", level: 20 },
    { name: "Pandas", level: 25 },
  ],
  "UI / UX": [
    { name: "Figma", level: 80 },
    { name: "Framer", level: 70 },
    { name: "Canva", level: 90 },
    { name: "Adobe XD", level: 60 },
  ],
  Languages: [
    { name: "C", level: 85 },
    { name: "C++", level: 80 },
    { name: "Java", level: 75 },
    { name: "Python", level: 90 },
  ],
};

const categories = Object.keys(skillData);

const Skills = () => {
  const [active, setActive] = useState("Frontend");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="min-h-screen px-8 md:px-32 py-24 bg-[#0a192f]/60 backdrop-blur-sm text-[#ccd6f6] flex flex-col items-center gap-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold border-b-2 border-[#64ffda] pb-2 text-center"
      >
        Skills
      </motion.h2>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="flex flex-wrap justify-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-md"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded font-medium transition-all duration-200 ${
              active === cat
                ? "text-black bg-[#64ffda]"
                : "text-[#64ffda] hover:bg-[#64ffda]/20"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Bars */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-4xl mt-8 flex flex-col gap-6"
        >
          {skillData[active].map((skill, index) => (
            <div key={index} className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-[#64ffda]">
                  {skill.name}
                </span>
                <span className="text-sm text-[#64ffda]">{skill.level}%</span>
              </div>
              <div className="w-full bg-[#112240] rounded-full h-2.5">
                <div
                  className="bg-[#64ffda] h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
