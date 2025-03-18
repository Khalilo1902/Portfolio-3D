import { styles } from "../styles";
import { navLinks } from "../constans"; 
import logo from "../assets/logo1.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Brand */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Khalil Haouas Logo"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex items-center gap-1">
            Khalil
            <span className="hidden sm:block"> | Web Developer</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden sm:flex flex-row gap-10 list-none">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } text-[18px] font-medium cursor-pointer hover:text-white transition-colors duration-200`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="Menu Toggle"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Navigation */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins text-[16px] font-medium cursor-pointer ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white transition-colors duration-200`}
                  onClick={() => {
                    setToggle(false); // Schließt das Menü nach Klick
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;