import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss,
  SiPython,
  SiPandas,
  SiNumpy,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiTypescript
} from 'react-icons/si';

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [filter, setFilter] = useState('all');

  const skills = {
    frontend: [
      { name: 'React', icon: SiReact, color: '#61DAFB', level: '90%' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: '85%' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: '75%' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: '95%' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: '90%' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: '88%' },
    ],
    backend: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: '80%' },
      { name: 'Express.js', icon: SiExpress, color: '#000000', level: '85%' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: '82%' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: '75%' },
    ],
    data: [
      { name: 'Python', icon: SiPython, color: '#3776AB', level: '80%' },
      { name: 'Pandas', icon: SiPandas, color: '#150458', level: '70%' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243', level: '75%' },
    ],
    tools: [
      { name: 'Git', icon: SiGit, color: '#F05032', level: '85%' },
      { name: 'GitHub', icon: SiGithub, color: '#181717', level: '90%' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: '70%' },
    ]
  };

  const getAllSkills = () => {
    return Object.values(skills).flat();
  };

  const getFilteredSkills = () => {
    if (filter === 'all') return getAllSkills();
    return skills[filter] || [];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateY: -45 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      transition: { duration: 0.6, type: "spring" }
    },
  };

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold text-center mb-8 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.p 
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Here are the technologies I work with to build modern, scalable applications
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {['all', 'frontend', 'backend', 'data', 'tools'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {getFilteredSkills().map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-700 text-center group"
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                rotateY: 5,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon 
                className="text-5xl mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" 
                style={{ color: skill.color }}
              />
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              
              {/* Skill Level Bar */}
              <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 mb-2">
                <motion.div
                  className="h-2 rounded-full"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: skill.level } : { width: 0 }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
