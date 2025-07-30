import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center justify-center text-center overflow-hidden relative"
      style={{ 
        background: 'radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)',
        perspective: '1000px'
      }}
    >
      {/* Animated Stars Background */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="z-10 px-4"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold text-white mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Hi, I'm <span className="gradient-text">Abdul Rauf Azhar</span>
        </motion.h1>
        <motion.div 
          className="text-xl md:text-3xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Typewriter
            options={{
              strings: [
                'MERN Stack Developer',
                'Content Writer',
                'Web Developer',
                'Data Science Student'
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.div>
        <motion.button
          onClick={scrollToAbout}
          className="btn-primary text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          Explore My Work
          <FiArrowDown className="inline ml-2" />
        </motion.button>
      </motion.div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 animate-bounce cursor-pointer"
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <FiArrowDown size={32} className="text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;
