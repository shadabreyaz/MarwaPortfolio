import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const headerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // delay between children
        delayChildren: 0.2, // delay before first child starts
      },
    },
};
  
const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
  
const navLinks = [
  // { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Expertise" },
  { href: "#journey", label: "My Journey" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function smoothScroll(e, id) {
    e.preventDefault();
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  }
  
  return (
    <motion.nav
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      className={`fixed left-1/2 -translate-x-1/2 z-50 py-2 transition-all duration-500 ease-in-out
        ${isScrolled
          ? "top-3 backdrop-blur-lg bg-[rgb(var(--brand-teal))]/30 shadow-md rounded-[40px] w-[92%] md:w-[94%]"
          : "bg-transparent w-full"
        }`}
    >
      <div className="custom-container flex items-center justify-between transition-all duration-500">
        {/* Logo */}
        <motion.a
            href="/"
            variants={itemVariants}
            className="font-bold" >
          <img
            src="/logo3.png"
            alt="logo"
            className={`${isScrolled? 'h-15 sm:h-18' : 'h-16 sm:h-22'} w-auto object-contain`}
          />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-10">
          {navLinks.map(({ href, label }) => (
         <motion.a
            key={href}
            href={href}
            onClick={(e) => smoothScroll(e, href)}
            variants={itemVariants}
            className="group relative font-medium text-lg text-[rgb(var(--brand-black))] transition-colors duration-300 hover:text-[rgb(var(--brand-teal))]">
          {label}
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[rgb(var(--brand-teal))] transition-all duration-300 group-hover:w-full"></span>
        </motion.a>
       
          ))}

          {/* CTA Button */}
          <motion.div
            variants={itemVariants} >
            <Link to={'/contact'}>
              <button
              className="group relative cursor-pointer flex items-center px-4 pr-14 py-2.5 bg-[rgb(var(--brand-white))] text-[rgb(var(--brand-black))] font-semibold rounded-full shadow-inner shadow-[rgb(var(--brand-white))/50] overflow-hidden transition-all duration-300 ease-in-out active:scale-95">
                Connect with Me 
              <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-9 h-9 bg-[rgb(var(--brand-teal))] rounded-full shadow-md transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)]">
                <HiArrowNarrowRight className="text-[rgb(var(--brand-white))] w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </div>
            </button>
            </Link>
          </motion.div>
          
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          variants={itemVariants}
          className="lg:hidden text-2xl text-[rgb(var(--brand-white))] hover:text-[rgb(var(--brand-teal))] p-2 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Mobile Menu */}
        {isMenuOpen && (
        <div className="lg:hidden bg-[rgb(var(--brand-white))] border-t border-[rgb(var(--brand-gray))] shadow-xl rounded-b-3xl">
            <div className="flex flex-col px-6 py-6 space-y-3">
            {navLinks.map(({ href, label }) => (
                <a
                key={href}
                href={href}
                onClick={(e) => {
                  smoothScroll(e, href);
                  setIsMenuOpen(false);
                }}
                className="relative block py-2 text-lg text-[rgb(var(--brand-black))] transition-colors duration-300 hover:text-[rgb(var(--brand-teal))]"
                >
                {label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[rgb(var(--brand-teal))] transition-all duration-300 hover:w-full"></span>
                </a>
            ))}

            {/* Mobile CTA */}
            <a
                href="/contact"
                className="mt-4 rounded-full bg-[rgb(var(--brand-teal))] px-6 py-2 text-center text-[rgb(var(--brand-white))] font-semibold hover:bg-[rgb(var(--brand-black))] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
            >
                Connect with Me 
            </a>
            </div>
        </div>
        )}

    </motion.nav>
  );
}
