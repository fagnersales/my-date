export class MyDate extends Date {
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
}