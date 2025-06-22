// src/components/Certificates.jsx
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const certificates = [
  {
    date: "April 2024",
    title: "Python From GUVI",
    link: "https://www.linkedin.com/posts/tharun-s-a49805318_python-guvi-smallstepsbigimpact-activity-7341915477549412352-VYDZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFCQx5kB8Xl8Dr1ODQJ0pcThu9mGAQUC-uQ",
  },
  {
    date: "June 2025",
    title: "Data Structure Alogorithm for C++/C from Udemy ",
    link: "https://example.com/certificate/ml",
  },
  {
    date: "June 2025",
    title: "Generative Ai From GeeksforGeeks",
    link: "https://example.com/certificate/frontend",
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen px-6 md:px-32 py-24 bg-[#0a192f] text-[#ccd6f6]">
      {/* Back to Home Button (styled like Projectarchive) */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-[#64ffda] border border-[#64ffda] px-4 py-1.5 rounded hover:bg-[#64ffda] hover:text-black transition duration-300 mb-8"
      >
        <FaArrowLeft />
        Back to Home
      </Link>

      {/* Heading */}
      <h1 className="text-5xl font-bold text-center border-b-2 border-[#64ffda] pb-4 mb-12">
        Certificates
      </h1>

      {/* Certificate Cards (table-like structure) */}
      <div className="space-y-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#112240]/70 backdrop-blur-md p-6 border border-[#64ffda]/30 rounded-xl shadow-md hover:shadow-[#64ffda]/40 transition-shadow duration-300"
          >
            {/* Date and Title */}
            <div className="mb-4 md:mb-0">
              <p className="text-[#64ffda] font-mono text-sm">{cert.date}</p>
              <h2 className="text-xl font-semibold text-white">{cert.title}</h2>
            </div>

            {/* View Certificate Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda] hover:text-black transition duration-300 mt-2 md:mt-0"
            >
              <FaExternalLinkAlt /> View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
