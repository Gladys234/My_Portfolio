import staysafe from "../assets/staysafe.svg";
import passwordstrengthchecker from "../assets/passwordstrengthchecker.png";
import ipinformationfinder from "../assets/ipinformationfinder.png";
import cybersecurityportfolio from "../assets/cybersecurityportfolio.png";
import cybersecuritydashboard from "../assets/cybersecuritydashboard.png";


const projects = [
  {
    id: 1,
    title: "A Password Strength Checker",
    image: passwordstrengthchecker,
    description:
      "A webpage to check the strenght of your passwords using entropy calculation.",
    tech: ["React", "Tailwind CSS", "Vite"],
    link: "https://password-strength-checker-olive.vercel.app",
    github: "https://github.com/Gladys234/Password_Strength_Checker",
  },
  {
    id: 2,
    title: "Ip Info Finder",
    image: ipinformationfinder,
    description:
      "A web app that provides detailed information about any IP address using the OpenAI API.",
    tech: ["Python", "Tailwind CSS", "OpenAI API"],
    link: "https://ip-info-finder-pi.vercel.app/",
    github: "https://github.com/Gladys234/ip-info-finder",
  },
  {
    id: 3,
    title: "My Cyber Security Dashboard",
    image: cybersecuritydashboard,
    description:
      "A cyber security dashboard that provides real-time data and insights on various cyber threats and vulnerabilities.",
    tech: ["React", "Rapid API", "Tailwind CSS"],
    link: "https://cyber-security-dashboard-9vtw.vercel.app/",
    github: "https://github.com/Gladys234/Cyber_Security_Dashboard",
  },
  {
    id: 4,
    title: "My Cybersecurity Portfolio",
    image: cybersecurityportfolio,
    description:
      "A portfolio website showcasing my skills, projects, and experience in cybersecurity.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "Vite", "lucide-icons"],
    link: "https://my-portfolio-beta-sandy-91.vercel.app",
    github: "https://github.com/Gladys234/My_Portfolio.git",
  },
];

export default projects;