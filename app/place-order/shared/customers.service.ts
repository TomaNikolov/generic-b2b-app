import { Injectable, NgZone } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "../../shared/services/backend.service";

@Injectable()
export class CustomersService {
    private _customers: any[] = [];

    constructor(private _ngZone: NgZone,
        private backendService: BackendService) { }

    getCustomerById(id: string): any {
        if (!id) {
            return;
        }

        return this._customers.filter(customer => customer._id === id)[0];
    }

    load(): Observable<any> {
        const customers = this.backendService.getAllElements('customers');
        customers.subscribe(customers => {
            this._customers = customers;
        });

        return customers;
    }
}
