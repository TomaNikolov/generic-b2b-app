import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ListViewEventData } from "nativescript-ui-listview";
import { Subscription, Observable } from "rxjs";
import { finalize } from "rxjs/operators";

import { CustomersService } from "./shared/customers.service";
import { NavigationService } from "~/shared/services/navigation.service";

@Component({
    selector: "CustomersList",
    moduleId: module.id,
    templateUrl: "./customers-list.component.html"
})
export class CustomersListComponent implements OnInit, OnDestroy {
    private _isLoading: boolean = false;
    private _customers: Observable<any>
    private _dataSubscription: Subscription;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _customersService: CustomersService,
        private _navigationService: NavigationService,
    ) {
        console.log("CustomersListComponent constructor")
    }

    ngOnInit(): void {
        console.log("CustomersListComponent ngOnInit")
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

    onCustomerItemTap(args: ListViewEventData): void {
        const tappedCustomerItem = args.view.bindingContext;
        this._navigationService.relativeRouterNavigation(["../customer-detail", tappedCustomerItem._id], this._activatedRoute);
    }
}
