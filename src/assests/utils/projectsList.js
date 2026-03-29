import bestdeal from "../images/BestDeal.jpg";
import clonetubes from "../images/clonetubes.png";

export const projects = [
  {
    name: "Theatre platform to track shows and connect with artists",
    description: [
      "Built and maintained scalable RESTful APIs and backend architecture using Laravel",
      "Designed and optimized PostgreSQL schemas, migrations, and complex queries for performance",
      "Developed reusable Vue.js components with form validation for scalable UI development",
      "Integrated Meilisearch for fast and relevant search",
      "Implemented Stripe for payments, including split payments and Stripe Connect onboarding",
      "Optimized database queries and data handling for better performance and scalability",
    ],
    tech: ["Laravel", "Vue.js", "PostgreSQL", "Stripe", "Meilisearch"],
    purpose: "Company Project",
    type: "Website",
    is_work: true,
  },
  {
    name: "Theatre platform for casting, hiring, and networking",
    description: [
      "Developed and maintained RESTful APIs and backend modules using Laravel",
      "Designed and optimized PostgreSQL schemas, migrations, and query performance",
      "Built backend–frontend integration with reusable Vue.js components and validations",
      "Ensured code quality through unit testing and maintainable architecture",
      "Developed admin dashboards and core platform features",
      "Integrated mail services, Stripe subscriptions, and MinIO for storage and workflows"
    ],
    tech: ["Laravel", "Vue.js", "PostgreSQL", "Stripe", "MinIO"],
    purpose: "Company Project",
    type: "Website",
    is_work: true,
  },
  {
    name: "Photo headshot printing service",
    description: [
      "Designed and developed RESTful APIs for image manipulation, order lifecycle, and user management",
      "Integrated Stripe for payment processing and handled webhooks for event-driven workflows",
      "Automated order fulfillment using ShipStation",
      "Implemented email notifications using SendGrid",
      "Developed admin panel with authentication, dashboard, and order management system",
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB Atlas"],
    purpose: "Company Project",
    type: "Website",
    is_work: true,
  },
  {
    image: bestdeal,
    name: "Bestdeal",
    description: [
      "BestDeal is a Price comparator website used for comparing the e-commerce products.",
    ],
    tech: ["React", "MongoDB", "Tailwind", "Django"],
    purpose: "College Mega Project",
    type: "Website",
  },
  // {
  //   image: defaultImg,
  //   name: "MIARS",
  //   description: "Stands for 'Movie Info and Rating System' is desktop application for movie details.",
  //   tech: ["PostgresSQL", "Netbeans", "Java"],
  //   contributers:"Team",
  //   purpose:"College Project",
  //   type:"Desktop Application",
  // },
  // {
  //   image: uassist,
  //   name: "uAssist",
  //   description: "uAssist is a android application comprising of 5 small day-to-day applications like notepad, todo list, etc.",
  //   tech: ["Android Studio", "Java"],
  //   contributers:"Team",
  //   purpose:"College Project",
  //   type:"Android Application",
  // },
  {
    image: clonetubes,
    name: "CloneTubes",
    description: [
      "CloneTubes is a clone of Youtube application. The data is accessed through RapidAPI.",
    ],
    tech: ["React", "Axios", "Material UI"],
    contributers: "Solo",
    purpose: "Personal Project",
    type: "Website",
  },
  // {
  //   image: mydocs,
  //   name: "MyDocs",
  //   description: "MyDocs is a website application to create, edit, and store documents.",
  //   tech: ["React", "Mongoose", "Socket.IO","Quill text editor"],
  //   contributers:"Solo",
  //   purpose:"Personal Project",
  //   type:"Website",
  // },
];
