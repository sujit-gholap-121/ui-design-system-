import { createPreset } from '@my-ds/tailwind-config'
import { colors, radius } from '@my-ds/tokens'

export default {
  presets: [createPreset({ colors, radius })],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
}
