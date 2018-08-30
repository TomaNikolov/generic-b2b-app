import { Injectable, NgZone } from "@angular/core";
import { Http } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { BackendService } from "../shared/services/backend.service";

@Injectable()
export class ReportsService {
    private _reports: any[] = [];

    constructor(private backendService: BackendService) { }

    getCustomerById(id: string): any {
        if (!id) {
            return;
        }

        return this._reports.filter(customer => customer._id === id)[0];
    }

    load(): Observable<any> {
        const customers = this.backendService.getAllElements('reports');
        customers.subscribe(customers => {
            this._reports = customers;
        });

        return customers;
    }
}
