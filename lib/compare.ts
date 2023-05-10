import { MyDate } from './structures/MyDate'

export const isBefore = (date: MyDate, toCompare: MyDate) => {
  return date.getTime() < toCompare.getTime()
}

export const isAfter = (date: MyDate, toCompare: MyDate) => {
  return date.getTime() > toCompare.getTime()
}

export const isBetween = (date: MyDate, toCompareA: MyDate, toCompareB: MyDate) => {
  return (
    (isAfter(date, toCompareA) && isBefore(date, toCompareB)) ||
    (isBefore(date, toCompareA) && isAfter(date, toCompareB))
  )
}

export const difference = (date: MyDate, toCompare: MyDate) => {
  return Math.abs(date.getTime() - toCompare.getTime())
}
