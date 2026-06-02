import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const navlinks = [
  { label: "About", id: "hero" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Awards", id: "awards" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full py-4 z-50">
      {/* Desktop */}
      <div className="hidden md:flex justify-center">
        <ul className="flex space-x-6 text-white font-medium bg-gray-700/10 backdrop-blur-md rounded-full">
          {navlinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:bg-white/10 hover:cursor-pointer px-4 py-1 rounded-full transition"
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile toggle */}
      <div className="md:hidden flex justify-end px-6">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-xl bg-gray-700/30 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center"
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 bg-gray-900/90 backdrop-blur-md rounded-2xl border border-white/10 py-2">
          <ul className="flex flex-col text-white font-medium">
            {navlinks.map((link) => (
              <li
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="hover:bg-white/10 hover:cursor-pointer px-6 py-3 transition"
              >
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
