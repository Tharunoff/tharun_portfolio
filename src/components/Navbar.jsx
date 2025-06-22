import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", route: "/certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#0a192f]/30 border-b border-[#233554]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-[#ccd6f6] text-lg font-medium">
        {/* Logo or Brand */}
        <div className="text-xl font-bold text-[#64ffda]">Tharun</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map(({ name, href, route }) =>
            route ? (
              <Link key={name} to={route} className="group inline-block">
                <div className="flex flex-col items-center">
                  <span className="group-hover:text-[#64ffda] group-hover:scale-105 transition-transform duration-200 ease-in-out">
                    {name}
                  </span>
                  <span className="block h-[1.5px] w-0 bg-[#64ffda] group-hover:w-full transition-all duration-300 ease-in-out mt-1" />
                </div>
              </Link>
            ) : (
              <a key={name} href={href} className="group inline-block">
                <div className="flex flex-col items-center">
                  <span className="group-hover:text-[#64ffda] group-hover:scale-105 transition-transform duration-200 ease-in-out">
                    {name}
                  </span>
                  <span className="block h-[1.5px] w-0 bg-[#64ffda] group-hover:w-full transition-all duration-300 ease-in-out mt-1" />
                </div>
              </a>
            )
          )}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-2xl text-[#64ffda]">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-[#0a192f]/90 backdrop-blur-md text-center">
          {menuItems.map(({ name, href, route }) =>
            route ? (
              <Link
                to={route}
                key={name}
                onClick={() => setIsOpen(false)}
                className="text-[#ccd6f6] hover:text-[#64ffda] transition"
              >
                {name}
              </Link>
            ) : (
              <a
                href={href}
                key={name}
                onClick={() => setIsOpen(false)}
                className="text-[#ccd6f6] hover:text-[#64ffda] transition"
              >
                {name}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
