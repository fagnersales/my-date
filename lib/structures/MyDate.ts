import { Timezone } from '../timezone'

export class MyDate extends Date {
  public timezone: Timezone | null = null

  /** Sets a timezone, needed for using `toTimezone(MyDate, Timezone)` */
  public setTimezone(timezone: Timezone | null): this {
    this.timezone = timezone
    return this
  }
}