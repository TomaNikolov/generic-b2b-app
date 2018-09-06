import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "~/shared/services/backend.service";

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
        const customers = this.backendService.find('reports');
        customers.subscribe(customers => {
            this._reports = customers;
        });

        return customers;
    }
}
