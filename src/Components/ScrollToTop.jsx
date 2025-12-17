import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-4 z-50 p-3 rounded-full
       bg-[#21517D] border border-white text-white shadow-lg
        transition transform duration-300 ease-in-out cursor-pointer
        ${
          isVisible
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-75 pointer-events-none"
        }
        hover:scale-110 hover:shadow-2xl`}
    >
      <IoIosArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollTop;
