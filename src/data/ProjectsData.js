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
  {
  id: 3,
  slug: "online-code-editor",
  name: "Online Code Editor",
  description:
    "A real-time collaborative code editor with syntax highlighting and multi-language support.",
  longDescription:
    "An online code editor built for developers to write, edit, and share code in real time. Supports syntax highlighting, multiple programming languages, and collaborative editing using WebSockets. The editor integrates with a backend code execution engine and provides a seamless user experience with a responsive UI.",
  github: "https://github.com/your-username/online-code-editor",
  demo: "https://online-code-editor-demo.vercel.app",
  image: "", 
  date: "2024-06-15",
  status: "Completed",
  category: "Full Stack",
  tags: ["Code Editor", "WebSocket", "Collaborative", "Syntax Highlighting"],
  techStack: ["React", "Node.js", "Express", "Socket.io", "Monaco Editor"],
  features: [
    "Real-time collaborative editing with WebSocket",
    "Syntax highlighting using Monaco Editor",
    "Multi-language code execution support",
    "Shareable code session links",
    "Responsive and minimal UI",
  ],
  challenges: [
    "Maintaining real-time sync across multiple users",
    "Secure code execution in sandboxed environments",
    "Performance optimization for larger code snippets",
  ],
  architecture:
    "Frontend built in React with Monaco Editor. Backend uses Express and WebSocket (Socket.io) for real-time sync. A code execution service runs inside Docker containers for secure, isolated language execution.",
  keyImplementations: [
    "Collaborative WebSocket implementation with user session handling",
    "Monaco Editor integration and dynamic language mode switching",
    "Secure Docker-based code execution engine",
  ],
  readingTime: "6 min",
  featured: true
},
{
  id: 5,
  slug: "hotel-booking-backend-api",
  name: "Hotel Booking Backend API",
  description:
    "A RESTful API for managing hotel bookings, customers, and room availability using Spring Boot.",
  longDescription:
    "This backend service provides APIs to manage hotel room bookings, customer details, and room availability. Built using Spring Boot and structured in a layered architecture with role-based authentication. The API supports CRUD operations for hotels, rooms, and bookings, and integrates with a PostgreSQL database for persistent storage.",
  github: "https://github.com/Mansoor-P/hotel-booking-api",
  demo: "",
  image: "", 
  date: "2024-03-22",
  status: "Completed",
  category: "Backend",
  tags: ["Spring Boot", "REST API", "Hotel Booking", "Authentication"],
  techStack: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Docker"],
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
  featured: false
},
{
  id: 6,
  slug: "food-delivery-frontend",
  name: "Food Delivery App (Frontend)",
  description:
    "A modern and responsive food ordering frontend built with React and Tailwind CSS.",
  longDescription:
    "This is the frontend for a food delivery platform that allows users to browse restaurants, view menus, place orders, and track deliveries. Built with React for UI rendering and Tailwind CSS for styling, the app ensures a responsive and smooth user experience. Integrated with backend APIs for real-time order management and user authentication.",
  github: "https://github.com/Mansoor-P/food-delivery-frontend",
  demo: "https://food-delivery-frontend.vercel.app",
  image: "",
  date: "2024-05-10",
  status: "Completed",
  category: "Frontend",
  tags: ["React", "Food Delivery", "Tailwind CSS", "UI/UX"],
  techStack: ["React", "Tailwind CSS", "Axios", "React Router"],
  features: [
    "Restaurant and menu browsing",
    "Cart and order placement flow",
    "Order tracking UI",
    "User login and signup pages",
    "Responsive design for all devices",
  ],
  challenges: [
    "Dynamic cart management and price updates",
    "Maintaining user session across navigation",
    "UI responsiveness across multiple screen sizes",
  ],
  architecture:
    "Component-based React architecture with routing using React Router. State is managed locally with hooks, and Axios is used for API interactions. Styled using utility-first Tailwind CSS.",
  keyImplementations: [
    "Reusable components for menu and restaurant cards",
    "Persistent cart state using local storage",
    "Axios setup with interceptors for auth handling",
  ],
  readingTime: "4 min",
  featured: false
},

];

export default projects;
