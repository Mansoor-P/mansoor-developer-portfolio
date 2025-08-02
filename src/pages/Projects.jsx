import React, { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import projects from "../data/ProjectsData";
import Watermark from "../components/Watermark";

const categoryTabs = ["All", "Frontend", "Backend", "Fullstack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-neutral-100 dark:from-black dark:to-neutral-900">
      <Watermark />

      <div className="max-w-6xl mx-auto">


        {/* Category Tabs */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {categoryTabs.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition border
                ${selectedCategory === category
                  ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                  : "bg-transparent text-gray-600 dark:text-gray-300 border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id || project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-16">
            No projects found in this category.
          </p>
        )}

        {/* Footer Link */}
        <div className="mt-20 text-left text-sm text-gray-500 dark:text-gray-400">
          <a
            href="https://drive.google.com/file/d/1zXewp9gSgaOjR45rYY4MFKZ8TL39JOHB/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:underline group"
          >
            Let’s Go To My Resume.
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </a>
        </div>

      </div>
    </div>
  );
}
