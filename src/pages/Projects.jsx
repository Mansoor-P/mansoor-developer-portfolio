import React, { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";
import projects from "../data/ProjectsData";
import Watermark from "../components/Watermark";

const categories = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <Watermark />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-3">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my work from scalable backends to interactive frontends and developer tools.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition focus:outline-none focus:ring-2 focus:ring-offset-2
                ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white border-blue-600 focus:ring-blue-500"
                    : "bg-transparent border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects List */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id || project.slug} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-16">
            No projects found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
