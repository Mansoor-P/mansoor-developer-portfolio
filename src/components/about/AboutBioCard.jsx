import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { MapPin, Calendar } from "lucide-react";

const AboutBioCard = () => (
  <Card>
    <CardHeader>
      <CardTitle className="text-xl font-semibold">About Me</CardTitle>
    </CardHeader>
    <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
      <p>
        I’m a passionate software engineer with a strong foundation in full-stack development, system design, and backend architecture. My journey began in college, where I built projects that solved real-world problems using technologies like <strong>Java</strong>, <strong>React</strong>, and <strong>Spring Boot</strong>.
      </p>
      <p>
        Beyond coding, I actively contribute to open-source communities and enjoy exploring scalable backend systems, clean architecture, and DevOps workflows. My dedication to <strong>problem solving</strong> and <strong>clean code</strong> drives me to continuously learn and innovate.
      </p>
      <p>
        I'm currently looking for opportunities to collaborate on impactful projects and grow as a developer within dynamic engineering teams.
      </p>

      <div className="flex flex-wrap gap-6 mt-6 not-prose text-sm text-muted-foreground">
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
