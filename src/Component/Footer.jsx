import React from 'react';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 w-screen p-5 text-white flex justify-center items-center gap-5 md:gap-9">
      <div className="bg-gray-900 w-screen p-8 text-white flex items-center gap-5 md:gap-9">
        <motion.div whileHover={{ scale: 1.1 }}>
          <a href="https://www.linkedin.com/in/omkar-patil-85098428a/"><IoLogoLinkedin className="scale-[150%] hover:scale-[180%] transition-all"/></a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }}>
          <a href="https://github.com/omkarpatil14"><IoLogoGithub className="md:scale-[200%] scale-[150%] hover:scale-[180%] transition-all"/></a>
        </motion.div>
      </div>
      <div className="mt-8 text-center flex">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} To Do App | Created by Omkar Patil
        </p>
      </div>
    </motion.div>
  );
}

export default Footer;
