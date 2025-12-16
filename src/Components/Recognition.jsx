import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaBuilding, FaUsers, FaGlobe } from "react-icons/fa";
import useScrollDirection from "../hook/useScrollDirection";


// Word animation for headings
const wordItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
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

export default function Recognition() {
const scrollDir = useScrollDirection(); // 'up' or 'down'

const items = [
  { icon: <FaAward />, text: "Economic Development" },
  { icon: <FaBuilding />, text: "Private Sector Advocacy" },
  { icon: <FaUsers />, text: "Women Entrepreneurship" },
  { icon: <FaGlobe />, text: "Public–Private Partnerships" },
  { icon: <FaGlobe />, text: "Global Trade & Investment" },
];

  return (
    <section className="py-12 sm:py-20 bg-gray-300">
      <div className="relative custom-container">

         {/* Section Heading */}
         <motion.div
          className="text-center max-w-3xl mx-auto mb-5 sm:mb-12"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.2, staggerDirection: scrollDir === "down" ? 1 : -1 } } }}
        >
          <motion.h2 className="text-xl sm:text-2xl md:text-3xl leading-tight text-[rgb(var(--brand-teal))]">
            {splitWords("Leadership & Recognition")}
          </motion.h2>

          <motion.h3 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold mt-2">
            {splitWords("Appointed. Trusted. Recognized.")}
          </motion.h3>
        </motion.div>
      
        {/* Marquee */}
        <div className="relative w-full overflow-hidden mb-6 sm:mb-12 py-4">
          <motion.div
            className="flex gap-8 sm:gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...items, ...items].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 px-6 sm:px-8 py-4 sm:py-5 rounded-full
                bg-white shadow-lg"
              >
                <span className="text-[rgb(var(--brand-accent))] text-xl">
                  {item.icon}
                </span>
                <span className="text-base sm:text-lg font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false, amount: 0.3 }}
            className="lg:col-span-2 p-10 rounded-4xl bg-white shadow-2xl relative"
          >
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold text-[rgb(var(--brand-accent))]">
              <FaAward /> Forbes Recognition
            </span>

            <h4 className="text-3xl sm:text-4xl font-semibold mt-4 mb-4 leading-tight">
              Forbes 30 Under 30 <br className="hidden sm:block" />
              Middle East
            </h4>

            <p className="text-base sm:text-lg text-gray-700 max-w-2xl">
              Recognized for advancing social and economic entrepreneurship,
              driving innovation across public-private partnerships,
              and contributing to regional digital transformation.
            </p>

            {/* Accent Block */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[rgb(var(--brand-teal))/15] rounded-bl-4xl" />
          </motion.div>

          {/* Supporting Items */}
          {[{
            icon: <FaBuilding />,
            title: "Youngest Board Member",
            subtitle: "Abu Dhabi Chambers of Commerce & Industry",
            text: "Appointed by His Highness Sheikh Mohammed bin Zayed Al Nahyan, contributing to policies that strengthen the Abu Dhabi economy and advocate for private sector growth.",
          }, {
            icon: <FaUsers />,
            title: "Board Member",
            text: "Abu Dhabi Businesswomen Council",
          }, {
            icon: <FaGlobe />,
            title: "International Speaker",
            text: "Digital transformation & sustainability frameworks",
          }, {
            icon: <FaGlobe />,
            title: "International Speaker",
            text: "Digital transformation & sustainability frameworks",
          }].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: false, amount: 0.3 }}
              className="p-8 rounded-3xl bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-[rgb(var(--brand-teal))] text-3xl mb-4">
                {item.icon}
              </div>
              <h5 className="text-xl font-semibold mb-1">{item.title}</h5>
              {item.subtitle && (
                <p className="text-sm uppercase tracking-wide text-[rgb(var(--brand-accent))] mb-2">
                  {item.subtitle}
                </p>
              )}
              <p className="text-gray-700 mb-4">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

