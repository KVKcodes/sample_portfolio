import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg text-gray-600 mb-4">
              I'm a passionate developer specializing in app development and cybersecurity. 
              Currently pursuing my B.Tech in CSE with a specialization in Cybersecurity and 
              Blockchain at KL University, I have a strong foundation in various programming 
              languages and technologies.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              My experience includes working on innovative projects, such as developing 
              e-commerce platforms, creating 3D websites, and implementing secure payment systems. 
              I'm always eager to learn and apply new technologies to solve real-world problems.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
            <ul className="list-disc list-inside text-lg text-gray-600">
              <li>Web Development (React, Node.js, Express)</li>
              <li>Mobile App Development</li>
              <li>Cybersecurity</li>
              <li>Blockchain Technology</li>
              <li>Python, Java, C#, JavaScript</li>
              <li>Database Management (MongoDB, PostgreSQL, MySQL)</li>
              <li>Cloud Services (AWS)</li>
              <li>Version Control (Git)</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;