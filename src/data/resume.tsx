import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jaydeep",
  initials: "JW",
  url: "https://jaydeep-portfolio-kappa.vercel.app/",
  location: "Maharashtra,India",
  locationLink: "https://www.google.com/maps/place/nashik",
  description:
    "Full Stack Developer & UI/UX Designer.\nI love creating projects that blend design and technology.",
  summary:
    "I’m a third-year B.Tech student in Computer Science at MET Institute of Technology, currently exploring opportunities in web development, generative AI, and design. I love building projects that combine creativity and technology.",
  avatarUrl: "/me1.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C",
    "Postgres",
    "Docker",
    "GenAI",
    "Figma",
    "C++",
    "Prisma",
    "Node.js",
    "Tailwind CSS",
    "Shadcn UI",
    "GenAi",
    "MongoDB",
    "JavaScript",
    "AWS[EC2]",
    "Hono",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jaydeepwaghaskar2005@gmail.com",
    tel: "+917972185184",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/jaydxxp",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jaydeep-wagaskar-6a3049280/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/jayydeeppp",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jaydeepwaghaskar2005@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Acrylic Solutions",
      href: "https://www.acrylicsolutions.in/",
      badges: [],
      location: "Remote",
      title: "Software Developer Intern",
      logoUrl:
        "https://www.acrylicsolutions.in/assets/svg/logos/acryliclogo.png",
      start: "March 2025",
      end: "July 2025",
      description:
        "Worked on a government project focused on digitalizing rural area form submissions for obtaining certificates and licenses. Integrated the system with official government APIs and services. Implemented the backend using Node.js, Express.js, MongoDB, and Socket.io, and built the frontend with React and JavaScript. Designed and developed an intuitive and accessible user interface for seamless form submission and tracking.",
    },
  ],
  education: [
    {
      school: "MET Institute of Technology",
      href: "https://metbhujbalknowledgecity.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Design",
      logoUrl: "/clg.png",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Travelio",
      href: "https://travelio-psi.vercel.app",
      dates: "Oct 2025 - Present",
      active: true,
      description:
        "Based of my learning of Generative AI made a AI Travel Planner which plan day-to-day itinerary for you using AI",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Node.js",
        "TailwindCSS",
        "Express.js",
        "Shadcn UI",
        "Gemini API",
        "Unsplash API",
        "WeatherBit API",
      ],
      links: [
        {
          type: "Website",
          href: "https://travelio-psi.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jaydxxp/Travelio",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/Travelio.png",
      video: "",
    },
    {
      title: "Expensio",
      href: "https://expensio-rust.vercel.app",
      dates: "Oct 2025 - Present",
      active: true,
      description:
        "A modern MERN Stack expense tracking platform with a clean dark UI, insightful analytics, and smart microservices including an AI Assistant, Currency Converter, and Calculator.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "TailwindCSS",
        "JWT",
        "Chart.js",
        "Render",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://expensio-rust.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jaydxxp/expensio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Expensio.jpg"
    },

    {
      title: "ConioGPT",
      href: "https://conio-gpt.vercel.app",
      dates: "Sept 2025 - Present",
      active: true,
      description:
        "This Project is Basically a Social Media Assistant for Creators to get trendy and real time treding captions,song and so much more.",
      technologies: [
        "Next.js",
        "Typescript",
        "Mongodb",
        "Nodejs",
        "TailwindCSS",
        "Shadcn UI",
        "Aceternity",
        "express.js",
        "vercel",
        "tavily",
        "groq"
      ],
      links: [
        {
          type: "Website",
          href: "https://conio-gpt.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jaydxxp/Coniogpt",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ConioGPT.png",

    },
    {
      title: "Medium Clone",
      href: "https://medium-clone-olive-chi.vercel.app/",
      dates: "August 2025 - September 2025",
      active: true,
      description:
        "This is Medium Blog Clone Website made while learning Full Stack Development",
      technologies: [
        "Hono",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Cloudflare Workers",
        "Vite",
        "React"
      ],
      links: [
        {
          type: "Website",
          href: "https://medium-clone-olive-chi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/jaydxxp/medium_clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Medium.png"
    },
  ],
  
} as const;
