import React from 'react';
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import useScrollDirection from '../hook/useScrollDirection';

export default function CTA({setIsOpen}) {
    // Parent container animation
    const container = (scrollDir) => ({
      hidden: { opacity: 1 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.6,
          staggerDirection: scrollDir === "down" ? 1 : -1, // reverse if scrolling up
        },
      },
    });
  
    // Every line animation
    const item = {
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
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
    <section className="py-12 sm:py-20 relative overflow-hidden bg-gray-100">
      
      <div className="absolute inset-0 z-0"
        style={{ backgroundImage: `
            linear-gradient(200deg, rgba(248,250,252,1) 0%,  rgba(219,234,254,0.7) 30%,  rgba(165,180,252,0.5) 60%, rgba(129,140,248,0.6) 100% ),
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(199,210,254,0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(224,231,255,0.3) 0%, transparent 60%)`}}>
       </div>

      <motion.div className="custom-container text-center max-w-4xl mx-auto px-4 relative"
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
              {splitWords("Ready to Save Your Tooth?")}
         </motion.h2>

            {/* Word-by-word subheading */}
         <motion.h3 
              className="text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold mt-2 mb-6"
              variants={{ show: { transition: { staggerChildren: 0.25, staggerDirection: scrollDir === "down" ? 1 : -1 } } }}
              initial="hidden"
              whileInView="show"
            >
              {splitWords("Get Expert, Precise, and Pain Free Endodontic Care")}
          </motion.h3>    

        <motion.p variants={item} className="text-base sm:text-lg text-gray-700 mb-8">
         If you're experiencing dental pain, need a root canal, or want a second opinion before an extraction, I’m here to help. With advanced microscopic techniques and a focus on preserving your natural teeth, you can move forward with confidence and clarity.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.8}}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}>
          <button onClick={() => setIsOpen(true)}
            className="group relative mx-auto border border-white cursor-pointer flex items-center px-6 pr-14 py-3 bg-[rgb(var(--brand-white))] text-[rgb(var(--brand-black))] font-semibold rounded-full shadow-inner shadow-[rgb(var(--brand-white))/50] overflow-hidden transition-all duration-300 ease-in-out active:scale-95">
            Book an Appointment
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-9 h-9 bg-[rgb(var(--brand-teal))] rounded-full shadow-md transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)]">
              <HiArrowNarrowRight className="text-[rgb(var(--brand-white))] w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </div>
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
}
