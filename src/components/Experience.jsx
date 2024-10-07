import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const experiences = [
    {
      title: "Lead developer | Co-Founder",
      company: "Webcraft - AP, IN",
      date: "Aug 2024 - March 2024",
      description: [
        "Deployed a performant e-commerce webapp on AWS for a fashion company - Ruluka.",
        "Converted the webapp into a PWA which enabled features like push notifications, etc.",
        "Integrated a robust payment system using Razorpay and made sure the backend is highly secure."
      ]
    },
    {
      title: "Frontend developer | Deployment engineer",
      company: "Surabhi Website, KL University - AP, IN",
      date: "Dec 2023 - March 2024",
      description: [
        "Worked with a versatile team to create innovative 3D websites for KL University.",
        "Deployed the website in AWS, equipping it with proper technology to handle registrations and payments of thousands of university students with technologies like NGNIX and Apache web server."
      ]
    },
    {
      title: "Backend developer",
      company: "Reachify",
      date: "May, June 2024",
      description: [
        "Worked on Reachify's CRM project where I optimally handled advanced API's like Meta and Microsoft graph API's and created my own API's by scraping data using Puppeteer.",
        "Developed a specific Twillio application as I was tasked to.",
        "Additionally, I worked alot in the frontend also for backend to frontend integration for React."
      ]
    }
  ];

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
              <p className="text-lg text-gray-600 mb-2">{exp.company}</p>
              <p className="text-md text-gray-500 mb-4">{exp.date}</p>
              <ul className="list-disc list-inside text-gray-600">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-2">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Experience;