import { createPreset } from '@my-ds/tailwind-config'
import { colors, radius } from '@my-ds/tokens'

export default {
  presets: [createPreset({ colors, radius })],
  content: ['./src/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx}'],
}
