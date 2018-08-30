import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { finalize } from "rxjs/operators";
import { Subscription, of, Observable } from "rxjs";
import { share } from 'rxjs/operators';
import { BackendService } from "../../shared/services/backend.service";

import { Data } from "~/place-order/providers/data"
import { Utils } from "~/place-order/shared/utils";
import { CustomersService } from "~/place-order/shared/customers.service"
import { ViewChild } from "@angular/core";
import { ModalNavBarDirective } from "~/shared/directives/modal-nav-bar.directive";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "ConfirmOrder",
    moduleId: module.id,
    templateUrl: "./confirm-order.component.html"
})
export class ConfirmOrderComponent implements OnInit {
    private _products: any;
    private _customer: Observable<{}>;
    private _totalOrder: any;
    private _dataSubscription: Subscription;
    private _isLoading: boolean = false;

    @ViewChild(ModalNavBarDirective) modalNavBar: ModalNavBarDirective;
    constructor(
        private params: ModalDialogParams,
        private _routerExtensions: RouterExtensions,
        private _customersService: CustomersService,
        private data: Data,
        private backendService: BackendService,
        private _utils: Utils
    ) { }

    ngOnInit(): void {
        const data = this.data.storage;

        if (!this._dataSubscription) {
            this._isLoading = true;
            this._customersService.load()
                .pipe(finalize(() => {
                    this._customer = of(this._customersService.getCustomerById(data.customerId)).pipe(share())
                    this._isLoading = false;
                })).subscribe();
        }

        this._products = data.products;
        this._totalOrder = data.totalOrder;

        this.modalNavBar.AddCustomNavButton("Place order", () => {
            const newOrder = {
                products: this.products.map(p => ({ productId: p._id, productQuantity: p.quantity })),
                totalOrder: this.totalOrder,
                customerId: data.customerId,
                sellerId: this.backendService.getActiveUser()._id
            };

            this.backendService.save("orders", newOrder)
                .then(orderInDb => {
                    console.log("orderInDb", orderInDb);
                    this.params.closeCallback();
                });
        });
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

    get totalOrder(): any {
        return this._totalOrder;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }
}
