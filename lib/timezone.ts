export const timezones = {
  'America/Sao_Paulo': -3,
  'America/New_York': -4,
} as const

export type Timezone = keyof typeof timezones