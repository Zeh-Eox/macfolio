import type { 
  AboutLocation, 
  BlogPosts, 
  DockApps, 
  Gallery, 
  NavIcons, 
  NavItem, 
  PhotosLinks, 
  ResumeLocation, 
  Socials, 
  TechStack, 
  TrashLocation, 
  WindowConfig, 
  WorkLocation 
} from "@/types";

const navLinks: NavItem[] = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons: NavIcons[] = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  }
];

const dockApps: DockApps[] = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  // {
  //   id: "photos",
  //   name: "Gallery", // was "Photos"
  //   icon: "photos.png",
  //   canOpen: true,
  // },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts: BlogPosts[] = [
  {
    id: 1,
    date: "05/12/2025",
    title: "Deploying a Fullstack Application in a Single Box",
    image: "/images/two-box.png",
    link: "https://medium.com/@arnoldcnv99/deploying-a-fullstack-application-in-a-single-box-how-to-serve-the-frontend-from-the-backend-and-7bf277dd22b3",
  },
  {
    id: 2,
    date: "08/12/2025",
    title: "Why TypeScript Is More Secure Than JavaScript",
    image: "/images/Typescript.webp",
    link: "https://medium.com/@arnoldcnv99/why-typescript-is-more-secure-than-javascript-and-why-most-developers-cant-explain-why-db4620dc9c4d",
  },
  {
    id: 3,
    date: "24/12/2025",
    title: "Process Scheduling: The Invisible Genius Behind Every Modern Computer",
    image: "/images/process.webp",
    link: "https://medium.com/@arnoldcnv99/process-scheduling-the-invisible-genius-behind-every-modern-computer-373e4e53e35b",
  },
  {
    id: 4,
    date: "30/12/2025",
    title: "Why the Linux Command Line Matters (Especially for Beginners)",
    image: "/images/linux-shell.webp",
    link: "https://medium.com/@arnoldcnv99/why-the-linux-command-line-matters-especially-for-beginners-ac104c240363",
  },
];

const techStack: TechStack[] = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Laravel"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Dev Tools",
    items: ["Linux", "Git", "Docker"],
  },
];

const socials: Socials[] = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Zeh-Eox",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://youtu.be/dQw4w9WgXcQ?si=cQBzhyF_4t2LiIT3",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/AConvolbo40654",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/arnold-convolbo",
  },
];

const photosLinks: PhotosLinks[] = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery: Gallery[] = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION: WorkLocation = {
  id: 1,
  type: "work",
  name: "Projects",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "AstroTalk",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "index.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-5",
          description: [
            "AstroTalk is a real-time chat application that allows users to communicate seamlessly.",
            "Built with React for the frontend and Node.js with Socket.io for the backend all in typescript, it offers instant messaging capabilities.",
            "The app features user authentication, chat rooms, and a responsive design for an optimal user experience across devices.",
            "Whether you're looking to connect with friends or collaborate with colleagues, AstroTalk provides a reliable platform for real-time communication.",
          ],
        },
        {
          id: 2,
          name: "AstroTalk",
          icon: "/images/astrotalk/messages.webp",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Zeh-Eox/astrotalk",
          position: "top-10 left-50",
        },
        {
          id: 3,
          name: "AstroTalk1.png",
          icon: "/images/astrotalk/astrotalk.png",
          kind: "file",
          fileType: "img",
          position: "top-10 left-100",
          imageUrl: "/images/astrotalk/astrotalk.png",
        },
        {
          id: 4,
          name: "AstroTalk2.png",
          icon: "/images/astrotalk/astrotalk1.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-5",
          imageUrl: "/images/astrotalk/astrotalk1.png",
        },
        {
          id: 5,
          name: "AstroTalk3.png",
          icon: "/images/astrotalk/astrotalk2.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-50",
          imageUrl: "/images/astrotalk/astrotalk2.png",
        },
      ],
    },
    // ▶ Project 2
    {
      id: 6,
      name: "AetherAI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-50", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "index.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-10 left-5",
          description: [
            "AetherAI is a fullstack AI-powered web application that enables users to generate content, images, and analyze documents effortlessly.",
            "Built with React for the frontend and Node.js for the backend, AetherAI integrates advanced AI models to provide a seamless user experience.",
            "Users can create text content, generate images based on prompts, and upload documents for analysis, making it a versatile tool for various creative and professional needs.",
            "With its intuitive interface and powerful AI capabilities, AetherAI is designed to enhance productivity and creativity in the digital age.",
          ],
        },
        {
          id: 2,
          name: "AetherAI",
          icon: "/images/aether-ai/favicon.webp",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Zeh-Eox/aether-ai",
          position: "top-10 left-50",
        },
        {
          id: 3,
          name: "AetherAI1.png",
          icon: "/images/aether-ai/aether-ai.png",
          kind: "file",
          fileType: "img",
          position: "top-10 left-100",
          imageUrl: "/images/aether-ai/aether-ai.png",
        },
        {
          id: 4,
          name: "AetherAI2.png",
          icon: "/images/aether-ai/aether-ai1.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-5",
          imageUrl: "/images/aether-ai/aether-ai1.png",
        },
        {
          id: 5,
          name: "AetherAI3.png",
          icon: "/images/aether-ai/aether-ai2.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-50",
          imageUrl: "/images/aether-ai/aether-ai2.png",
        },
        {
          id: 6,
          name: "AetherAI4.png",
          icon: "/images/aether-ai/aether-ai3.png",
          kind: "file",
          fileType: "img",
          position: "top-40 left-100",
          imageUrl: "/images/aether-ai/aether-ai3.png",
        }
      ],
    }
  ],
};

const ABOUT_LOCATION: AboutLocation = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/arnold.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-50",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/arnold.jpg",
      description: [
        "Hey! I’m Arnold 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in typescript and React—and I love making things feel smooth, fast, and just a little bit delightful.",
        "Outside of dev work, you'll find me playing video games until 3AM 😅",
      ],
    },
  ],
};

const RESUME_LOCATION: ResumeLocation = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION: TrashLocation = {
  id: 4,
  type: "trash",
  name: "Trash can",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "borring-portfolio.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX: number = 1000;

const WINDOW_CONFIG: WindowConfig = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };