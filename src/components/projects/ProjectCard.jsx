import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const defaultImage = "/default-project.jpg";

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group relative block rounded-xl overflow-hidden"
    >
      {/* Project Image */}
      <img
        src={project.image || defaultImage}
        alt={project.name}
        className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
        <h3 className="text-white text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-white text-sm mb-3 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack?.map((tech) => (
            <span
              key={tech}
              className="bg-white/20 text-white text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
