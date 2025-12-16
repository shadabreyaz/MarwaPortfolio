import React, { useState } from 'react'
import Hero from '../Components/Hero';
import About from '../Components/About';
import Journey from '../Components/Journey';
import Services from '../Components/Services';
import CTA from '../Components/CTA';
import Modal from '../Components/Modal';
import ScrollTop from '../Components/ScrollToTop';
import Recognition from '../Components/Recognition';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);   // for popup
    return (
      <>
       <Hero setIsOpen={setIsOpen} />
       <About />
       <Journey />
       <Recognition />
       <Services />
       <CTA setIsOpen={setIsOpen}/>
       <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
       <ScrollTop />
      </>
    )
}