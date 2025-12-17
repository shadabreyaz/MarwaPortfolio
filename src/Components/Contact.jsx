import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import ScrollTop from "./ScrollToTop";

export default function Contact() {
  return (
    <>
      <div className="bg-white w-full relative pt-36 sm:pt-40 pb-20">
      <div className="absolute inset-0 z-0"
        style={{ backgroundImage: `
        radial-gradient(circle 800px at 0% 200px, #bfdbfe, transparent),
        radial-gradient(circle 900px at 100% 200px, #bfdbfe, transparent)`}}>
       </div>

        <div className="custom-container">
          {/* Contact Hero Section */}
          <section className="relative text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <h1 className="text-xl sm:text-2xl md:text-3xl leading-tight text-[rgb(var(--brand-teal))]
                relative inline-block pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-20 after:bg-linear-to-r after:from-[rgb(var(--brand-teal))] after:to-white
                after:rounded-full">
              Connect with Me
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold mt-2">
              Interested in collaboration, strategic consultancy, or booking  Marwa for a keynote speech?
            </h2>
          </section>

          {/* Contact Form Section */}
          <section className="relative py-12 sm:py-20 border-t border-teal-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold mb-3 sm:mb-4 lg:mb-6">
                  Reach Out<span className="text-[rgb(var(--brand-teal))]"> Today</span>
                </h2>

                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  Have questions or ideas? Fill out the form, and our team will respond promptly. You can also contact us directly via email.
                </p>

                <div className="text-sm sm:text-base">
                  <p className="font-semibold text-lg sm:text-xl text-[rgb(var(--brand-black))]">Location</p>
                  <p>Abu Dhabi & Dubai,</p>
                  <p>United Arab Emirates</p>

                  <p className="font-semibold text-lg sm:text-xl mt-4 text-[rgb(var(--brand-black))]">Email</p>
                  <p>contact@prosperpartners.ae</p>

                  <p className="font-semibold text-lg sm:text-xl mt-4 text-[rgb(var(--brand-black))]">Phone</p>
                  <p>+971509844664</p>
                </div>

                <div className="flex items-center gap-6 sm:gap-8 mt-8">
                  <a href="#" className="text-[rgb(var(--brand-teal))] hover:scale-125 transition-all duration-300" >
                    <FaInstagram className="h-6 sm:h-8 w-6 sm:w-8" />
                  </a>
                  <a href="https://www.linkedin.com/in/marwa-al-mansoori-5789177b/" target="_blank" className="text-[rgb(var(--brand-teal))] hover:scale-125 transition-all duration-300" >
                    <FaLinkedin className="h-6 sm:h-8 w-6 sm:w-8" />
                  </a>
                  <a href="#" className="text-[rgb(var(--brand-teal))] hover:scale-125 transition-all duration-300" >
                    <FaTwitter className="h-6 sm:h-8 w-6 sm:w-8" />
                  </a>
                  <a href="#" className="text-[rgb(var(--brand-teal))] hover:scale-125 transition-all duration-300" >
                    <FaFacebook className="h-6 sm:h-8 w-6 sm:w-8" />
                  </a>
                </div>
              </div>

              <form className="space-y-6 mt-4">
                <div>
                  <label className="block font-semibold text-base sm:text-lg text-[rgb(var(--brand-blue))] mb-1">
                    Name & Surname
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. James Brown"
                    className="w-full border-b-2 focus:outline-none py-1.5"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-base sm:text-lg text-[rgb(var(--brand-blue))] mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. mail@example.com"
                    className="w-full border-b-2 focus:outline-none py-1.5"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-base sm:text-lg text-[rgb(var(--brand-blue))] mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. +356 99 999 999"
                    className="w-full border-b-2 focus:outline-none py-1.5"
                  />

                  <label className="block text-base sm:text-lg font-semibold text-[rgb(var(--brand-blue))] mt-6">
                    Message Us
                  </label>
                  <textarea
                    rows="4"
                    placeholder="How can we help you?"
                    className="w-full mt-1 border-b-2 focus:outline-none p-1">
                  </textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-1.5 sm:py-3 bg-[rgb(var(--brand-teal))] text-white font-semibold rounded-xl cursor-pointer border  text-lg transition duration-300 hover:bg-[rgb(var(--brand-teal))]/75">
                  Submit
                </button>

              </form>

            </div>
          </section>

          {/*  Map section  */}
          <section className="relative w-full h-65 sm:h-75 md:h-95 lg:h-112 overflow-hidden  rounded-lg">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.078483886306!2d55.26772669167145!3d25.194128393402824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682f700cf983%3A0xb5cc58b076c0b904!2sDowntown%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1763547297092!5m2!1sen!2sin"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </section>

        </div>
      </div>
      <ScrollTop />
    </>
  );
}
