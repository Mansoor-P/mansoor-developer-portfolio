const projects = [
  {
    id: 1,
    name: "Article Posting Platform",
    description:
      "Scalable blog platform built using Spring Boot microservices with secure JWT authentication and rich text editing.",
    techStack: ["Java", "Spring Boot", "React", "Tailwind CSS", "JWT", "Quill"],
    highlights: [
      "Designed microservices-based backend architecture",
      "Implemented JWT-based authentication and role-based access control",
      "Integrated Quill rich-text editor with React frontend",
      "Dockerized services for containerized deployment",
    ],
    github: "https://github.com/Mansoor-P/blog-application",
  },
  {
    id: 2,
    name: "Job Review Microservices Platform",
    description:
      "Distributed job listing and company review platform built with Spring Boot microservices and asynchronous messaging.",
    techStack: ["Java", "Spring Boot", "RabbitMQ", "PostgreSQL", "Docker"],
    highlights: [
      "Developed independent microservices for jobs, reviews, and applications",
      "Implemented asynchronous inter-service communication using RabbitMQ",
      "Ensured data consistency across distributed services",
      "Containerized system using Docker Compose for scalable deployment",
    ],
    github: "https://github.com/Mansoor-P/jobsmicroservice",
  },
  {
    id: 3,
    name: "Hotel Booking Microservices API",
    description:
      "Microservices-based hotel booking backend system supporting service discovery and RESTful APIs.",
    techStack: ["Java", "Spring Boot", "REST", "Docker", "PostgreSQL"],
    highlights: [
      "Designed domain-driven microservices for users, hotels, and bookings",
      "Built RESTful APIs with layered architecture",
      "Configured centralized configuration and service communication",
      "Containerized services for consistent local deployment",
    ],
    github: "https://github.com/Mansoor-P/hotel-booking-api-microservices",
  },
  {
    id: 4,
    name: "Developer Portfolio Website",
    description:
      "Responsive developer portfolio built with modern React architecture and Tailwind CSS.",
    techStack: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    highlights: [
      "Built reusable component-based UI architecture",
      "Implemented dark mode and responsive layouts",
      "Optimized performance and accessibility",
      "Deployed via modern frontend tooling pipeline",
    ],
    github: "https://github.com/Mansoor-P/mansoor-developer-portfolio",
  },
];

export default projects;
