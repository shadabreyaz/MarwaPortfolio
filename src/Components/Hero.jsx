import React from 'react'
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaTrophy, FaClock } from "react-icons/fa"
import { FaTooth } from "react-icons/fa6";
import Counter from './Counter';
import useScrollDirection from '../hook/useScrollDirection';


const heroItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const statsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35, // Each card comes one by one
      delayChildren: 0.8,
    },
  },
};

const statsCard = {
  hidden: { opacity: 0, rotateY: 90, scale: 0.8 },
  visible: { 
    opacity: 1, 
    rotateY: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const statsIcon = {
  hidden: { scale: 0 },
  visible: { 
    scale: 1, 
    transition: { duration: 0.5, ease: "backOut" } 
  },
};


export default function Hero({setIsOpen}) {

  const scrollDir = useScrollDirection();

  const heroContainer = (scrollDir) => ({
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.35,
        staggerDirection: scrollDir === "down" ? 1 : -1,
      },
    },
  });

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

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={heroContainer(scrollDir)}
       className="w-full bg-[#f8fafc] relative pt-38 pb-1 flex flex-col items-center justify-end">
      <div className="absolute inset-0 z-0"
        style={{ backgroundImage: `
            linear-gradient(20deg, rgba(248,250,252,1) 0%,  rgba(219,234,254,0.7) 30%,  rgba(165,180,252,0.5) 60%, rgba(129,140,248,0.6) 100% ),
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(199,210,254,0.4) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(224,231,255,0.3) 0%, transparent 60%)`}}>
       </div>
       <div className="relative custom-container text-center flex flex-col items-center mb-3 sm:mb-6 lg:mb-30">
         <motion.span variants={heroItem} 
           className="font-semibold text-sm sm:text-base rounded-full px-4 py-1 mb-2 border border-[rgb(var(--brand-black))]">
            Hello!
         </motion.span>

         <motion.h1 variants={{ show: { transition: { staggerChildren: 0.4, staggerDirection: scrollDir === "down" ? 1 : -1 } } }}
           initial="hidden"
           whileInView="show"
           className="text-3xl sm:text-5xl md:text-6xl leading-tight">
              {splitWords("I'm Dr.")} <span className="text-[rgb(var(--brand-teal))]">{splitWords("Olga Vasylenko")} </span>
              <br />
              {splitWords("Microscopic Dentist")}
         </motion.h1>
       </div>

       <div className='relative custom-container flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start gap-8 sm:gap-16 lg:gap-4'>
         <div className='w-full sm:max-w-4/5 lg:w-[30%] text-center lg:text-left'>
           <motion.h2 variants={heroItem} className="text-xl sm:text-2xl font-semibold leading-tight mb-3 lg:mb-4">
             Specialist Endodontist & Microscopic Dentist
           </motion.h2>

           <motion.p variants={heroItem} className="text-[rgb(var(--brand-black))] text-base sm:text-lg">
           I believe your natural tooth is priceless. I specialize in Microscopic Endodontics, using 25x magnification and French Aesthetic techniques to treat complex cases with zero pain and precise results. With over 15 years of experience, I restore not just the root, but the beauty of your smile.
           </motion.p>
         </div>

         <motion.div
           variants={heroItem}
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false, amount: 0.3 }}  //amount means the percent of screen visible
           transition={{ duration: 0.3, ease: "easeOut" }} className='bg-[rgb(var(--brand-teal))] rounded-ss-full rounded-se-full h-68 w-full sm:w-2/3 lg:w-[36%] relative 
           flex items-end justify-center self-center lg:self-end-safe order-1 lg:order-[unset] mt-22 lg:mt-0'>

           <img src="/her5.webp" alt="Hero-img" className='absolute bottom-0 inset-x-0 h-[20rem] sm:h-[24rem] w-auto object-contain'/>

           <div className="relative flex items-center justify-center mb-6 gap-4 flex-wrap">
            <button onClick={() => setIsOpen(true)}
             className="group relative flex items-center border-2 border-white px-4 pr-14 py-2.5 bg-[rgb(var(--brand-white))] text-[rgb(var(--brand-black))] font-semibold rounded-full shadow-inner shadow-[rgb(var(--brand-white))/50] overflow-hidden transition-all duration-300 ease-in-out active:scale-95">
             Book Appointment
              <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-9 h-9 bg-[rgb(var(--brand-teal))] rounded-full shadow-md transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)]">
                <HiArrowNarrowRight className="text-[rgb(var(--brand-white))] w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </div>
            </button>

            <button className="text-center px-14 sm:px-10 py-2.5 border-2 border-[#1D796B] hover:bg-[#1D796B] hover:text-white bg-[rgb(var(--brand-white))] font-semibold rounded-full shadow-inner shadow-[rgb(var(--brand-white))/50] overflow-hidden transition-all duration-300 ease-in-out active:scale-95">
             View Services
            </button>
           </div> 
         </motion.div>

        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.6 }}
           variants={statsContainer}
          className="w-full lg:w-[30%] flex flex-col sm:flex-row lg:flex-col gap-8 md:gap-5 lg:gap-6 justify-between items-center sm:items-start ml-0 lg:ml-4">
          {/* Experience */}
          <motion.div variants={statsCard} className="flex flex-col lg:flex-row items-center gap-3">
            <motion.div variants={statsIcon}>
              <FaClock className="text-[rgb(var(--brand-teal))] w-7 h-7" />
            </motion.div>
            <div className='text-center lg:text-left'>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight"> <Counter to={15} duration={5} />+ Years</h3>
              <p className="text-[rgb(var(--brand-gray))] text-lg font-medium">
                Experience in Microscopic Dentistry
              </p>
            </div>
          </motion.div>

          {/* Successful Treatments */}
          <motion.div variants={statsCard} className="flex flex-col lg:flex-row items-center gap-3">
            <motion.div variants={statsIcon}>
              <FaTooth className="text-[rgb(var(--brand-teal))] w-7 h-7" />
            </motion.div>
            <div className='text-center lg:text-left'>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight"><Counter to={60000} duration={4} />+</h3>
              <p className="text-[rgb(var(--brand-gray))] text-lg font-medium">
                Successful Treatments
              </p>
            </div>
          </motion.div>

           {/* Award */}
           <motion.div variants={statsCard} className="flex flex-col lg:flex-row items-center gap-3">
            <motion.div variants={statsIcon}>
             <FaTrophy className="text-[rgb(var(--brand-teal))] w-7 h-7" />
            </motion.div>
            <div className='text-center lg:text-left'>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">Mastermind Awardee</h3>
              <p className="text-[rgb(var(--brand-gray))] text-lg font-medium">
                Recognized for Excellence in Dentistry
              </p>
            </div>
            </motion.div>

        </motion.div>

       </div>
    </motion.section>
  )
}
