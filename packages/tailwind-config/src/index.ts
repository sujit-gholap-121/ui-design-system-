import { type Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import { colors as defaultColors, radius as defaultRadius, type ColorTokens, type RadiusTokens } from '@my-ds/tokens'

export function createPreset(tokens: { colors: ColorTokens; radius?: RadiusTokens }): Config {
  return {
    content: [],
    theme: {
      extend: {
        colors: tokens.colors,
        borderRadius: tokens.radius ?? defaultRadius,
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
    },
    plugins: [animate],
  }
}

export default createPreset({ colors: defaultColors, radius: defaultRadius })
