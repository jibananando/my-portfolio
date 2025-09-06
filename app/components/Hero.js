"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-gray-50 text-gray-900">
      {/* Left: Profile Photo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center md:justify-start mb-10 md:mb-0"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-blue-500">
          <Image
            src="/me.jpg" // 👈 place your photo in public/me.jpg
            alt="JP Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Right: Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-blue-600">Jibananando</span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl">
          A passionate <span className="text-blue-600">Web Developer </span>
          crafting modern, scalable, and beautiful applications with
          <span className="font-semibold"> JavaScript,</span>
          <span className="font-semibold"> React,</span> and{" "}
          <span className="font-semibold"> Tailwind CSS</span>.
        </p>

        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <a
            href="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View My Work
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-gray-400 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
