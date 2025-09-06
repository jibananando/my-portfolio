"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const skillsFrontEnd = [
    { name: "HTML", level: 95 },
    { name: "CSS / Tailwind", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Next.js", level: 75 },
  ];

  const skillsBackEnd = [
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "SQL", level: 65 },
    { name: "REST APIs", level: 85 },
  ];

  return (
    <section id="skills" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
        <p className="text-gray-600 mt-2">
          Front-end and back-end skills with proficiency level
        </p>
      </div>

      <div ref={ref} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Front-end Skills */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Front-end
          </h3>
          {skillsFrontEnd.map((skill, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="font-medium text-gray-700">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-lg overflow-hidden">
                <motion.div
                  className="bg-blue-600 h-3 rounded-lg"
                  initial={{ width: 0 }}
                  animate={controls}
                  variants={{
                    visible: {
                      width: `${skill.level}%`,
                      transition: { duration: 1 + i * 0.2 },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Back-end Skills */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Back-end
          </h3>
          {skillsBackEnd.map((skill, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">{skill.name}</span>
                <span className="font-medium text-gray-700">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 h-3 rounded-lg overflow-hidden">
                <motion.div
                  className="bg-green-600 h-3 rounded-lg"
                  initial={{ width: 0 }}
                  animate={controls}
                  variants={{
                    visible: {
                      width: `${skill.level}%`,
                      transition: { duration: 1 + i * 0.2 },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
