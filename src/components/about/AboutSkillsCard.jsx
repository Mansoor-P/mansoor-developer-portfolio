import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Badge } from "../ui/Badge";

const skills = {
  Programming: [
    "C",
    "Java",
    "JavaScript",
    "Data Structures & Algorithms",
    "OOPs",
  ],
  Development: [
    "React",
    "Spring Boot",
    "Node.js",
    "Express",
    "Microservices",
    "REST APIs",
    "MVC Architecture",
  ],
  "Tools & Platforms": [
    "Git",
    "Docker",
    "Figma",
    "Vercel",
    "CI/CD",
    "Version Control",
  ],
  "Infra & Concepts": [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "AWS",
    "System Design",
  ],
};

// Define colors per category
const badgeColors = {
  Programming: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Development: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Tools & Platforms": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  "Infra & Concepts": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
};

const AboutSkillsCard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Skills & Technologies</CardTitle>
      <CardDescription>Technologies I work with regularly</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <div className="flex items-center mb-2">
              <span className="font-bold text-gray-800 dark:text-gray-100 text-base mr-2">
                {category}:
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    className={`text-sm px-3 py-1 ${badgeColors[category]}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default AboutSkillsCard;
