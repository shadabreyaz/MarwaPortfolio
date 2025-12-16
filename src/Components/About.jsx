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
    <section id='about' className="custom-container py-12 sm:py-20 flex flex-col lg:flex-row items-center gap-12">
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
              {splitWords("Precision. Passion. Preservation.")}
            </motion.h3>

            <motion.h4 variants={item} 
              className="text-lg sm:text-2xl md:text-3xl font-medium leading-tight whitespace-break-spaces mb-4">
              Expert in Tooth Preservation & Microscopic Endodontics
            </motion.h4>

            <motion.p 
             variants={item} className="text-[rgb(var(--brand-black))] text-base sm:text-lg mb-4">
              I’m Dr. Olga Vasylenko, a Specialist Endodontist dedicated to saving teeth with precision and care. While many rush to extract, I focus on restoring. Using my <span className='underline'>“Microscopic Philosophy”</span> and a dental operating microscope, I can see what’s invisible to the naked eye, ensuring higher success rates for root canals and complex treatments.
            </motion.p>
            <motion.p 
             variants={item} className="text-[rgb(var(--brand-black))] text-base sm:text-lg mb-6">
             I hold a Master’s in Endodontics from Kharkiv National Medical University and a Diploma in Aesthetic Dentistry from the University of Nancy, France. I am a resident of the Royal College of Edinburgh, UK, and a member of <span className='underline'>"StyleItaliano"</span>. I practice in Dubai (GMC Clinics) and Abu Dhabi, combining precision with an artistic touch to ensure every restored tooth looks natural and beautiful."
            </motion.p>
        
            <motion.div variants={item}>
              <button
                className="group relative cursor-pointer flex items-center px-4 pr-14 py-2.5 bg-[rgba(19,21,23,0.1)] text-[rgb(var(--brand-black))] border border-[rgba(19,21,23,0.3)] font-semibold rounded-full shadow-inner shadow-[rgb(var(--brand-white))/50] overflow-hidden transition-all duration-300 ease-in-out active:scale-95">
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

    </section>
  )
}
