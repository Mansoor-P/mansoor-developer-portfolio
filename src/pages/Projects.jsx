import projects from "../data/ProjectsData";
import { Github } from "lucide-react";

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Projects</h1>

      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.id} className="border-b pb-8">
            {/* Header */}
            <div className="flex justify-between items-start flex-wrap gap-2">
              <h2 className="text-xl font-semibold">{project.name}</h2>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-600 hover:underline"
                >
                  <Github size={16} />
                  GitHub
                </a>
              )}
            </div>

            {/* Tech Stack */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {project.techStack.join(" • ")}
            </p>

            {/* Description */}
            <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="list-disc list-inside mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
              {project.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
