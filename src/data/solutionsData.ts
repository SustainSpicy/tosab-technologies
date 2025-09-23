export interface Solution {
  id: string
  title: string
  description: string
}

export interface CoreSolution {
  id: string
  title: string
  description: string
}

export const coreSolutions: CoreSolution[] = [
  {
    id: "cloud-infrastructure",
    title: "Cloud & Infrastructure Solutions",
    description: "Design, deploy, and manage secure cloud environments using platforms like Huawei Cloud and AWS. We help you migrate safely, reduce IT costs, and build scalable infrastructure for long-term growth."
  },
  {
    id: "devops-automation", 
    title: "DevOps & Automation",
    description: "Boost delivery speed and reduce downtime with CI/CD pipelines, container orchestration, infrastructure as code, and process automation. Our DevOps solutions bring stability and efficiency to your operations."
  },
  {
    id: "custom-software",
    title: "Custom Software Development", 
    description: "We build secure, scalable web and mobile applications tailored to your business needs whether it's an internal system or a customer facing product. Agile development, rapid delivery."
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Product Design",
    description: "From research to prototyping, we craft intuitive digital products that prioritize user experience and business results. Great design is the foundation of great software and we design with purpose."
  },
  {
    id: "system-integration",
    title: "System Integration & IT Consulting",
    description: "We help businesses modernize legacy systems, connect siloed platforms, and implement reliable IT infrastructure. Our consulting team offers strategic insights and hands-on execution support."
  }
]

export const industries: string[] = [
  "fintech", "logistics", "eCommerce", "education", "energy", "public services"
]

export const expectations: string[] = [
  "Faster time-to-market for new products",
  "Reduced operational overhead through automation", 
  "Seamless migration to scalable cloud environments",
  "Better customer experience through intuitive product design",
  "End-to-end strategy for digital transformation"
]
