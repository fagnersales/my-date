import { Timezone } from '../timezone'

export class MyDate extends Date {
  public timezone: Timezone | null = null

  public addMinutes(amount: number): this {
    this.setMinutes(this.getMinutes() + amount)
    return this
  }

  public addHours(amount: number): this {
    this.setHours(this.getHours() + amount)
    return this
  }

  public addDays(amount: number): this {
    this.setDate(this.getDate() + amount)
    return this
  }

  /** Sets a timezone, needed for using `toTimezone(MyDate, Timezone)` */
  public setTimezone(timezone: Timezone | null): this {
    this.timezone = timezone
    return this
  }
}