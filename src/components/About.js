import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiAward, FiBriefcase, FiZap } from "react-icons/fi";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-dark-800" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 gradient-text"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* My Image */}
          <motion.div
            className="relative w-80 h-80 mx-auto group"
            variants={cardVariants}
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <img
              src="/pic.png"
              alt="Abdul Rauf Azhar"
              className="relative w-full h-full object-cover rounded-full shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* My Story */}
          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I am a passionate{" "}
              <strong className="text-blue-500 dark:text-blue-400">
                MERN Stack Developer
              </strong>{" "}
              and a dedicated{" "}
              <strong className="text-blue-500 dark:text-blue-400">
                Data Science student
              </strong>{" "}
              at Khawja Fareed University. I thrive on building innovative web
              solutions and have a keen interest in the world of data.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Beyond coding, I have experience in{" "}
              <strong className="text-blue-500 dark:text-blue-400">
                Content Writing
              </strong>
              , which helps me create compelling narratives for my projects. I
              am driven by a passion for learning and constantly exploring new
              technologies to enhance my skills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <motion.div
                className="p-6 glass rounded-xl"
                variants={cardVariants}
              >
                <FiAward className="text-4xl text-blue-500 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Experience</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  1+ Years
                </p>
              </motion.div>
              <motion.div
                className="p-6 glass rounded-xl"
                variants={cardVariants}
              >
                <FiBriefcase className="text-4xl text-blue-500 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Projects</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  10+ Completed
                </p>
              </motion.div>
              <motion.div
                className="p-6 glass rounded-xl"
                variants={cardVariants}
              >
                <FiZap className="text-4xl text-blue-500 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="font-semibold text-lg">Focus</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Web & Data
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
