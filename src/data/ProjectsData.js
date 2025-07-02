import articleImage from "../assets/projects/article-posting.png";
import jobReview from "../assets/projects/job-review.png";
// import portfolioImage from "../assets/projects/portfolio.png";

const projects = [
  {
    id: 1,
    slug: "article-posting-platform",
    name: "Article Posting Platform",
    description:
      "A scalable blog platform with secure auth and rich text editing using Spring Boot microservices.",
    longDescription:
      "Developed a robust blog platform enabling users to create, update, and manage articles. The project is structured using Spring Boot microservices, integrated with secure JWT-based authentication, Quill rich-text editor, and a modern React + Tailwind CSS frontend.",
    github: "https://github.com/Mansoor-P/blog-application",
    demo: "",
    image: articleImage,
    date: "2024-02-20",
    status: "Completed",
    category: "Backend",
    tags: ["Spring Boot", "JWT", "Microservices", "Quill"],
    techStack: ["Java", "Spring Boot", "React", "Tailwind CSS", "JWT", "Quill"],
    features: [
      "JWT-based authentication",
      "Rich text editing with Quill",
      "Microservices architecture",
      "Responsive UI with Tailwind CSS",
    ],
    challenges: [
      "Handling inter-service communication",
      "Secure user access control",
      "State management between frontend and backend",
    ],
    architecture:
      "Built using a microservices architecture with Spring Boot. Auth service manages JWT tokens. Article service handles CRUD operations. Frontend communicates via REST APIs.",
    keyImplementations: [
      "Quill editor integration with React forms",
      "Role-based route guarding using JWT",
      "Dockerized services for easy deployment",
    ],
    readingTime: "4 min",
    featured: true,
  },
  {
    id: 2,
    slug: "job-review-web-app",
    name: "Job Review Web App",
    description:
      "A job listing and company review platform built with Spring Boot microservices and RabbitMQ.",
    longDescription:
      "A full-stack application for job seekers to browse listings, apply to roles, and review companies. The backend is microservice-based with RabbitMQ for communication and PostgreSQL for storage. Docker is used for scalable deployment.",
    github: "https://github.com/Mansoor-P/jobsmicroservice",
    demo: "",
    image: jobReview,
    date: "2023-11-12",
    status: "Completed",
    category: "Full Stack",
    tags: ["Microservices", "RabbitMQ", "PostgreSQL", "Docker"],
    techStack: ["Java", "Spring Boot", "RabbitMQ", "PostgreSQL", "Docker"],
    features: [
      "Job posting and application modules",
      "Company reviews and ratings",
      "Microservices with async RabbitMQ queues",
      "Scalable deployment using Docker",
    ],
    challenges: [
      "Service-to-service communication with RabbitMQ",
      "Data consistency across services",
      "Review moderation system",
    ],
    architecture:
      "Each domain (jobs, reviews, applications) is an independent Spring Boot microservice. Services communicate asynchronously via RabbitMQ queues. PostgreSQL is used per service with Docker Compose setup.",
    keyImplementations: [
      "Asynchronous messaging using RabbitMQ",
      "REST APIs with service discovery",
      "Containerized microservices using Docker",
    ],
    readingTime: "5 min",
    featured: false,
  },
];

export default projects;
