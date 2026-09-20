"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, experience } from "@/lib/data";
import { Briefcase, MapPin, Mail } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section
      id="about"
      className="section-padding bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold mb-6">Who am I?</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, Playing Chess, Reading
              Novels or sharing my knowledge through blog posts and mentoring.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Briefcase className="w-5 h-5 text-blue-600" />
                <span>5+ Years of Experience</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 border-l-2 border-blue-600/30 hover:border-blue-600 transition-colors"
                >
                  <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-blue-600" />
                  <span className="text-sm text-blue-600 font-medium">
                    {exp.period}
                  </span>
                  <h4 className="text-lg font-bold mt-1">{exp.position}</h4>
                  <p className="text-slate-500 dark:text-slate-500 text-sm mb-2">
                    {exp.company}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
