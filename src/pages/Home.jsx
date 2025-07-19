import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { motion } from "framer-motion";
import {
  Linkedin,
  Github,
  Mail,
  Twitter,
  Award,
  Network,
  Settings,
} from "lucide-react";

import Watermark from "../components/Watermark";

const name = "Mansoor Pathikonda";

export default function Home() {
  return (
    <div className="relative  overflow-hidden container mx-auto px-1 py-12 md:py-16">
      <div className="max-w-5xl mx-auto space-y-8 text-center md:text-left">
        <Watermark />
        {/* Name & Title */}
       <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide text-left"
    >
      Hi, I’m{" "}
      <motion.span className="relative inline-block text-primary" role="text">
        {/* Animated highlight bar that grows with typing */}
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: name.length * 0.07 + 0.3, ease: "easeOut" }}
          className="absolute bottom-1 h-3 bg-yellow-300 dark:bg-yellow-400 opacity-40 rounded-md z-[-1]"
        />
        {/* Typing character-by-character */}
        {name.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + index * 0.07 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </motion.h1>

        <p className="text-muted-foreground text-lg max-w-1xl mx-auto md:mx-0 text-justify">
          Aspiring Software Engineer • Full-Stack Developer •{" "}
          <span className="font-medium">GSSoC 2025 Contributor</span>
        </p>

        {/* Description */}
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mx-auto md:mx-0 text-justify leading-relaxed">
          I specialize in{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            Full-Stack Development
          </span>
          , with hands-on experience in building{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            scalable
          </span>{" "}
          and{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            user-friendly
          </span>{" "}
          applications using{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            React.js
          </span>
          ,{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            Java
          </span>
          ,{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            Spring Boot
          </span>
          , and{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            Microservices
          </span>{" "}
          architecture. I focus on designing{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            robust REST APIs
          </span>{" "}
          and managing{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            efficient database integrations
          </span>{" "}
          to support{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            high-performance
          </span>{" "}
          backend systems.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-5xl mx-auto md:mx-0 mt-4 text-justify leading-relaxed">
          I have a strong foundation in{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            Problem Solving
          </span>{" "}
          and{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            Competitive Programming
          </span>
          , which enhances my ability to write{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            optimized
          </span>{" "}
          and{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            maintainable code
          </span>
          . As a{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            GSoC 2025 Contributor
          </span>
          , I’m actively contributing to{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            open-source projects
          </span>{" "}
          and collaborating with{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            global communities
          </span>{" "}
          to solve{" "}
          <span className="text-primary font-semibold bg-primary/10 px-1 rounded">
            real-world challenges
          </span>
          .
        </p>
        {/* Badges */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          <Badge variant="warning" className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            GSoC 2025 Contributor
          </Badge>

          <Badge variant="success" className="flex items-center gap-1">
            <Network className="w-4 h-4" />
            System Design Enthusiast
          </Badge>

          <Badge variant="outline" className="flex items-center gap-1">
            <Settings className="w-4 h-4" />
            Problem-Solver with Scalable Design
          </Badge>
        </div>

        {/* Call To Actions */}
        <div className="flex flex-wrap justify-start md:justify-start gap-4 mt-6">
          <Link
            to="/about"
            className="text-gray-800 dark:text-blue-400 font-medium group flex items-center gap-1"
          >
            See More About Me{" "}
            <motion.span
              animate={{
                x: [0, 6, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              →
            </motion.span>
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-10 text-gray-600 dark:text-gray-300">
          <a
            href="https://linkedin.com/in/mansoor0731"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/Mansoor-P"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="mailto:munaf6007@gmail.com"
            aria-label="Email"
            className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
          >
            <Mail size={28} />
          </a>
          <a
            href="https://twitter.com/echotrend_in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
          >
            <Twitter size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
