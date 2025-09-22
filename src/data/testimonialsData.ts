export interface Testimonial {
  id: string
  quote: string
  author: string
  position: string
  company: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "chidi-okafor",
    quote: "Working with Tosab Technologies transformed how we operate. They built a secure, cloud-based system that streamlined our logistics workflow and reduced downtime significantly. Their team was responsive, knowledgeable, and genuinely invested in our success. We consider them a long-term partner in our digital journey.",
    author: "Chidi Okafor",
    position: "Operations Lead",
    company: "SwiftGo Logistics",
    avatar: "/testimonials/chidi-okafor.png"
  },
  {
    id: "amara-johnson",
    quote: "The mobile application Tosab Technologies developed for us exceeded our expectations. The user experience is intuitive, the performance is outstanding, and their ongoing support has been exceptional. They truly understand modern business needs and deliver solutions that drive results.",
    author: "Amara Johnson",
    position: "CEO",
    company: "TechFlow Solutions",
    avatar: "/testimonials/chidi-okafor.png"
  },
  {
    id: "ibrahim-hassan",
    quote: "Our digital transformation journey with Tosab Technologies has been remarkable. They migrated our entire infrastructure to the cloud seamlessly, implemented robust security measures, and provided comprehensive training to our team. The efficiency gains have been substantial.",
    author: "Ibrahim Hassan",
    position: "IT Director",
    company: "Horizon Enterprises",
    avatar: "/testimonials/chidi-okafor.png"
  },
  {
    id: "fatima-adebayo",
    quote: "Tosab Technologies doesn't just deliver projects; they deliver partnerships. Their consulting services helped us identify key areas for improvement, and their custom software solutions have automated processes we never thought possible. Highly recommended for any serious business.",
    author: "Fatima Adebayo",
    position: "Managing Director",
    company: "Prime Innovations",
    avatar: "/testimonials/chidi-okafor.png"
  }
]
