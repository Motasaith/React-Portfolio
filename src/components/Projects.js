import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";
// Lazy loading temporarily disabled due to PostCSS config conflicts
// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: "E-commerce Store",
      description:
        "A full-featured MERN stack e-commerce platform with product management, user authentication, and a streamlined checkout process. Solved complex state management challenges with Redux Toolkit.",
      image: "/ECOMMERCE.png",
      tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      liveUrl: "https://mern-ecommerce-xi-dusky-60.vercel.app/",
      githubUrl: "https://github.com/Motasaith/mern-ecommerce",
      caseStudy: {
        process:
          "Designed and developed the entire application from scratch, focusing on a modular architecture. Implemented secure JWT authentication and integrated a third-party payment gateway.",
        goals:
          "Create a performant, scalable, and user-friendly online store. Achieve a high Lighthouse score for performance and accessibility.",
        solution:
          "Utilized server-side rendering for faster initial loads and implemented lazy loading for images and components. Optimized database queries for improved performance under load.",
      },
    },
    {
      title: "Blog Site",
      description:
        "A dynamic blog platform built with the MERN stack, featuring a rich text editor, user comments, and an admin dashboard for content management. Focused on a clean, readable UI and SEO optimization.",
      image: "/BLOG.png",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "SEO"],
      liveUrl: "https://abdul-blog-client.vercel.app/",
      githubUrl: "https://github.com/Motasaith/AbdulBlog",
      caseStudy: {
        process:
          "Started with a mobile-first design approach. Built a custom REST API for content delivery and integrated a markdown editor for easy content creation.",
        goals:
          "Achieve fast page loads and a high degree of content discoverability through SEO best practices. Provide a seamless reading and writing experience.",
        solution:
          "Implemented static site generation (SSG) for blog posts to improve performance and SEO. Used React hooks extensively for efficient state management.",
      },
    },
    {
      title: "Policy Management System",
      description:
        "A comprehensive MERN stack application for managing company policies. It includes version control for policies, user access levels, and an intuitive interface for policy creation and updates.",
      image: "/PMS.png",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "Auth"],
      liveUrl: "https://policy-management-app-egls.vercel.app/",
      githubUrl: "https://github.com/Motasaith/policy-management-app",
      caseStudy: {
        process:
          "Conducted user research to define key features. Designed a relational data model within MongoDB to handle policy versions and user roles effectively.",
        goals:
          "Provide a secure and auditable system for policy management. Ensure real-time updates and notifications for policy changes.",
        solution:
          "Integrated Socket.io for real-time notifications on policy updates. Implemented a role-based access control (RBAC) system to manage user permissions securely.",
      },
    },
    {
      title: "Smart Weather App",
      description:
        "A responsive frontend-only weather application with real-time weather data, beautiful UI, and interactive temperature graphs. Built using modern JavaScript tools and free APIs, this app delivers local forecasts with precision and style.",
      image: "/WAPP.png",
      tags: ["JavaScript", "HTML", "CSS", "Chart.js", "Open-Meteo API"],
      liveUrl: "https://motasaith.github.io/Weather-App/",
      githubUrl: "https://github.com/Motasaith/Weather-App",
      caseStudy: {
        process:
          "Planned a smooth user flow and clean design. Chose Open-Meteo API for free, reliable weather data and geocode.maps.co for geolocation. Used Chart.js to display dynamic temperature trends.",
        goals:
          "Deliver accurate weather forecasts in real-time. Provide a simple yet modern UI experience with intuitive charts and location-based data.",
        solution:
          "Fetched coordinates via geocode.maps.co and weather data from Open-Meteo. Implemented Chart.js for plotting 30-day temperature graphs. Designed an attractive UI using vanilla HTML, CSS, and JavaScript.",
      },
    },
    {
      title: "Smart To-Do List",
      description:
        "A feature-rich task manager that lets users add, update, delete, and complete tasks with real-time reminder alerts, sound notifications, and persistent data using localStorage. Built with only HTML, CSS, and JavaScript for maximum accessibility.",
      image: "/STODO.png",
      tags: ["JavaScript", "HTML", "CSS", "Notifications", "localStorage"],
      liveUrl: "https://motasaith.github.io/Smart-TO-DO-List/",
      githubUrl: "https://github.com/motasaith/Smart-TO-DO-List",
      caseStudy: {
        process:
          "Started with wireframes and designed an intuitive UI for task management. Added sound notifications and timed reminders to enhance productivity. Used localStorage to ensure data persistence across sessions.",
        goals:
          "Create a reliable and user-friendly task manager that feels interactive and smart, while requiring no backend or login.",
        solution:
          "Implemented reminder alerts with JavaScript’s `setTimeout`. Used `localStorage` for saving task data, and added audio + visual cues for task deadlines. Designed a sleek, responsive interface with custom CSS.",
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: "spring" },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 bg-gray-50 dark:bg-dark-800"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 gradient-text"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200 dark:border-dark-700"
              variants={cardVariants}
            >
              <div className="overflow-hidden">
                <img
                  alt={project.title}
                  src={project.image}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    Live Demo <FiExternalLink className="inline ml-2" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300"
                  >
                    <FiGithub size={28} />
                  </a>
                </div>
              </div>

              {/* Case Study Dropdown */}
              <details className="p-6 border-t border-gray-200 dark:border-dark-700 cursor-pointer">
                <summary className="font-semibold text-lg hover:text-blue-500 dark:hover:text-blue-400 transition">
                  Case Study
                </summary>
                <div className="mt-4 text-gray-600 dark:text-gray-400 space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                      Process:
                    </h4>
                    <p>{project.caseStudy.process}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                      Goals:
                    </h4>
                    <p>{project.caseStudy.goals}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-1">
                      Solution:
                    </h4>
                    <p>{project.caseStudy.solution}</p>
                  </div>
                </div>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
