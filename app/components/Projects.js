"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      image: "/projects/portfolio.jpg",
      link: "/projects/portfolio",
    },
    {
      title: "E-commerce App",
      image: "/projects/ecommerce.jpg",
      link: "/projects/ecommerce",
    },
    {
      title: "Blog Platform",
      image: "/projects/blog.jpg",
      link: "/projects/blog",
    },
    {
      title: "Social Media App",
      image: "/projects/social.jpg",
      link: "/projects/social",
    },
    {
      title: "Chat App",
      image: "/projects/chat.jpg",
      link: "/projects/chat",
    },
    {
      title: "Task Manager",
      image: "/projects/tasks.jpg",
      link: "/projects/tasks",
    },
  ];

  return (
    <section id="projects" className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
        <p className="text-gray-600 mt-2">
          A collection of projects I’ve worked on — click to explore more.
        </p>
      </div>

      {/* Projects Wall */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />

            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
            >
              <h3 className="text-white text-xl font-bold text-center px-2">
                {project.title}
              </h3>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
