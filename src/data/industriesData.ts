export interface Industry {
  title: string
  description: string
  image: string
  position: 'left' | 'right'
}

export const industries: Industry[] = [
  {
    title: "Manufacturing & Automation",
    description: "At Tosab Technologies, we deliver tailored IT and cloud solutions across key industries. From finance and logistics to education and retail, we help businesses in emerging markets leverage technology to solve real-world challenges and scale with confidence.",
    image: "/robot-arm.png",
    position: "right"
  },
  {
    title: "Financial Services",
    description: "We help fintech and financial institutions build secure, scalable digital platforms, from mobile wallets to core banking integrations, powered by reliable cloud infrastructure.",
    image: "/financial-house.png",
    position: "left"
  },
  {
    title: "Logistics & On-Demand Services",
    description: "Our custom software and cloud systems streamline dispatch, order management, and real-time tracking for logistics, delivery, and mobility businesses.",
    image: "/robot-car.png",
    position: "right"
  },
  {
    title: "Retail & eCommerce",
    description: "From inventory systems to scalable online storefronts, we power digital transformation for retailers and B2C platforms across emerging markets.",
    image: "/basket.png",
    position: "left"
  },
  {
    title: "Education & eLearning",
    description: "We build virtual learning platforms, course delivery tools, and scalable infrastructure for institutions and training providers embracing remote education.",
    image: "/education-avatar.png",
    position: "right"
  },
  {
    title: "SMEs & Enterprise",
    description: "We provide full-stack IT support, cloud migration, and business process automation for SMEs and growing enterprises ready to modernize their operations.",
    image: "/chart.png",
    position: "left"
  },
  {
    title: "Public Sector & NGOs",
    description: "We partner with government bodies and development organizations to deliver secure digital tools, data-driven systems, and cloud-first infrastructure for impact at scale.",
    image: "/government-house.png",
    position: "right"
  }
]
