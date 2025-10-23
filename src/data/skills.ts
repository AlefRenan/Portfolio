import { FaAws, FaGitAlt, FaDocker } from "react-icons/fa";
import {
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiNestjs,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

import { TbBrandReactNative } from "react-icons/tb";

const logosRight = [
  {
    id: "node",
    logo: SiNodedotjs,
    name: "Node.js",
    color: "#339933",
  },
  {
    id: "typescript",
    logo: SiTypescript,
    name: "TypeScript",
    color: "#3178C6",
  },
  {
    id: "javascript",
    logo: SiJavascript,
    name: "JavaScript",
    color: "#F7DF1E",
  },
  {
    id: "git",
    logo: FaGitAlt,
    name: "Git",
    color: "#F05033",
  },
  {
    id: "nestjs",
    logo: SiNestjs,
    name: "NestJS",
    color: "#E0234E",
  },

  {
    id: "react",
    logo: SiReact,
    name: "React",
    color: "#61DAFB",
  },
  {
    id: "reactNative",
    logo: TbBrandReactNative,
    name: "React Native",
    color: "#61DAFB",
  },
  {
    id: "nextjs",
    logo: SiNextdotjs,
    name: "Next.js",
    color: "#6b7280",
  },
  {
    id: "tailwindcss",
    logo: SiTailwindcss,
    name: "Tailwind CSS",
    color: "#06B6D4",
  },
  {
    id: "mongodb",
    logo: SiMongodb,
    name: "MongoDB",
    color: "#47A248",
  },

  {
    id: "aws",
    logo: FaAws,
    name: "AWS",
    color: "#FF9900",
  },
  {
    id: "docker",
    logo: FaDocker,
    name: "Docker",
    color: "#2496ED",
  },
];

export { logosRight };
