import { Component, OnDestroy, OnInit } from "@angular/core";
import { ListViewEventData } from "nativescript-ui-listview";
import { Subscription, Observable } from "rxjs";
import { finalize } from "rxjs/operators";

import { CustomersService } from "~/my-customers/shared/customers.service";
import { NavigationService } from "~/core/services/navigation.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "CustomersList",
    moduleId: module.id,
    templateUrl: "./my-customers-list.component.html"
})
export class MyCustomersListComponent implements OnInit, OnDestroy {
    private _isLoading: boolean = false;
    private _customers: Observable<any>;
    private _dataSubscription: Subscription;

    constructor(
        private _customersService: CustomersService,
        private _navigationService: NavigationService,
        private _activatedRoute: ActivatedRoute,
    ) {
    }

    ngOnInit(): void {
        if (!this._dataSubscription) {
            this._isLoading = true;

            this._dataSubscription = this._customersService.load()
                .pipe(finalize(() => this._isLoading = false))
                .subscribe(customers => {
                    this._customers = customers;
                    this._isLoading = false;
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
        return this._customers;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    onCustomerItemTap(tappedCustomerItem): void {
        this._navigationService.relativeRouterNavigation(["../customer-detail", tappedCustomerItem._id], this._activatedRoute);
    }
}
