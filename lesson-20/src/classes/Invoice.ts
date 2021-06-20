import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  // if we don't have this, we will get an error
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
