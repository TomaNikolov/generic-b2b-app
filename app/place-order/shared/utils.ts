import { Injectable } from "@angular/core";

@Injectable()
export class Utils {
    constructor() { }

    public getTotalOrder(products: any[]) {
        products = products || [];
        const total = products
            .map(p => p.quantity * this.parseCurrency(p.unitPrice))
            .reduce((a, b) => a + b, 0)

        return this.toFixed(total);
    }

    public parseCurrency(currency: string): number {
        return parseFloat(currency.replace(/\$|,/g, ""));
    }

    public toFixed(total: number): string {
        return `$${total.toFixed(2)}`;
    }
}
