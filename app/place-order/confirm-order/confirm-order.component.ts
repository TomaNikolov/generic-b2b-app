import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { finalize } from "rxjs/operators";
import { Subscription, of, Observable } from "rxjs";
import { share } from 'rxjs/operators';

import { Data } from "~/place-order/providers/data"
import { Utils } from "~/place-order/shared/utils";
import { CustomersService } from "~/place-order/shared/customers.service"

@Component({
    selector: "ConfirmOrder",
    moduleId: module.id,
    templateUrl: "./confirm-order.component.html"
})
export class ConfirmOrderComponent implements OnInit {
    private _products: any;
    private _customer: Observable<{}>;
    private _dataSubscription: Subscription;
    private _isLoading: boolean = false;
    public total: any;

    constructor(
        private _routerExtensions: RouterExtensions,
        private _customersService: CustomersService,
        private data: Data,
        private _utils: Utils
    ) { }

    ngOnInit(): void {
        if (!this._dataSubscription) {
            this._isLoading = true;
            this._customersService.load()
                .pipe(finalize(() => {
                    this._customer = of(this._customersService.getCustomerById(data.customerId)).pipe(share())
                    this._isLoading = false;
                })).subscribe();
        }

        const data = this.data.storage;
        this._products = data.products;
        this.total = this.totalOrder();
    }

    ngOnDestroy(): void {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }

    get customer(): any {
        return this._customer;
    }

    get products(): any {
        return this._products;
    }

    totalOrder(): any {
        return this._utils.getTotalOrder(this._products)
    }

    get isLoading(): boolean {
        return this._isLoading;
    }
}
