// import React from "react";
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './index.css';

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>

      <div className='fixed top-0 -z-10 h-full w-full'>
        <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        {/* <div class="absolute top-0 z-[-2] h-screen w-screen transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div> */}
      </div>
      <div className='container mx-auto px-2'>
        <NavBar />
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact/>
      </div>
    </div>
  );
}

export default App;