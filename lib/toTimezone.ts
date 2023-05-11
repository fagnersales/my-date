import { MyDate } from './structures/MyDate'
import { Timezone, timezones } from './timezone'

export const toTimezone = (date: MyDate, timezone: Timezone): MyDate => {
  const newTimezoneOffset = timezones[timezone]
  const actualTimezoneOffset = date.timezone ? timezones[date.timezone] : 0

  date.addHours(actualTimezoneOffset * -1)
  date.addHours(newTimezoneOffset)
  date.setTimezone(timezone)

  return date
}