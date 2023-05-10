export const timezones = {
  'America/Sao_Paulo': -3,
  'America/New_York': -4,
  'UTC': 0,
} as const

export type Timezone = keyof typeof timezones