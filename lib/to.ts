import { MyDate } from '../lib/structures/MyDate'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const to = (date: MyDate | Date, toDate: MyDate | Date): string => {
  return dayjs(date).to(toDate)
}