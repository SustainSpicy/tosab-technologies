export interface Statistic {
  value: string
  label: string
  suffix?: string
}

export const statistics: Statistic[] = [
  {
    value: "100",
    label: "Service Delivery Rate",
    suffix: "%"
  },
  {
    value: "1200",
    label: "Completed Projects",
    suffix: "+"
  },
  {
    value: "99",
    label: "Client Satisfaction Rate",
    suffix: "%"
  }
]
