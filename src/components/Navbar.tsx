function Navbar() {
  const navlinks = ["About", "Experience", "Skills", "Education"];

  return (
    <nav className="fixed top-0 left-0 w-full py-4 z-50">
      <div className="flex justify-center">
        {/* Nav Links */}
        <ul className="flex space-x-6 text-white font-medium bg-gray-700/10 backdrop-blur-md rounded-full">
          {navlinks.map((link, index) => (
            <li
              key={index}
              className="hover:bg-white/10 hover:cursor-pointer px-4 py-1 rounded-4xl transition"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
