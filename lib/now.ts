import { addHours } from './add'
import { MyDate } from './structures/MyDate'
import { Timezone, timezones } from './timezone'

export function now(timezone?: Timezone): MyDate {
  const date = new MyDate()

  if (timezone) {
    addHours(date, timezones[timezone])
    date.setTimezone(timezone)
  }

  return date
}
