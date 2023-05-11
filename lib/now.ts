import { MyDate } from './structures/MyDate'
import { Timezone, timezones } from './timezone'

export function now(timezone?: Timezone): MyDate {
  const date = new MyDate()

  if (timezone) {
    date.addHours(timezones[timezone])
    date.setTimezone(timezone)
  }

  return date
}
