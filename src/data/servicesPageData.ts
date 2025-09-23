export interface DetailedService {
  id: string
  title: string
  icon: string
  description: string
  features: string[]
  benefits?: string[]
  technologies?: string[]
}

export const detailedServices: DetailedService[] = [
  {
    id: "cloud-services",
    title: "Cloud Services",
    icon: "/cloud.png",
    description: "Cloud Architecture & Infrastructure (Huawei, AWS, others)",
    features: [
      "Cloud Migration & Optimization",
      "Managed Cloud & Support Services", 
      "Backup, Recovery & Disaster Planning"
    ],
    technologies: ["AWS", "Azure", "Huawei Cloud", "Google Cloud", "Multi-cloud Solutions"],
    benefits: ["Scalable infrastructure", "Cost optimization", "24/7 monitoring", "Disaster recovery"]
  },
  {
    id: "system-integration",
    title: "System Integration & IT Infrastructure",
    icon: "/system-integration.png", 
    description: "Network Design & Enterprise IT Setup",
    features: [
      "Hardware-Software Integration",
      "IoT & Smart Device Integration",
      "Data Center Support & Optimization",
      "Enterprise Security Implementation"
    ],
    technologies: ["Kubernetes", "Docker", "Microservices", "API Gateway", "Load Balancers"],
    benefits: ["Seamless connectivity", "Enhanced security", "Improved performance", "Reduced downtime"]
  },
  {
    id: "enterprise-software",
    title: "Enterprise Software & App Development", 
    icon: "/enterprise-software.png",
    description: "Enterprise Web Apps & SaaS Solutions",
    features: [
      "Custom ERP, CRM, and Workflow Systems",
      "Mobile App Development (Android/iOS, Flutter, React Native)",
      "API Integrations & Third-Party System Sync",
      "DevOps + CI/CD Implementation"
    ],
    technologies: ["React", "Node.js", "Python", "Java", "Flutter", "React Native", "PostgreSQL", "MongoDB"],
    benefits: ["Custom solutions", "Scalable architecture", "Modern UX/UI", "Cross-platform compatibility"]
  },
  {
    id: "it-consulting",
    title: "IT Consulting & Digital Transformation",
    icon: "/it-consulting.png",
    description: "Provide high-level guidance and transformation planning",
    features: [
      "Digital Strategy Consulting",
      "IT Audit & Infrastructure Assessment", 
      "Cloud Readiness Evaluation",
      "Software Modernization Advisory",
      "IT Outsourcing & Virtual CTO Services"
    ],
    technologies: ["Strategic Planning", "Technology Assessment", "Digital Roadmaps", "Agile Methodologies"],
    benefits: ["Strategic direction", "Risk mitigation", "Technology optimization", "Digital transformation"]
  },
  {
    id: "training-talent",
    title: "Training & Talent Development",
    icon: "/training.png", 
    description: "Cloud Architecture & Infrastructure (Huawei, AWS, others)",
    features: [
      "Cloud Migration & Optimization",
      "Managed Cloud & Support Services",
      "Backup, Recovery & Disaster Planning",
      "Product Design Training Course"
    ],
    technologies: ["AWS Certification", "Cloud Architecture", "DevOps Tools", "Modern Development Practices"],
    benefits: ["Skilled workforce", "Industry certifications", "Practical experience", "Career advancement"]
  },
  {
    id: "product-design",
    title: "Product Design",
    icon: "/pen.png",
    description: "We design intuitive, user-centered digital experiences that enhance usability, engagement, and business impact.",
    features: [
      "From wireframes to final interfaces, our team crafts clean, scalable designs tailored to each platform and audience."
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Sketch", "InVision", "User Research Tools"],
    benefits: ["Enhanced user experience", "Increased engagement", "Brand consistency", "Market differentiation"]
  }
]
