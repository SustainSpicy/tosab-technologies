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
    images: ["/case-study/image1.png","/case-study/image3.png", "/case-study/image2.png"],
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
    images: ["/case-study/image4.png"],
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
    images: ["/case-study/image5.png"],
    backgroundColor: "#FFF3E0"
  },
  // {
  //   id: "solutions",
  //   category: "solutions",
  //   title: "Cloud Services & Infrastructure",
  //   overview: {
  //     timeline: "10 months",
  //     teamSize: "12 members",
  //     projectManagement: "Agile Scrum",
  //     developmentMethodology: "Kanban"
  //   },
  //   techStack: {
  //     frontend: "Angular 17",
  //     backend: "Python (Django), Node.js",
  //     database: "PostgreSQL, Redis",
  //     cloud: "Google Cloud Platform",
  //     devops: "GitLab CI/CD, Docker, Kubernetes",
  //     monitoring: "Prometheus, Grafana",
  //     security: "OAuth 2.0, JWT"
  //   },
  //   images: ["/case-study/image4.png"],
  //   backgroundColor: "#FFF3E0"
  // },
  // Solutions

  // 1. Cloud Services & Infrastructure
  // Technologies & Platforms:
  // Multi-cloud expertise (AWS, Azure, GCP)
  // Kubernetes & Docker
  // Terraform, Ansible, Pulumi
  // AWS EKS, Azure AKS, GKE
  // Service Mesh (Istio, Linkerd)
  
  // 2. Digital Transformation
  // Modern Tech Stack:
  // Frontend: React, Vue.js, Next.js, Angular
  // Backend: Node.js, Python, Go, Java
  // Mobile: React Native, Flutter
  // API: GraphQL, gRPC, REST
  // Low-Code: OutSystems, Power Platform
  
  // 3. Software Development
  // Development Stack:
  // Modern Frameworks:
  // Frontend: Next.js, Nuxt.js, SvelteKit
  // Backend: NestJS, FastAPI, Spring Boot
  // Testing: Jest, Cypress, Playwright
  
  // UI/UX: Figma, Adobe XD
  // Performance: Lighthouse, WebPageTest4. DevOps & Automation
  
  // Tools & Platforms:
  // CI/CD: GitHub Actions, GitLab CI, ArgoCD
  // Infrastructure: Terraform, Pulumi, CloudFormation
  // Monitoring: Prometheus, Grafana, DataDog
  // Log Management: ELK Stack, Loki
  // Container Orchestration: Kubernetes, Docker Swarm
  
  // 5. Data & Analytics
  // Technologies:
  // Big Data: Apache Spark, Hadoop
  // Data Warehousing: Snowflake, BigQuery
  // ML/AI: TensorFlow, PyTorch
  // Stream Processing: Apache Kafka, Apache Flink
  // Visualization: Power BI, Tableau
  
  // 6. Cybersecurity
  // Security Stack:
  // IAM: Okta, Keycloak
  // SIEM: Splunk, IBM QRadar
  // EDR: CrowdStrike, SentinelOne
  // Cloud Security: AWS SecurityHub, Azure Sentinel
  // Compliance: AWS Config, Azure Policy
  
  
]
