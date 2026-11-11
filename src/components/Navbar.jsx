import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { navItems, profile } from "../data/profile";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkProps = {
    smooth: true,
    duration: 500,
    spy: true,
    offset: -72,
    activeClass: "!text-indigo-600 after:!w-full",
    className:
      "relative cursor-pointer font-medium text-slate-600 hover:text-indigo-600 transition-colors " +
      "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-indigo-600 after:transition-all hover:after:w-full",
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-lg transition-all duration-300 ${
        scrolled || open
          ? "bg-white/90 shadow-sm border-b border-slate-200/70"
          : "bg-white/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex justify-between items-center">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer text-2xl font-extrabold text-indigo-600"
        >
          {profile.name}.
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link key={item.id} to={item.id} {...linkProps}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Tombol hamburger */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-2xl text-slate-700"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden border-t border-slate-200/70 bg-white/95 px-5 pb-5 pt-2 flex flex-col">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              smooth
              duration={500}
              spy
              offset={-64}
              onClick={() => setOpen(false)}
              activeClass="!text-indigo-600 bg-indigo-50"
              className="cursor-pointer rounded-xl px-4 py-3 font-medium text-slate-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
