import { type Config } from 'tailwindcss'

import typography from '@tailwindcss/typography'

export default {
  content: [
    './src/**/*.{css,vue}',
  ],
  plugins: [
    typography(),
  ],
  future: {
    disableColorOpacityUtilitiesByDefault: true,
    respectDefaultRingColorOpacity: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
} as Config
