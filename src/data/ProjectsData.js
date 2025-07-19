import articleImage from "../assets/projects/article-posting.png";
import jobReview from "../assets/projects/job-review.png";
import careerSphereImage from "../assets/projects/career-sphere.png";
import HotelImage from "../assets/projects/hotel.jpg";

const projects = [
  {
    id: 1,
    slug: "careersphere-platform",
    name: "CareerSphere - Career Discovery & Job Navigation",
    description:
      "An AI-powered career platform for students and freshers with job discovery, roadmaps, resume tools, and interview prep.",
    longDescription:
      "CareerSphere is a full-stack platform that guides students, freshers, and self-taught developers in their career journey. It includes smart job feeds, personalized roadmaps, resume analyzers, AI career assistants, and an interactive community. Built with React, Tailwind, Node.js, and PostgreSQL, with future integration of LangChain and OpenAI tools.",
    github: "https://github.com/Mansoor-P/techiesphere.git",
    demo: "https://v0-v-1-mansoor-new-project-5v9c4at0d-mansoor-portfolio.vercel.app/",
    image: careerSphereImage,
    date: "2025-07-01",
    status: "In Progress",
    category: "Full Stack",
    tags: [
      "Career Platform",
      "AI Tools",
      "Resume Analyzer",
      "Job Discovery",
      "LangChain",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
    ],
    features: [
      "Smart Job Feed with filters and AI job match",
      "Personalized career roadmaps and trackers",
      "Resume Analyzer and Interview Prep Tools",
      "Role-based dashboards (Student, Admin, Recruiter)",
      "AI assistant using OpenAI + LangChain (WIP)",
    ],
    challenges: [
      "Designing modular architecture for scalable features",
      "Building smart matching logic with career data",
      "Implementing role-based dynamic dashboards",
    ],
    architecture:
      "Modular service-oriented architecture. Frontend built with React + ShadCN UI + Zustand. Backend built with Node.js, Express, and Prisma ORM. PostgreSQL for data storage. Deployment via Railway and Vercel.",
    keyImplementations: [
      "JobMatch AI feed filtering by role, skill, and location",
      "Resume parsing and score feedback system",
      "Dynamic roadmap + progress tracking dashboard",
      "Responsive, mobile-friendly UI with dark mode",
    ],
    readingTime: "6 min",
    featured: true,
  },
  {
    id: 2,
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
    category: "Frontend",
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
    id: 3,
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
    category: "Backend",
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

  {
    id: 4,
    slug: "hotel-booking-backend-api",
    name: "Hotel Booking Backend API",
    description:
      "A RESTful API for managing hotel bookings, customers, and room availability using Spring Boot.",
    longDescription:
      "This backend service provides APIs to manage hotel room bookings, customer details, and room availability. Built using Spring Boot and structured in a layered architecture with role-based authentication. The API supports CRUD operations for hotels, rooms, and bookings, and integrates with a PostgreSQL database for persistent storage.",
    github: "https://github.com/Mansoor-P/hotel-booking-api",
    demo: "",
    image: HotelImage,
    date: "2024-03-22",
    status: "Completed",
    category: "Backend",
    tags: ["Spring Boot", "REST API", "Hotel Booking", "Authentication"],
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Docker",
    ],
    features: [
      "Room booking and availability tracking",
      "Customer and hotel management",
      "Role-based access control (admin, customer)",
      "API documentation with Swagger",
      "Containerized using Docker",
    ],
    challenges: [
      "Designing clean, modular APIs",
      "Implementing role-based authorization securely",
      "Managing booking conflicts and availability",
    ],
    architecture:
      "Layered architecture with controllers, services, and repositories. PostgreSQL handles data storage. Spring Security manages authentication and authorization. The app is containerized with Docker for deployment.",
    keyImplementations: [
      "JWT-based authentication and role-based access",
      "Exception handling and API validation",
      "Swagger integration for API documentation",
    ],
    readingTime: "4 min",
    featured: false,
  },
];

export default projects;
