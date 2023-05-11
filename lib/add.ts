import { MyDate } from './structures/MyDate'

export const addMinutes = (date: MyDate, amount: number): MyDate => {
  return new MyDate(date.setMinutes(date.getMinutes() + amount))
}

export const addHours = (date: MyDate, amount: number): MyDate => {
  return new MyDate(date.setHours(date.getHours() + amount))
}

export const addDays = (date: MyDate, amount: number): MyDate => {
  return new MyDate(date.setDate(date.getDate() + amount))
}