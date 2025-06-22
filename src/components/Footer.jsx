import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f]/60 backdrop-blur-sm text-[#ccd6f6] px-8 md:px-32 py-12">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left: Description */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">Tharun</h3>
          <p className="text-[#8892b0] mt-2 max-w-md">
            A passionate CSE undergrad driven by curiosity, innovation, and a deep interest in solving real problems through technology.
          </p>
        </div>

        {/* Right: Icons + Back to Top */}
        <div className="flex flex-col items-center gap-4">
          {/* Icons */}
          <div className="flex space-x-4">
            <a
              href="mailto:bhuvaneswar@example.com"
              className="text-[#64ffda] hover:text-white transition"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://github.com/Tharunoff"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64ffda] hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tharun-s-a49805318/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64ffda] hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Back to Top */}
          <a
            href="#top"
            className="mt-2 text-[#64ffda] hover:text-white text-sm underline underline-offset-4 transition"
          >
            Back to Top
          </a>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="border-t border-[#233554] mt-8 pt-6 text-center text-sm text-[#8892b0]">
        © 2025 Tharun. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
