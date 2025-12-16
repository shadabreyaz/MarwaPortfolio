import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import useScrollDirection from "../hook/useScrollDirection";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "Microscopic Root Canal Treatment",
      description:
        "Precise, pain-free root canal treatments performed under 25x magnification to remove infection, relieve pain instantly, and protect your natural tooth.",
      tags: ["Pain-Free Therapy", "Single-Visit Root Canal Procedures", "Treatment of Complex Canals"],
      image: "/service1.jpg",
    },
    {
      id: "02",
      title: "Retreatment & Impossible Cases",
      description:
        "Advanced retreatment solutions for cases that failed previously or were labeled “impossible,” restoring teeth once considered unsalvageable.",
      tags: ["Correction of Failed Root Canals", "Perforation Repair", "Broken Instrument Removal"],
      image: "/service3.jpg",
    },
    {
      id: "03",
      title: "Aesthetic Endodontic Rehabilitation",
      description:
        "Restoring tooth strength and beauty after endodontic treatment using biomimetic techniques that preserve more natural structure.",
      tags: ["Post-Endodontic Restorations", "Biomimetic Dentistry", "Ceramic Overlays"],
      image: "/service4.jpg",
    },
    {
      id: "04",
      title: "Orthodontic Treatments",
      description:
        "Correcting alignment and bite issues using traditional braces and advanced clear aligner solutions.",
      tags: ["Braces", "Aligners", "Bite Correction"],
      image: "/service2.jpg",
    },
  ];

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
  
    // Word-by-word animation for headings
    const wordItem = {
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
  
    // Helper to split text into words for word animation
    const splitWords = (text) =>
      text.split(" ").map((word, idx) => (
        <motion.span key={idx} variants={wordItem} className="inline-block mr-2">
          {word}
        </motion.span>
    ));

  // Animation for each service box
    const serviceBox = {
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };
  
    const scrollDir = useScrollDirection(); // 'up' or 'down'
  
  return (
    <section id='services' className="py-12 sm:py-20">
      <div className="custom-container">
        <motion.div
          variants={container(scrollDir)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}> 
           {/* Section Heading */}
            <motion.h2   
              variants={{ show: { transition: { staggerChildren: 0.25, staggerDirection: scrollDir === "down" ? 1 : -1 } } }}
              initial="hidden"
              whileInView="show"
              className="text-xl sm:text-2xl md:text-3xl leading-tight text-[rgb(var(--brand-teal))] mb-2">
              {splitWords("Services")}
            </motion.h2>

            <div className="flex items-center justify-between flex-wrap space-y-6 sm:space-y-8 mb-6 sm:mb-12">
              <motion.h3 
                className="text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold max-w-3xl mt-2"
                variants={{ show: { transition: { staggerChildren: 0.25, staggerDirection: scrollDir === "down" ? 1 : -1 } } }}
                initial="hidden"
                whileInView="show"
              >
                {splitWords("Creating Beautiful Smiles, One Patient at a Time with Personalized, Expert Dental Care")}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8}}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}>
                <button
                  className="group relative cursor-pointer flex items-center px-4 pr-14 py-2.5 bg-[rgb(var(--brand-teal))] text-[rgb(var(--brand-white))] font-semibold rounded-full shadow-inner shadow-[rgb(var(--brand-teal))/50] overflow-hidden transition-all duration-300 ease-in-out active:scale-95">
                  Explore Services
                  <div className="absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-9 h-9 bg-[rgb(var(--brand-white))] rounded-full shadow-md transition-all duration-300 ease-in-out group-hover:w-[calc(100%-0.5rem)]">
                    <HiArrowNarrowRight className="text-[rgb(var(--brand-teal))] w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
                  </div>
                </button>
              </motion.div> 

            </div>
         </motion.div>

        {/* services */}
        <div className='space-y-8 sm:space-y-12'>
          {services.map((service,i)=>(
            <motion.div variants={serviceBox} 
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: i * 0.3 }} // subtle stagger
              key={i} className={`border-t border-gray-400 pt-6 sm:pt-8 flex flex-col md:flex-row md:items-center  ${i % 2 !== 0 ? "md:flex-row-reverse" : ""} justify-between space-y-6 sm:space-y-8`}>
              <div className='w-full md:w-1/4'>
                <p className='flex items-center justify-center w-10 h-10 text-lg bg-[rgb(var(--brand-teal))] text-white rounded-full shadow-md mb-2.5'>
                  {service.id}
                </p>
                <h4 className="text-xl sm:text-2xl font-semibold">
                  {service.title}
                </h4>
              </div>

              <div className='w-full md:w-2/5 flex flex-col gap-5'>
                  <p className="text-base sm:text-lg text-gray-700">
                   {service.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {service.tags.map((tag,i)=>(
                         <span key={i} className='bg-[rgb(var(--brand-teal))] text-[rgb(var(--brand-white))] px-3 py-1 rounded-full text-sm font-medium'>{tag}</span>
                    ))}
                  </div>
               </div>
              
               <motion.div
                  className="w-full md:w-1/4 flex justify-center"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}>
                <img src={service.image} alt="service-1" className='w-full h-48 sm:h-75 md:h-50 rounded-2xl object-cover'/>
              </motion.div>

            </motion.div>
          ))}
        </div>
       
      </div>
  </section>
  )
}
