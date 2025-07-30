import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiBook,
} from "react-icons/fi";

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.sendForm(
        "service_t83sz7h", // Replace with your service ID
        "template_n3p6raj", // Replace with your template ID
        formRef.current,
        "S7BEyLsfgm0JrkqvU55wJ" // Replace with your public key
      );

      if (result.text === "OK") {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }

    setIsLoading(false);
    setTimeout(() => setStatus(""), 5000);
  };

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

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-900" ref={ref}>
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
          Get in Touch
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
              I'm always open to discussing new opportunities and interesting
              projects. Whether you're a fellow developer, potential employer,
              or just want to chat about tech, feel free to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                  <FiMail
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:abdulrauf.azhar@proton.me"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    abdulrauf.azhar@proton.me
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                  <FiPhone
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href="tel:03363855120"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +92-336-3855120
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full">
                  <FiMapPin
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    House # 12, Rahim Garden, RYK, Punjab, Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/abdul-rauf-azhar-5750a3378/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-dark-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <FiLinkedin
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </a>
                <a
                  href="https://github.com/Motasaith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-dark-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <FiGithub
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </a>
                <a
                  href="https://abdul-blog-client.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 dark:bg-dark-700 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                >
                  <FiBook
                    className="text-blue-600 dark:text-blue-400"
                    size={24}
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full btn-primary ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 dark:text-red-400 text-center">
                  Failed to send message. Please try again or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
