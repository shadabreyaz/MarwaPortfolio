import React from 'react'
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import useScrollDirection from '../hook/useScrollDirection';

export default function About() {
  // Parent container animation
  const container = (scrollDir) => ({
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        staggerDirection: scrollDir === "down" ? 1 : -1, // reverse if scrolling up
      },
    },
  });

  // Every line animation
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Word-by-word animation for headings
  const wordItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Helper to split text into words for word animation
  const splitWords = (text) =>
    text.split(" ").map((word, idx) => (
      <motion.span key={idx} variants={wordItem} className="inline-block mr-2">
        {word}
      </motion.span>
  ));

  const scrollDir = useScrollDirection(); // 'up' or 'down'
  return (
    <section id='about' className="bg-[#F4FAFF]">
      <div className="custom-container py-12 sm:py-20 flex flex-col lg:flex-row items-center gap-12">
       <motion.div className='w-full'
          variants={container(scrollDir)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}>
  
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl leading-tight text-[rgb(var(--brand-teal))]"
              variants={{ show: { transition: { staggerChildren: 0.25, staggerDirection: scrollDir === "down" ? 1 : -1 } } }}
              initial="hidden"
              whileInView="show"
            >
              {splitWords("About Me")}
            </motion.h2>

            {/* Word-by-word subheading */}
            <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold my-2"
              variants={{ show: { transition: { staggerChildren: 0.25, staggerDirection: scrollDir === "down" ? 1 : -1 } } }}
              initial="hidden"
              whileInView="show"
            >
              {splitWords("Vision. Leadership. Impact.")}
            </motion.h3>

            <motion.h4 variants={item} 
              className="text-lg sm:text-2xl md:text-3xl font-medium leading-tight whitespace-break-spaces mb-4">
              Strategic Consultant & Economic Advisor
            </motion.h4>

            <motion.p 
             variants={item} className="text-[rgb(var(--brand-black))] text-base sm:text-lg mb-4">
              I’m Marwa Al Mansoori, an Emirati leader driving economic growth through strategic collaboration and policy-aligned innovation. While many focus on short-term outcomes, I work at the intersection of government vision and private sector execution helping businesses, institutions, and entrepreneurs scale with purpose and resilience.
            </motion.p>
            <motion.p 
             variants={item} className="text-[rgb(var(--brand-black))] text-base sm:text-lg mb-6">
             I am a graduate of the University of Edinburgh and one of the youngest Board Members of the Abu Dhabi Chamber of Commerce & Industry and the Abu Dhabi Businesswomen Council. Recognized by Forbes Middle East (30 Under 30 Game Changer), I lead "Prosper Partners Consultancy" and founded <span className='font-semibold'>MALENA</span>, combining strategy, entrepreneurship, and impact to shape future-ready economies.
            </motion.p>
        
            <motion.div variants={item}>
              <button
                className="group relative cursor-pointer flex items-center px-4 pr-14 py-2.5 bg-white text-[rgb(var(--brand-black))] border border-[rgba(19,21,23,0.35)] font-semibold rounded-full shadow-inner shadow-[rgb(var(--brand-white))/50] overflow-hidden transition-all duration-300 ease-in-out active:scale-95">
                  Learn More
                <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-9 h-9 bg-[rgb(var(--brand-teal))] rounded-full shadow-md transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)]">
                <HiArrowNarrowRight className="text-[rgb(var(--brand-white))] w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                </div>
              </button>
            </motion.div>
        </motion.div>

        <motion.div
            className="w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <img
                src="/about.jpg"
                alt="About-img"
                className="w-full h-75 sm:h-87 md:h-120 lg:h-160 rounded-4xl object-cover"
            />
        </motion.div>
      </div>
    </section>
  )
}
