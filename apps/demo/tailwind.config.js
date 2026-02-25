import { createPreset } from '@my-ds/tailwind-config'
import { colors, radius } from '@my-ds/tokens'

export default {
  presets: [createPreset({ colors, radius })],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../packages/button/src/**/*.{ts,tsx}',
    '../../packages/badge/src/**/*.{ts,tsx}',
    '../../packages/card/src/**/*.{ts,tsx}',
    '../../packages/input/src/**/*.{ts,tsx}',
    '../../packages/avatar/src/**/*.{ts,tsx}',
  ],
}
