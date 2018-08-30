import { Injectable } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

@Injectable()
export class Utils {
    constructor() { }

    public getTotalOrder(products: ObservableArray<any>) {
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
