import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg shadow-md z-50">
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-indigo-600">
          Reditya.
        </h1>

        <div className="flex gap-8 font-medium">

          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">
            Home
          </Link>

          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">
            About
          </Link>

          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">
            Projects
          </Link>

          <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">
            Experience
          </Link>

          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-600">
            Contact
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;