import { Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardDescription } from "../ui/Card";
import { Badge } from "../ui/Badge";

const ProjectCard = ({ project }) => {
  const defaultImage = "/default-project.jpg"; 

  return (
    <Card className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 w-full sm:w-[360px] h-[260px] ">
      {/* Image */}
      <div className="h-[200px] overflow-hidden relative">
        <img
          src={project.image || defaultImage}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-sm text-white/70 mt-1 line-clamp-3">
              {project.description.length > 100
                ? project.description.slice(0, 100) + "..."
                : project.description}
            </p>

            {/* techStack Stack */}
            <div className="flex flex-wrap gap-1 mt-3">
              {project.techStack?.map((techStack) => (
                <Badge
                  key={techStack}
                  className="text-xs bg-white/10 border border-white/20 text-white"
                >
                  {techStack}
                </Badge>
              ))}
            </div>
          </div>

          {/* View Details Link */}
          <Link
            to={`/projects/${project.slug}`}
            className="text-sm text-blue-400 hover:underline mt-1"
          >
            View Details →
          </Link>
        </div>
      </div>

      
    </Card>
  );
};

export default ProjectCard;
