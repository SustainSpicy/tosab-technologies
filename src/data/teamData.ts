export interface TeamMember {
  name: string
  title: string
  company: string
  image: string
  bio?: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Tolulope Oyeleke",
    title: "Founder, Chief Executive Officer",
    company: "Tosab Technologies",
    image: "/team/tolulope.png",
    bio: "Visionary leader driving innovation in Africa's tech landscape"
  },
  {
    name: "James Pham",
    title: "Chief Technology Officer (CTO)",
    company: "Tosab Technologies", 
    image: "/team/james.png",
    bio: "Technology strategist with expertise in scalable solutions"
  },
  {
    name: "Isreal Timilehin Oyeleke",
    title: "Technical Pre-sales Consultant/Solution Architect",
    company: "Tosab Technologies",
    image: "/team/timilehin.png",
    bio: "Expert in designing and implementing enterprise solutions"
  },
  {
    name: "Ahmed Ibrahim Danjuma",
    title: "Product Design Intern",
    company: "Tosab Technologies",
    image: "/team/ahmed.png",
    bio: "Creative designer focused on user-centered product experiences"
  },
  {
    name: "Position Available",
    title: "Human Resources",
    company: "Tosab Technologies",
    image: "/team/none.png",
    bio: "Join our team and help shape the future of technology in Africa"
  },
  {
    name: "Position Available", 
    title: "Chief Financial Officer (CFO)",
    company: "Tosab Technologies",
    image: "/team/none.png",
    bio: "Lead our financial strategy and drive sustainable growth"
  }
]
