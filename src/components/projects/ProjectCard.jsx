import { Link } from "react-router-dom";
import { Card, CardTitle, CardDescription } from "../ui/Card";
import { Badge } from "../ui/Badge";

const ProjectCard = ({ project }) => {
  const defaultImage = "/default-project.jpg";

  return (
    <Card className="group flex flex-col sm:flex-row w-full max-w-3xl overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
      {/* Image Section (30%) */}
      <div className="sm:w-[30%] w-full h-[200px] sm:h-auto relative flex-shrink-0">
        <img
          src={project.image || defaultImage}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section (70%) */}
      <div className="sm:w-[70%] w-full p-4 flex flex-col justify-between">
        {/* Title */}
        <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white">
          {project.name}
        </CardTitle>

        {/* Description */}
        <CardDescription className="text-sm mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">
          {project.description.length > 120
            ? project.description.slice(0, 120) + "..."
            : project.description}
        </CardDescription>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.techStack?.map((tech) => (
            <Badge
              key={tech}
              className="text-xs bg-gray-100 dark:bg-white/10 dark:border-white/20 dark:text-white"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* View Details Link */}
        <div className="mt-4">
          <Link
            to={`/projects/${project.slug}`}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
