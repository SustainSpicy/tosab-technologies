export interface Project {
  title: string
  image: string
  description?: string
  technologies?: string[]
  category?: string
}

export const projects: Project[] = [
  {
    title: "DepoConnect",
    image: "/depo-connect.png",
    description: "A comprehensive depot management and connection platform designed to streamline operations and enhance connectivity.",
    category: "Web Application",
    technologies: ["React", "Node.js", "MongoDB", "WebSocket"]
  },
  {
    title: "Dcide App Development",
    image: "/dcide-app.png", 
    description: "A decision-making application that helps users make informed choices through data-driven insights and analytics.",
    category: "Mobile Application",
    technologies: ["React Native", "Firebase", "Machine Learning", "Analytics"]
  },
  {
    title: "DizuNova App Development",
    image: "/dizu-app.png",
    description: "An innovative application focused on delivering cutting-edge solutions with modern user experience and functionality.",
    category: "Mobile Application", 
    technologies: ["Flutter", "Cloud Services", "AI Integration", "Real-time Data"]
  }
]
