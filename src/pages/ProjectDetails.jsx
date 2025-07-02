import { useParams } from "react-router-dom";
import projects from "../data/ProjectsData";
import { Badge } from "../components/ui/Badge";
import { Github, ExternalLink } from "lucide-react";

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((proj) => proj.slug === slug);

  if (!project) {
    return (
      <div className="p-6 text-center text-red-500">Project not found.</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="md:col-span-3 space-y-8">
          <h1 className="text-4xl font-bold">{project.name}</h1>
          <p className="text-lg text-muted-foreground">{project.description}</p>

          <img
            src={project.image}
            alt={project.name}
            className="rounded-lg w-full shadow-md"
          />

          {project.longDescription && (
            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300">
              {project.longDescription}
            </p>
          )}

          {/* Architecture / Features */}
          {project.architecture && (
            <section>
              <h2 className="text-xl font-semibold mb-2">Architecture Overview</h2>
              <p className="text-base leading-relaxed">{project.architecture}</p>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-2">Key Features</h2>
              <ul className="list-disc list-inside space-y-1 text-base">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-2">Challenges</h2>
              <ul className="list-disc list-inside space-y-1 text-base">
                {project.challenges.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {project.keyImplementations && (
            <section>
              <h2 className="text-xl font-semibold mb-2">Key Implementations</h2>
              <ul className="list-disc list-inside space-y-1 text-base">
                {project.keyImplementations.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* GitHub / Demo Links */}
          <div className="flex gap-6 mt-6 flex-wrap">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <Github className="w-5 h-5" /> GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <ExternalLink className="w-5 h-5" /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-1 sticky top-24 space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-lg font-semibold mb-2">Project Info</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><strong>Status:</strong> {project.status}</li>
              <li><strong>Date:</strong> {project.date}</li>
              <li><strong>Category:</strong> {project.category}</li>
              <li><strong>Reading time:</strong> {project.readingTime}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((tag) => (
                <Badge key={tag} className="text-xs bg-gray-100 dark:bg-white/10">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetails;
