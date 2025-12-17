import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Footer() {
      // Word animation for footer main heading
  const wordItem = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const splitWords = (text) =>
    text.split(" ").map((word, idx) => (
      <motion.span key={idx} variants={wordItem} className="inline-block mr-2">
        {word}
      </motion.span>
    ));

  // Line-by-line animation for footer items
  const lineItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer className="bg-[#21517D] pt-12 sm:pt-18">
        <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl leading-tight font-semibold
            text-[rgb(var(--brand-white))] text-center mb-12"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
            show: { transition: { staggerChildren: 0.3 } },
            }}
        >
            {splitWords("Marwa Al Mansoori")}
        </motion.h2>

        <div className="custom-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 sm:gap-12">
            {/* Newsletter */}
            <motion.div
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
            >
              <motion.h3 className="text-xl sm:text-2xl font-semibold text-[rgb(var(--brand-white))]" variants={lineItem}>
                Business Updates
              </motion.h3>  
              <div className="h-1 w-16 bg-white mb-4 bg-linear-to-r from-[rgb(var(--brand-teal))] to-white rounded-full"></div>
              <motion.p className="text-gray-100 mb-6 text-sm sm:text-base" variants={lineItem}>
                 Subscribe to receive insights, updates, and thought leadership on economic development, public-private partnerships, and strategic business growth.
              </motion.p>
                
              <motion.div className="flex flex-col sm:flex-row gap-3" variants={lineItem}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-auto flex-1 px-5 py-2 sm:py-2.5 rounded-full border border-gray-100 bg-gray-200 text-[rgb(var(--brand-teal))] placeholder-gray-600 focus:outline-none focus:border-[rgb(var(--brand-teal))] transition"
                />

                <button
                    className="px-6 py-2 sm:py-2.5 bg-linear-to-r from-[#0F203C] to-[#14598F] text-white font-semibold rounded-full hover:from-[#14598F] hover:to-[#0F203C]
                    transition-all duration-300 cursor-pointer"
                >
                    Subscribe
                </button>
              </motion.div>
            </motion.div>

             {/* Quick Links */}
             <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
                <motion.h3 className="text-xl sm:text-2xl font-semibold text-[rgb(var(--brand-white))]" variants={lineItem}>
                  Quick Links
                </motion.h3>
                <div className="h-1 w-16 bg-white mb-4 bg-linear-to-r from-[rgb(var(--brand-teal))] to-white rounded-full"></div>
                
                <motion.ul className="space-y-2 text-gray-100 font-medium flex md:flex-col flex-wrap">
                    {["About", "Expertise", "Leadership & Recognition", "Contact"].map((link, i) => (
                    <motion.li key={i} variants={lineItem}>
                        <a
                        href={`#${link.toLowerCase()}`}
                        className="inline-block px-3 py-1 rounded-full transition-all duration-500 ease-out hover:text-[rgb(var(--brand-teal))] hover:bg-white hover:scale-105"
                        >
                        {link}
                        </a>
                    </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

            <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
                <motion.h3 className="text-xl sm:text-2xl font-semibold text-[rgb(var(--brand-white))]" variants={lineItem}>
                    Areas of Expertise
                </motion.h3>
                <div className="h-1 w-16 bg-white mb-4 bg-linear-to-r from-[rgb(var(--brand-teal))] to-white rounded-full"></div>
                 <motion.ul className="space-y-2 text-gray-100 font-medium">
                    {["Strategic Business Development", "Public-Private Partnerships", "Digital Transformation", "Women Entrepreneurship"].map((item, i) => (
                    <motion.li
                        key={i}
                        variants={lineItem}
                        className="transition-all duration-500 ease-out hover:text-[rgb(var(--brand-teal))] hover:bg-white hover:scale-105 rounded-full px-3 py-1 inline-block cursor-pointer"
                    >
                        {item}
                    </motion.li>
                    ))}
                </motion.ul>
            </motion.div>

            <motion.div variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
                <motion.h3 className="text-xl sm:text-2xl font-semibold text-[rgb(var(--brand-white))]" variants={lineItem}>
                    Connect
                </motion.h3>
                <div className="h-1 w-16 bg-white mb-4 bg-linear-to-r from-[rgb(var(--brand-teal))] to-white rounded-full"></div>

                <motion.div className="font-medium mb-5 flex md:flex-col flex-wrap gap-3" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>
                    <motion.p className="text-gray-100 flex items-center gap-2 m-0" variants={lineItem}>
                    <FaLocationDot className="h-5 w-5" />
                    <span>Abu Dhabi & Dubai, United Arab Emirates </span>
                    </motion.p>
                    <motion.p className="text-gray-100 flex items-center gap-2 m-0" variants={lineItem}>
                    <FaPhoneAlt className="h-5 w-5" />
                    <span>+971 50 123 4712</span>
                    </motion.p>
                    <motion.p className="text-gray-100 flex items-center gap-2 m-0" variants={lineItem}>
                    <IoMail className="h-5 w-5" />
                    <span>contact@prosperpartners.ae</span>
                    </motion.p>
                </motion.div>

                <motion.div className="flex items-center gap-4" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}>
                    {[{ icon: <FaInstagram />, href: "#"}, { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/marwa-al-mansoori-5789177b/"}, { icon: <FaTwitter />,
                     href: "#"}, { icon: <FaFacebook />, href: "#"},].map((Icon, i) => (
                    <motion.a
                        key={i}
                        href={Icon.href}
                        className="text-white hover:scale-125 transition-all duration-300"
                        variants={lineItem}
                        target="_blank"
                    >
                       {React.cloneElement(Icon.icon, { className: "h-6 w-6" })}
                    </motion.a>
                    ))}
                </motion.div>
            </motion.div>

        </div>

        <div className="custom-container border-t border-gray-400 mt-6 sm:mt-10 py-6 text-center text-gray-200 text-sm">
        © {new Date().getFullYear()} Marwa Al Mansoori. All Rights Reserved. | Developed by Qutbee
        </div>

    </footer>
  );
}