const navlinks = [
  { label: "About", id: "hero" },
  { label: "Experience", id: "experience" },
  { label: "Education", id: "education" },
  { label: "Awards", id: "awards" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full py-4 z-50">
      <div className="flex justify-center">
        <ul className="flex space-x-6 text-white font-medium bg-gray-700/10 backdrop-blur-md rounded-full">
          {navlinks.map((link) => (
            <li
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="hover:bg-white/10 hover:cursor-pointer px-4 py-1 rounded-4xl transition"
            >
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
