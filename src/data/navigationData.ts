export interface DropdownItem {
  label: string
  href: string
}

export interface NavigationItem {
  label: string
  href?: string
  dropdown?: DropdownItem[]
}

export const navigationItems: NavigationItem[] = [
  {
    label: "Company",
    dropdown: [
      { label: "About us", href: "/about" },
      { label: "Industries", href: "/industries" },
      { label: "FAQs", href: "/faqs" }
    ]
  },
  {
    label: "Case Studies",
    href: "/case-studies"
  },
  {
    label: "Services",
    dropdown: [
      { label: "Cloud Services", href: "/services/cloud" },
      { label: "System Integration", href: "/services/system-integration" },
      { label: "Enterprise Software & App Development", href: "/services/enterprise-software" },
      { label: "IT Consulting & Digital Strategy", href: "/services/it-consulting" },
      { label: "Training & Talent Development", href: "/services/training" },
      { label: "Product Design", href: "/services/product-design" }
    ]
  },
  {
    label: "Solutions",
    dropdown: [
      { label: "Solution 1", href: "/solutions/solution-1" },
      { label: "Solution 2", href: "/solutions/solution-2" },
      { label: "Solution 3", href: "/solutions/solution-3" },
      { label: "Solution 4", href: "/solutions/solution-4" },
      { label: "Solution 5", href: "/solutions/solution-5" },
      { label: "Solution 6", href: "/solutions/solution-6" }
    ]
  },
  {
    label: "Blog",
    href: "/blog"
  },
  {
    label: "Contact Us",
    href: "/contact"
  }
]
