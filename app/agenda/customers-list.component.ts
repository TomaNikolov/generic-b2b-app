import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription, Observable } from "rxjs";
import { finalize } from "rxjs/operators";

import { CustomersService } from "./shared/customers.service";
import { NavigationService } from "~/core/services/navigation.service";
import { BackendService } from "~/core/services/backend.service";

@Component({
    selector: "CustomersList",
    moduleId: module.id,
    templateUrl: "./customers-list.component.html"
})
export class CustomersListComponent implements OnInit, OnDestroy {
    private _isLoading: boolean = false;
    public _customers: Observable<any>
    private _dataSubscription: Subscription;

    constructor(
        private backendService: BackendService,
        private _activatedRoute: ActivatedRoute,
        private _customersService: CustomersService,
        private _navigationService: NavigationService,
    ) { }

    ngOnInit(): void {
        if (!this._dataSubscription) {
            this._isLoading = false;

            // this._customers = this.backendService.find('customers');
            this._dataSubscription = this.backendService.find('customers')
                .subscribe(customers => {
                    this._customers = customers;
                    // console.log(this._customers[0].loyal)
                    // this._customers = <any>[
                    //     {
                    //         name: "pass",
                    //         loyal: 3
                    //     },
                    //     {
                    //         name: "fail",
                    //         loyal: 6
                    //     }
                    // ]
                });
        }
    }

    ngOnDestroy(): void {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }

    get customers(): Observable<any> {
        // console.log(this._customers)
        return this._customers;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    onCustomerItemTap(tappedCustomerItem): void {
        this._navigationService.relativeRouterNavigation(["../customer-detail", tappedCustomerItem._id], this._activatedRoute);
    }
}
