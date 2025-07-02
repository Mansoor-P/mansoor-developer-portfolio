import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";

const experience = [
  {
    title: "Open Source Contributor",
    company: "Girl Script Summer of Code (GSSoC) 2025",
    period: "May 2025 – Present",
    description:
      "Actively contributing to a selected open-source project. Collaborating with global mentors and solving real-world challenges through clean and scalable code.",
  },
  {
    title: "Backend Developer (Freelance)",
    company: "Remote",
    period: "2024 – Present",
    description:
      "Worked with clients on scalable backend APIs using Java, Spring Boot, and PostgreSQL. Implemented system design principles.",
  },
];

const AboutExperienceCard = () => (
  <Card>
    <CardHeader>
      <CardTitle>Experience</CardTitle>
      <CardDescription>My professional journey so far</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-6">
        {experience.map((job, index) => (
          <div key={index} className="border-l-1 border-blue-500 pl-5 relative">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-1" />
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap items-center gap-1">
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <span className="text-lg">:</span>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {job.company}
                  </p>
                </div>

                <p className=" text-sm text-muted-foreground whitespace-nowrap">
                  {job.period}
                </p>
              </div>
              <p className="italic text-sm text-gray-500 leading-relaxed">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default AboutExperienceCard;
