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
    <div className="relative py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <Watermark />

      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of my work ranging from scalable backends to interactive frontends and tools.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-transparent border-gray-400 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects List (Vertical Layout) */}
        <div className="space-y-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        {/* Fallback */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">
            No projects found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
