import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-8 md:px-32 py-24 bg-[#0a192f]/60 backdrop-blur-sm text-[#ccd6f6] flex flex-col items-center gap-10"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-5xl font-bold border-b-2 border-[#64ffda] pb-2 text-center"
      >
        Contact Me
      </motion.h2>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-10 w-full">
        {/* Left Column: Contact Details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative flex-1 bg-[#112240]/70 border border-[#64ffda]/30 rounded-xl p-6 pb-28 md:pb-6 backdrop-blur-md shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <div className="flex items-center gap-4 mb-4">
            <FaPhone className="text-[#64ffda]" />
            <span className="text-[#8892b0]">+91 95006 65712</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <FaEnvelope className="text-[#64ffda]" />
            <span className="text-[#8892b0]">s.tharunsofficial@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-[#64ffda]" />
            <a
              href="https://www.linkedin.com/in/tharun-s-a49805318/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8892b0] hover:text-white transition"
            >
              linkedin.com/in/tharun-s-a49805318
            </a>
          </div>

          {/* Glowing Envelope Icon */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 md:bottom-20">
            <FaEnvelope
              size={32}
              className="text-[#64ffda] animate-pulse drop-shadow-[0_0_10px_#64ffda] md:size-14"
            />
          </div>
        </motion.div>

        {/* Right Column: Message Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 bg-[#112240]/70 border border-[#64ffda]/30 rounded-xl p-6 backdrop-blur-md shadow-md space-y-4"
        >
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-[#0a192f]/50 border border-[#64ffda]/20 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-[#0a192f]/50 border border-[#64ffda]/20 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda]"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 bg-[#0a192f]/50 border border-[#64ffda]/20 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#64ffda] resize-none"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-2 border border-[#64ffda] text-[#64ffda] font-semibold rounded hover:bg-[#64ffda] hover:text-black transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
