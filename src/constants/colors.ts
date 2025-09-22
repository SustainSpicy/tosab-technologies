// Brand color palette
export const COLORS = {
  // Primary brand blue
  PRIMARY_BLUE: '#2E75B5',
  PRIMARY_BLUE_LIGHT: '#4A8BC2',
  PRIMARY_BLUE_DARK: '#1E5A8A',
  
  // Accent gold/yellow
  ACCENT_GOLD: '#E3AF59',
  ACCENT_GOLD_LIGHT: '#E8C074',
  ACCENT_GOLD_DARK: '#D49A3E',
  
  // Neutral colors
  DARK_GRAY: '#454545',
  WHITE: '#FFFFFF',
  
  // Utility colors (derived from brand colors)
  TEXT_LIGHT: '#F8FAFC', // Very light for text on dark backgrounds
  TEXT_MUTED: '#94A3B8', // Muted text
  BACKGROUND_OVERLAY: 'rgba(46, 117, 181, 0.1)', // Primary blue with opacity
} as const

// CSS custom properties for Tailwind
export const CSS_VARIABLES = `
  :root {
    --color-primary-blue: ${COLORS.PRIMARY_BLUE};
    --color-primary-blue-light: ${COLORS.PRIMARY_BLUE_LIGHT};
    --color-primary-blue-dark: ${COLORS.PRIMARY_BLUE_DARK};
    --color-accent-gold: ${COLORS.ACCENT_GOLD};
    --color-accent-gold-light: ${COLORS.ACCENT_GOLD_LIGHT};
    --color-accent-gold-dark: ${COLORS.ACCENT_GOLD_DARK};
    --color-dark-gray: ${COLORS.DARK_GRAY};
    --color-white: ${COLORS.WHITE};
  }
`
