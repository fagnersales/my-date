import { addHours } from './add'
import { MyDate } from './structures/MyDate'
import { Timezone, timezones } from './timezone'

export const toTimezone = (date: MyDate, timezone: Timezone): MyDate => {
  const newTimezoneOffset = timezones[timezone]
  const actualTimezoneOffset = date.timezone ? timezones[date.timezone] : 0

  addHours(date, actualTimezoneOffset * -1)
  addHours(date, newTimezoneOffset)

  date.setTimezone(timezone)

  return date
}