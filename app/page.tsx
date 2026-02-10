"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { memo } from "react";



const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const CircularSkill = memo(
  ({ name, percent }: { name: string; percent: number }) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-gray-800 p-6 rounded-xl flex flex-col items-center"
      >
        <div className="relative w-28 h-28">
          <svg className="w-full h-full">
            <circle
              className="text-gray-700"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="45"
              cx="50%"
              cy="50%"
            />
            <circle
              strokeWidth="8"
              strokeDasharray={280}
              strokeDashoffset={280 - (280 * percent) / 100}
              strokeLinecap="round"
              stroke="cyan"
              fill="transparent"
              r="45"
              cx="50%"
              cy="50%"
            />
          </svg>

          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold">
            {percent}%
          </span>
        </div>

        <p className="mt-3 text-gray-300">{name}</p>
      </motion.div>
    );
  }
);


export default function Home() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "React Developer",
      "IT Consultant",
      "GenAI Devloper",
      "Tech Enthusiast",
      "Problem Solver",
    ],
    loop: true,
    delaySpeed: 1500,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 px-6 md:px-24 py-12">

      {/* HERO SECTION */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Bhaskar Mamoria
        </h1>

        <h2 className="text-xl mt-6 text-gray-300">
          {text}
          <Cursor />
        </h2>

        <div className="flex justify-center gap-8 mt-6 text-2xl text-gray-300">
          <a href="mailto:bhaskarmamoria55@gmail.com">
            <FaEnvelope />
          </a>
          <a
            href="https://linkedin.com/in/bhaskar-mamoria-87295818b"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com" target="_blank">
            <FaGithub />
          </a>
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section
        className="mt-24 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-cyan-400">About Me</h2>

        <p className="mt-4 text-gray-300 leading-relaxed">
          I am a Full-Stack Software Developer with over 3 years of hands-on experience building
          scalable backend APIs, modern frontend interfaces, and AI-driven integrations.
          My expertise lies in React.js, Node.js, TypeScript, and cloud technologies.

          I focus on delivering high-performance applications with clean architecture,
          seamless user experiences, and maintainable code. I have worked across enterprise
          applications, client projects, and personal innovations – always aiming to create
          impactful digital solutions.
        </p>
      </motion.section>

     {/* NEXT-GEN EXPERIENCE TIMELINE */}
<motion.section
  className="mt-32 max-w-6xl mx-auto"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-100px" }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-14 text-center">
    Professional Journey
  </h2>

  <div className="relative">

    {/* Glowing Vertical Line */}
    <div className="absolute left-6 top-0 h-full w-[3px] bg-gradient-to-b from-cyan-400 via-purple-500 to-cyan-400 animate-pulse"></div>

    <div className="space-y-16">

      {[
        {
          title: "Software Developer – Infoobjects Pvt Ltd",
          duration: "Nov 2023 – Present | Jaipur",
          points: [
            "Engineered backend APIs improving response time by 30%",
            "Reduced system errors by 15% through optimized services",
            "Integrated enterprise-grade third-party services",
            "Built scalable and reusable React components",
          ],
          color: "from-cyan-400 to-blue-500",
        },
        {
          title: "Associate Software Developer – Nagarro",
          duration: "Apr 2022 – Jul 2023 | Jaipur",
          points: [
            "Developed enterprise applications using React & TypeScript",
            "Enhanced UI/UX performance by 20%",
            "Delivered multiple production-grade builds",
            "Resolved critical client issues with optimized solutions",
          ],
          color: "from-purple-400 to-pink-500",
        },
        {
          title: "Frontend Developer Intern – FiftyFive Technologies",
          duration: "Apr 2021 – Jul 2021 | Jaipur",
          points: [
            "Designed UI components using React.js & React Native",
            "Implemented responsive mobile-first designs",
            "Improved cross-device compatibility",
            "Enhanced usability for client applications",
          ],
          color: "from-green-400 to-cyan-400",
        },
      ].map((job, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, x: -80 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ type: "spring", stiffness: 120 }}
          className="relative ml-16 group"
        >
          {/* Floating Dot */}
          <motion.div
            whileHover={{ scale: 1.3 }}
            className={`absolute -left-[56px] top-2 w-6 h-6 rounded-full bg-gradient-to-r ${job.color} shadow-lg shadow-cyan-500/50`}
          ></motion.div>

          {/* Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white">
              {job.title}
            </h3>

            <p className="text-gray-400 mt-1">{job.duration}</p>

            <ul className="mt-4 space-y-2">
              {job.points.map((p, i) => (
                <li
                  key={i}
                  className="text-gray-300 flex items-start gap-2"
                >
                  <span className="text-cyan-400">▹</span>
                  {p}
                </li>
              ))}
            </ul>

            {/* Bottom Glow Line */}
            <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-cyan-400 to-purple-500 mt-4"></div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>


      {/* NEXT GEN EDUCATION SECTION */}
<motion.section
  className="mt-32 max-w-6xl mx-auto"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-100px" }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
    Academic Journey
  </h2>

  <p className="text-center text-gray-400 mt-2">
    AI-powered learning path and formal education milestones
  </p>

  <div className="mt-12 grid md:grid-cols-3 gap-8">

    {[
      {
        degree: "MS in Computer Science – Gen AI",
        institute: "Massachusetts Institute of Technology",
        year: "2025",
        score: "CGPA 8.9",
        glow: "from-cyan-400 to-blue-500",
        percent: 90,
      },
      {
        degree: "Master of Business Administration",
        institute: "Manipal University Jaipur",
        year: "2025",
        score: "CGPA 7.98",
        glow: "from-purple-400 to-pink-500",
        percent: 80,
      },
      {
        degree: "B.Tech – Computer Science",
        institute: "JECRC University Jaipur",
        year: "2018 – 2022",
        score: "75.51%",
        glow: "from-green-400 to-cyan-400",
        percent: 75,
      },
    ].map((edu, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, y: 60 },
          show: { opacity: 1, y: 0 },
        }}
        whileHover={{ y: -10 }}
        className="relative group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
      >
        {/* Top Glow Bar */}
        <div
          className={`h-[3px] w-full absolute top-0 left-0 bg-gradient-to-r ${edu.glow}`}
        ></div>

        <h3 className="text-xl font-semibold mt-2">{edu.degree}</h3>

        <p className="text-gray-400 mt-1">{edu.institute}</p>

        <div className="flex justify-between mt-4 text-gray-300">
          <span>{edu.year}</span>
          <span className="font-semibold">{edu.score}</span>
        </div>

        {/* AI STYLE PROGRESS RING */}
        <div className="flex justify-center mt-6">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full">
              <circle
                className="text-gray-700"
                strokeWidth="6"
                stroke="currentColor"
                fill="transparent"
                r="38"
                cx="50%"
                cy="50%"
              />

              <circle
                strokeWidth="6"
                strokeDasharray={240}
                strokeDashoffset={240 - (240 * edu.percent) / 100}
                strokeLinecap="round"
                stroke="cyan"
                fill="transparent"
                r="38"
                cx="50%"
                cy="50%"
              />
            </svg>

            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
              {edu.percent}%
            </span>
          </div>
        </div>

        {/* Bottom Hover Glow */}
        <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-cyan-400 to-purple-500 mt-6"></div>
      </motion.div>
    ))}

  </div>
