import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/" className="text-xl font-bold text-gray-800">KVK Siddartha</Link>
          </li>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-4"
          >
            <li><Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link></li>
            <li><Link to="/experience" className="text-gray-600 hover:text-gray-800">Experience</Link></li>
            <li><Link to="/projects" className="text-gray-600 hover:text-gray-800">Projects</Link></li>
            <li><Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
          </motion.div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;