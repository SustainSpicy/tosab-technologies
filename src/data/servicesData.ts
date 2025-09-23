export interface Service {
  title: string
  subtitle?: string
  icon: string
  description?: string
}

export const services: Service[] = [
  {
    title: "Cloud Services",
    icon: "/cloud-service.png",
    // description: "Scalable cloud infrastructure solutions for modern businesses"
  },
  {
    title: "System Integration",
    subtitle: "& IT Infrastructure",
    icon: "/system-integration.png",
    // description: "Seamless integration of systems and robust IT infrastructure"
  },
  {
    title: "Enterprise Software",
    subtitle: "& App Development",
    icon: "/app-development.png",
    // description: "Custom software solutions and mobile applications"
  },
  {
    title: "IT Consulting",
    subtitle: "& Digital Transformation",
    icon: "/consulting.png",
    // description: "Strategic guidance for your digital transformation journey"
  },
  {
    title: "Talent & Training",
    subtitle: "Development",
    icon: "/talent-development.png",
    // description: "Professional development and training programs"
  },
  {
    title: "Product Design",
    icon: "/product-design.png",
    // description: "User-centered design and product development"
  }
]
