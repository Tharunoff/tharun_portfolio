import { FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa';
import profilePic from "./profile.png";

const Hero = () => {
  return (
    <section
    id="home"
    className="relative min-h-screen px-6 sm:px-8 md:px-32 pt-20 pb-32 bg-[#0a192f]/60 backdrop-blur-sm text-[#ccd6f6] flex flex-col justify-between"
  >
      {/* Content Container */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-20 flex-1">
        
        {/* Left: Text */}
        <div className="flex flex-col gap-6 max-w-2xl text-center md:text-left items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Hi, I'm Tharun 👋
          </h1>

          <p className="text-base sm:text-lg text-[#8892b0] leading-relaxed px-2 sm:px-0">
            I’m a passionate Computer Science student at SRM University, driven by curiosity and the joy of learning.
            I love building things, exploring tech hands-on, and creating projects that bring real impact.
          </p>

          {/* Buttons & Icons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="px-6 py-2 border border-[#64ffda] text-[#64ffda] font-semibold rounded hover:bg-[#64ffda] hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>

            <a
              href="/Tharun_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-[#64ffda] text-[#64ffda] font-semibold rounded hover:bg-[#64ffda] hover:text-black transform hover:scale-105 transition-all duration-300"
            >
              View Resume
            </a>

            <div className="flex gap-4 mt-2 sm:mt-0">
              <a
                href="https://github.com/Tharunoff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] border border-[#64ffda] rounded-full p-3 hover:bg-[#64ffda] hover:text-black transform hover:scale-110 transition duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/tharun-s-a49805318/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#64ffda] border border-[#64ffda] rounded-full p-3 hover:bg-[#64ffda] hover:text-black transform hover:scale-110 transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Profile Picture */}
        <div className="w-40 sm:w-56 md:w-72 h-40 sm:h-56 md:h-72 rounded-full overflow-hidden border-4 border-[#64ffda] shadow-xl">
          <img
            src={profilePic}
            alt="Tharun"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Centered Down Arrow */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="hover:text-white transition">
          <FaArrowDown size={24} className="animate-bounce text-[#64ffda]" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
