import config from '@rocketseat/eslint-config/react.mjs'

export default [
  ...config,
  { rules: { camelcase: 'off' } },
]
