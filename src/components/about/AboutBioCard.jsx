import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { MapPin, Calendar } from "lucide-react";

const AboutBioCard = () => (
  <Card className="border border-neutral-200 dark:border-neutral-800 shadow-sm rounded-2xl">
    <CardHeader className="pb-2">
      <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white">
        About Me
      </CardTitle>
    </CardHeader>

    <CardContent className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
      <p>
        I’m a passionate <span className="text-black dark:text-white font-medium">software engineer</span> with a strong foundation in full-stack development, system design, and backend architecture. My journey began in college, where I built projects that solved real-world problems using technologies like{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">Java</span>,{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, and{" "}
        <span className="font-semibold text-green-600 dark:text-green-400">Spring Boot</span>.
      </p>

      <p>
        Beyond coding, I actively contribute to{" "}
        <span className="font-semibold text-pink-600 dark:text-pink-400">open-source</span> communities and enjoy exploring scalable backend systems, clean architecture, and DevOps workflows. I’m driven by <span className="font-medium text-amber-600 dark:text-amber-400">problem solving</span> and <span className="font-medium text-emerald-600 dark:text-emerald-400">clean code</span>.
      </p>

      <p>
        I'm currently looking for opportunities to collaborate on impactful projects and grow as a developer within dynamic engineering teams.
      </p>

      <p>
        Outside of work, I enjoy exploring <span className="font-medium text-purple-600 dark:text-purple-400">design systems</span>, reading tech blogs, and mentoring juniors in <span className="font-medium text-red-600 dark:text-red-400">DSA</span> and open-source.
      </p>

      <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-500 dark:text-gray-400 border-t border-neutral-200 dark:border-neutral-700 mt-6">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          Hyderabad, India
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2" />
          Open to freelance & remote roles
        </div>
      </div>
    </CardContent>
  </Card>
);

export default AboutBioCard;
