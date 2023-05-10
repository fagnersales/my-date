import { MyDate } from '../lib/structures/MyDate'
import { now } from './now'
import { Timezone } from './timezone'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)

const formats = [
  'M/D/YYYY [at] h:m a',
  'M/D/YYYY [at] hh:m a',
  'M/D/YYYY [at] h:mm a',
  'M/D/YYYY [at] hh:mm a',

  'MM/D/YYYY [at] h:m a',
  'MM/D/YYYY [at] hh:m a',
  'MM/D/YYYY [at] h:mm a',
  'MM/D/YYYY [at] hh:mm a',

  'M/DD/YYYY [at] h:m a',
  'M/DD/YYYY [at] hh:m a',
  'M/DD/YYYY [at] h:mm a',
  'M/DD/YYYY [at] hh:mm a',

  'MM/DD/YYYY [at] h:m a',
  'MM/DD/YYYY [at] hh:m a',
  'MM/DD/YYYY [at] h:mm a',
  'MM/DD/YYYY [at] hh:mm a',
]

export const fromString = (input: string): MyDate | null => {
  const date = dayjs(input, formats, true)

  if (date.isValid()) return new MyDate(date.toDate())

  return null
}

/**
 * replaces (`today at` | `tomorrow at`) to relative time based on the timezone
 */
export const fromRelativeString = (input: string, timezone: Timezone) => {
  if (input.startsWith('today at')) {
    const today = now(timezone)
    const newInput = input.replace('today at', `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()} at`)

    return fromString(newInput)
  }

  if (input.startsWith('tomorrow at')) {
    const today = now(timezone).addDays(1)
    const newInput = input.replace('tomorrow at', `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()} at`)

    return fromString(newInput)
  }

  const today = now(timezone)
  const newInput = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()} at ${input}`

  return fromString(newInput)
}