</motion.section>


{/* ADVANCED PROJECT SHOWCASE */}
<motion.section
  className="mt-32 max-w-6xl mx-auto"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-100px" }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
    Featured Projects
  </h2>

  <p className="text-center text-gray-400 mt-2">
    Real-world applications and personal innovations
  </p>

  <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      {
        name: "AI Resume Analyzer",
        desc: "GenAI-powered tool that analyzes resumes and provides smart feedback using NLP models.",
        tech: ["React", "Node.js", "OpenAI", "MongoDB"],
        github: "https://github.com/Bhaskar2205",
        color: "from-cyan-400 to-blue-500",
      },
      {
        name: "PINK CITY MARKETING NEXT GEN AI WEBSITE",
        desc: "Pink City Blog is A Next Geneation AI powered marketing platform built with React, Firebase, Tailwind CSS, and WebSockets for real-time updates. And more changes as being deployed soon.",
        github: "https://github.com/Bhaskar2205",
        demo: "https://pink-city-blog.vercel.app/",
        tech: ["React", "Firebase", "Tailwind", "WebSockets"],
        color: "from-purple-400 to-pink-500",
      },
      {
        name: "Ekart Platform",
        desc: "E-commerce platform built with React & Firebase featuring real-time data sync.",
        tech: ["React", "Firebase", "Auth", "Cloud DB"],
      
        color: "from-green-400 to-cyan-400",
      },
      {
        name: "Sudoku Solver",
        desc: "Interactive Sudoku game with dynamic puzzle generation and validation engine.",
        tech: ["JavaScript", "Algorithms", "UI/UX"],
        
        color: "from-yellow-400 to-orange-500",
      },
      {
        name: "Portfolio Generator",
        desc: "Automated portfolio creator that generates resume websites from JSON data.",
        tech: ["Next.js", "Framer Motion", "Tailwind"],
        
        color: "from-pink-400 to-red-500",
      },
      {
        name: "Task Automation Bot",
        desc: "Node.js automation scripts to streamline repetitive development workflows.",
        tech: ["Node.js", "Automation", "APIs"],
        
        color: "from-indigo-400 to-purple-500",
      },
    ].map((project, index) => (
      <motion.div
        key={index}
        variants={{
          hidden: { opacity: 0, y: 60 },
          show: { opacity: 1, y: 0 },
        }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 p-6"
      >
        {/* Top Gradient Line */}
        <div
          className={`absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r ${project.color}`}
        ></div>

        <h3 className="text-xl font-semibold mt-2">{project.name}</h3>

        <p className="text-gray-400 mt-2 text-sm leading-relaxed">
          {project.desc}
        </p>

        {/* TECH STACK */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full bg-gray-800 text-cyan-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-6 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="px-4 py-2 text-sm rounded-lg bg-gray-800 hover:bg-gray-700 transition"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            className="px-4 py-2 text-sm rounded-lg bg-cyan-600 hover:bg-cyan-700 transition"
          >
            Live Demo
          </a>
        </div>

        {/* Bottom Hover Glow */}
        <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r from-cyan-400 to-purple-500 mt-6"></div>
      </motion.div>
    ))}
  </div>
</motion.section>













      {/* TECHNICAL SKILLS */}
      <motion.section className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-purple-400">Technical Skills</h2>

        <div className="grid md:grid-cols-4 gap-6 mt-8">
          <CircularSkill name="React.js" percent={90} />
          <CircularSkill name="Node.js" percent={85} />
          <CircularSkill name="TypeScript" percent={80} />
          <CircularSkill name="MongoDB" percent={75} />
          <CircularSkill name="Firebase" percent={80} />
          <CircularSkill name="Docker" percent={70} />
          <CircularSkill name="TailwindCSS" percent={85} />
          <CircularSkill name="Git" percent={90} />
        </div>
      </motion.section>

      {/* LANGUAGE BARS */}
      <motion.section className="mt-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-cyan-400">Languages</h2>

        <div className="mt-8 space-y-6">
          {[
            { name: "English", level: 95 },
            { name: "Hindi", level: 100 },
          ].map((lang) => (
            <div key={lang.name}>
              <div className="flex justify-between text-gray-300">
                <span>{lang.name}</span>
                <span>{lang.level}%</span>
              </div>

              <div className="w-full bg-gray-700 h-3 rounded mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.level}%` }}
                  transition={{ duration: 1 }}
                  className="bg-cyan-400 h-3 rounded"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="text-center mt-24 text-gray-500">
        Crafted with Next.js • Tailwind • Framer Motion By Bhaskar Mamoria
      </footer>
    </main>
  );
}
