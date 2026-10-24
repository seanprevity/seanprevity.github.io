import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Adds a shadow once you scroll, and highlights the section you're currently in
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let current = "";
      navLinks.forEach((nav) => {
        const el = document.getElementById(nav.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = nav.title;
        }
      });
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stops the page behind the mobile menu from scrolling
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20
      transition-all duration-300 ${
        scrolled
          ? "bg-flashWhite/90 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.06)] py-0.5"
          : "bg-flashWhite py-2"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center relative group py-1"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="text-[28px] sm:text-[32px] font-bold font-mova text-battleGray tracking-wider transition-colors duration-300 group-hover:text-french">
            Portfolio
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-french transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop links */}
        <ul className="list-none hidden sm:flex flex-row gap-12">
          {navLinks.map((nav) => {
            const isActive = active === nav.title;
            return (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  className={`group relative inline-block py-1 text-[18px] font-medium font-mova
                  uppercase tracking-[3px] transition-colors duration-300 ${
                    isActive
                      ? "text-french"
                      : "text-eerieBlack hover:text-taupe"
                  }`}
                >
                  {nav.title}
                  <span
                    className={`absolute left-0 -bottom-[2px] h-[2px] bg-french transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="sm:hidden"
          aria-label="Open menu"
          onClick={() => setToggle(true)}
        >
          <img src={menu} alt="" className="w-[30px] h-[30px] object-contain" />
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden fixed inset-0 z-30 bg-flashWhite p-6 flex flex-col"
          >
            <div className="flex justify-end">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setToggle(false)}
              >
                <img
                  src={close}
                  alt=""
                  className="w-[26px] h-[26px] object-contain"
                />
              </button>
            </div>

            <ul className="list-none flex flex-col items-start mt-[8rem] gap-2">
              {navLinks.map((nav, i) => (
                <motion.li
                  key={nav.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.08 * i + 0.1,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                >
                  <a
                    href={`#${nav.id}`}
                    onClick={() => {
                      setToggle(false);
                      setActive(nav.title);
                    }}
                    className={`text-[64px] leading-[1.05] font-bold font-arenq uppercase tracking-[1px] ${
                      active === nav.title ? "text-french" : "text-eerieBlack"
                    }`}
                  >
                    {nav.title}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
