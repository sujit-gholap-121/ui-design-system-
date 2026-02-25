export type ColorTokens = {
  primary: string
  'primary-foreground': string
  secondary: string
  'secondary-foreground': string
  destructive: string
  'destructive-foreground': string
  accent: string
  'accent-foreground': string
  muted: string
  'muted-foreground': string
  card: string
  'card-foreground': string
  background: string
  foreground: string
  border: string
  input: string
  ring: string
}

export type RadiusTokens = {
  DEFAULT: string
  sm: string
  md: string
  lg: string
}

export const colors: ColorTokens = {
  primary: 'pink',
  'primary-foreground': '#f8fafc',
  secondary: 'red',
  'secondary-foreground': '#1e293b',
  destructive: 'black',
  'destructive-foreground': '#f8fafc',
  accent: '#f1f5f9',
  'accent-foreground': '#1e293b',
  muted: '#f1f5f9',
  'muted-foreground': '#64748b',
  card: '#ffffff',
  'card-foreground': '#0f172a',
  background: '#ffffff',
  foreground: '#0f172a',
  border: '#e2e8f0',
  input: '#e2e8f0',
  ring: '#2563eb',
}

export const radius: RadiusTokens = {
  DEFAULT: '0.5rem',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '1rem',
}
