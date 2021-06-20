export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // if we don't have this, we will get an error
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
