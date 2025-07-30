import React from "react";
import { motion } from "framer-motion";
import { FiHeart, FiLinkedin, FiGithub, FiBook } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Abdul Rauf Azhar
            </h3>
            <p className="text-gray-400 mb-4">
              MERN Stack Developer passionate about creating innovative web
              solutions and exploring the world of data science.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/abdul-rauf-azhar-5750a3378/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FiLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/Motasaith"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FiGithub size={24} />
              </motion.a>
              <motion.a
                href="https://abdul-blog-client.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FiBook size={24} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <motion.a
                      href={`#${item.toLowerCase()}`}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(
                          `#${item.toLowerCase()}`
                        );
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {item}
                    </motion.a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>📧 abdulrauf.azhar@proton.me</p>
              <p>📱 +92-336-3855120</p>
              <p>📍 RYK, Punjab, Pakistan</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Made with <FiHeart className="text-red-500 mx-2" /> by Abdul Rauf
            Azhar © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
