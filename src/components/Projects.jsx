import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Ruluka E-commerce Platform",
      description: "Developed a performant e-commerce webapp using MERN stack, implemented PWA features, and integrated Razorpay payment system.",
      link: "https://ruluka.com"
    },
    {
      title: "AuditX",
      description: "Project built for SIH that automates OS audits for both local and remote systems by leveraging ruby scripts.",
      link: "#"
    },
    {
      title: "Cryptojacking Visualization",
      description: "Graph visualization of cryptojacking's evolution over the years made using NLP techniques.",
      link: "https://bit.ly/crypto-visualisation"
    },
    {
      title: "KL Surabhi Website",
      description: "Developed and deployed the main cultural fest website for KL University using 3D web technologies.",
      link: "https://bit.ly/klsurabhi"
    },
    {
      title: "Custom HTTP Server",
      description: "Implemented a custom HTTP server with features like routing and gzip compression.",
      link: "https://bit.ly/httpserve"
    },
    {
      title: "3D Unity Game",
      description: "Developed a 3D game using Unity game engine.",
      link: "https://bit.ly/lame-game"
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 transition duration-300"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;