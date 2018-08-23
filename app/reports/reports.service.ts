import { Injectable, NgZone } from "@angular/core";
import { Http } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
const Kinvey = require("kinvey-nativescript-sdk").Kinvey;

Kinvey.init();

@Injectable()
export class ReportsService {
    private _reports: any[] = [];

    constructor(private _ngZone: NgZone) { }

    getCustomerById(id: string): any {
        if (!id) {
            return;
        }

        return this._reports.filter(customer => customer._id === id)[0];
    }

    load(): Observable<any> {
        const customers = Kinvey.DataStore.collection('reports').find();
        customers.subscribe(customers => {
            this._reports = customers;
        });

        return customers;
    }
}
