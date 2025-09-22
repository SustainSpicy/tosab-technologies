export interface CaseStudy {
  id: string
  category: string
  title: string
  overview: {
    timeline: string
    teamSize: string
    projectManagement: string
    developmentMethodology: string
  }
  techStack: {
    frontend?: string
    backend?: string
    database?: string
    cloud?: string
    devops?: string
    monitoring?: string
    security?: string
    microservices?: string
  }
  images: string[]
  backgroundColor: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: "health-care",
    category: "Health Care",
    title: "Digital Transformation at Health Specialist Verify (HSPV)",
    overview: {
      timeline: "8 months",
      teamSize: "15 members",
      projectManagement: "Agile SAFe (Scaled Agile Framework)",
      developmentMethodology: "Scrum (2-week sprints)"
    },
    techStack: {
      frontend: "React.js, TypeScript, Tailwind CSS",
      backend: "Node.js, NestJS",
      database: "MongoDB Atlas",
      cloud: "AWS (ECS, Lambda, S3)",
      devops: "GitHub Actions, Terraform, Docker",
      monitoring: "DataDog, ELK Stack",
      security: "Auth0, AWS WAF"
    },
    images: ["/case-study/image1.png", "/case-study/image2.png"],
    backgroundColor: "#E3F2FD"
  },
  {
    id: "fintech-banking",
    category: "Fintech/Banking",
    title: "Digital Social & Payment App for DizuNova",
    overview: {
      timeline: "18 months",
      teamSize: "25 members (3 Scrum teams)",
      projectManagement: "Agile SAFe",
      developmentMethodology: "Scrum (2-week sprints)"
    },
    techStack: {
      frontend: "Next.js 14, Redux Toolkit",
      backend: "Java (Spring Boot 3)",
      database: "Oracle Cloud, Redis Enterprise",
      cloud: "Multi-cloud (AWS + Azure)",
      microservices: "Kubernetes, Service Mesh (Istio)",
      devops: "ArgoCD, Jenkins",
      security: "Vault by HashiCorp, Snyk"
    },
    images: ["/case-study/image3.png"],
    backgroundColor: "#E8F5E8"
  },
  {
    id: "logistics",
    category: "Logistics",
    title: "Supply Chain Optimization for DepoConnect",
    overview: {
      timeline: "10 months",
      teamSize: "12 members",
      projectManagement: "Agile Scrum",
      developmentMethodology: "Kanban"
    },
    techStack: {
      frontend: "Angular 17",
      backend: "Python (Django), Node.js",
      database: "PostgreSQL, Redis",
      cloud: "Google Cloud Platform",
      devops: "GitLab CI/CD, Docker, Kubernetes",
      monitoring: "Prometheus, Grafana",
      security: "OAuth 2.0, JWT"
    },
    images: ["/case-study/image4.png"],
    backgroundColor: "#FFF3E0"
  }
]
