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
    href: "/services"
  },
  {
    label: "Solutions",
    href: "/solutions"
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
