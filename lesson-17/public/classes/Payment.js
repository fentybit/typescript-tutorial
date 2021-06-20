export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // if we don't have this, we will get an error
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
