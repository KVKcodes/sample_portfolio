import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">KVK Siddartha</h1>
        <h2 className="text-2xl text-gray-600 mb-8">App Development & Cybersecurity</h2>
        <p className="text-xl text-gray-600 mb-8">
          Passionate developer with expertise in web and mobile app development, 
          and a strong foundation in cybersecurity.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Home;