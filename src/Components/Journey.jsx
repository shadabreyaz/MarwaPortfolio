import React from 'react'
import { motion } from "framer-motion";
import useScrollDirection from '../hook/useScrollDirection';

// Timeline dot animation
const dot = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: 0.5, ease: "backOut" } }
};

// Word animation for headings
const wordItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
export default function Journey() {
  const scrollDir = useScrollDirection(); // 'up' or 'down'

    const itemContainer = (scrollDir) => ({
      hidden: { opacity: 1 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.4,
          staggerDirection: scrollDir === "down" ? 1 : -1, // reverse if scrolling up
        },
      },
    });

    const textItem = {
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

      // Helper to split heading into words
  const splitWords = (text) =>
  text.split(" ").map((word, idx) => (
    <motion.span
      key={idx}
      variants={wordItem}
      className="inline-block mr-2"
    >
      {word}
    </motion.span>
  ));

  return (
    <section id='journey' className="py-12 sm:py-20 bg-[rgb(var(--brand-bg-blue))]">
      <div className="custom-container">

         {/* Section Heading */}
         <motion.div
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.2, staggerDirection: scrollDir === "down" ? 1 : -1 } } }}
        >
          <motion.h2 className="text-xl sm:text-2xl md:text-3xl leading-tight text-[rgb(var(--brand-teal))]">
            {splitWords("Professional Journey")}
          </motion.h2>

          <motion.h3 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold mt-2">
            {splitWords("A Journey of Leadership, Strategy & Impact")}
          </motion.h3>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-gray-400 pl-6 sm:pl-8 space-y-8 sm:space-y-12">

          {/* Item 1 */}
          <motion.div 
            variants={itemContainer(scrollDir)}    // container for staggered children
            initial="hidden"                   // start state
            whileInView="show"                 // animate when in viewport
            viewport={{ once: false, amount: 0.5 }} // triggers animation when 30% visible
            className="relative group p-4 sm:p-6 rounded-3xl border bg-white/80 border-[rgb(var(--brand-teal))] shadow-lg hover:shadow-xl transition-all duration-300">
            <motion.div variants={dot} 
              className="timeline-dot absolute -left-8.75 sm:-left-11 top-6 size-5 sm:size-6 bg-[rgb(var(--brand-teal))]
               rounded-full border-2 border-black/20 transition-transform duration-500 ease-in-out 
               group-hover:scale-150">
            </motion.div>

            <motion.h4 className="text-xl sm:text-2xl font-medium" variants={textItem}>
              Board Member (Sheikh Khalifa Excellence Award)
            </motion.h4>
            <motion.p className="text-sm text-gray-600 mb-2" variants={textItem}>2024 — Present</motion.p>
            <motion.p className="text-base sm:text-lg text-gray-700" variants={textItem}>
              Provides strategic leadership as a Board Member, contributing to excellence, innovation, and institutional impact at the Sheikh Khalifa Excellence Award.
            </motion.p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            variants={itemContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative group p-4 sm:p-6 rounded-3xl border bg-white/80 border-[rgb(var(--brand-teal))] shadow-lg hover:shadow-xl transition-all duration-300">
            <motion.div variants={dot} 
              className="timeline-dot absolute -left-8.75 sm:-left-11 top-6 size-5 sm:size-6 bg-[rgb(var(--brand-teal))]
               rounded-full border-2 border-black/20 transition-transform duration-500 ease-in-out 
               group-hover:scale-150">
            </motion.div>
            <motion.h4 className="text-xl sm:text-2xl font-medium" variants={textItem}>
             Vice President of Government Affairs (Siemens)
            </motion.h4>
            <motion.p className="text-sm text-gray-600 mb-2" variants={textItem}>2022 — 2024</motion.p>
            <motion.p className="text-base sm:text-lg text-gray-700" variants={textItem}>
              Leads government relations and public policy engagement, strengthening strategic partnerships and aligning business objectives with national priorities.   
            </motion.p>
          </motion.div>

          {/* Item 3 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={itemContainer}
              className="relative group p-4 sm:p-6 rounded-3xl border bg-white/80 border-[rgb(var(--brand-teal))] shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div variants={dot} 
                className="timeline-dot absolute -left-8.75 sm:-left-11 top-6 size-5 sm:size-6 bg-[rgb(var(--brand-teal))]
                 rounded-full border-2 border-black/20 transition-transform duration-500 ease-in-out 
                 group-hover:scale-150">
              </motion.div>
              <motion.h4 className="text-xl sm:text-2xl font-medium" variants={textItem}>
               The University of Edinburgh (Bachelor of Arts)
              </motion.h4>
              <motion.p className="text-sm text-gray-600 mb-2" variants={textItem}>2009 — 2013</motion.p>
              <motion.p className="text-base sm:text-lg text-gray-700" variants={textItem}>
                 Built a broad academic foundation emphasizing critical thinking, communication, and global awareness. 
              </motion.p>
            </motion.div>

          {/* Item 4 */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              variants={itemContainer}
              className="relative group p-4 sm:p-6 rounded-3xl border bg-white/80 border-[rgb(var(--brand-teal))] shadow-lg hover:shadow-xl transition-all duration-300">
              <motion.div variants={dot} 
                className="timeline-dot absolute -left-8.75 sm:-left-11 top-6 size-5 sm:size-6 bg-[rgb(var(--brand-teal))]
                 rounded-full border-2 border-black/20 transition-transform duration-500 ease-in-out 
                 group-hover:scale-150">
              </motion.div>
              <motion.h4 className="text-xl sm:text-2xl font-medium" variants={textItem}>
                The American International School of Abu Dhabi
              </motion.h4>
              <motion.p className="text-sm text-gray-600 mb-2" variants={textItem}>1998 — 2009</motion.p>
              <motion.p className="text-base sm:text-lg text-gray-700" variants={textItem}>
               Completed a comprehensive international education, developing strong academic fundamentals, cultural awareness, and communication skills that support leadership and global engagement 
              </motion.p>
            </motion.div>

        </div>


      </div>
    </section>
  )
}
