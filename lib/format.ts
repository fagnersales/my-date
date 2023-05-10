import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

export const format = (date: Date, output: string): string => {
  return dayjs(date).format(output)
}