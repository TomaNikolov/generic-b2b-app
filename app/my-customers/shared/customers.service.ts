import { Injectable, NgZone } from "@angular/core";
import { Observable, throwError } from "rxjs";
const Kinvey = require("kinvey-nativescript-sdk").Kinvey;

Kinvey.init();

@Injectable()
export class CustomersService {
    private _customers: any[] = [];

    constructor() { }

    getCustomerById(id: string): any {
        if (!id) {
            return;
        }

        return this._customers.filter(customer => customer._id === id)[0];
    }

    load(): Observable<any> {
        const customers = Kinvey.DataStore.collection('customers').find();
        customers.subscribe(customers => {
            this._customers = customers;
        });

        return customers;
    }
}
