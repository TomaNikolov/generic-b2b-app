import { Component, OnInit } from "@angular/core";
import { finalize } from "rxjs/operators";
import { Subscription, of, Observable } from "rxjs";
import { share } from 'rxjs/operators';
import { BackendService } from "../../shared/services/backend.service";

import { Data } from "~/place-order/providers/data"
import { CustomersService } from "~/place-order/shared/customers.service"
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { NavigationService } from "~/shared/services/navigation.service";

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

    constructor(
        private params: ModalDialogParams,
        private _customersService: CustomersService,
        private data: Data,
        private backendService: BackendService,
        private _navigationService: NavigationService,
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

    submitOrder() {
        const data = this.data.storage;
        const newOrder = {
            products: this.products.map(p => ({ productId: p._id, productQuantity: p.quantity })),
            totalOrder: this.totalOrder,
            customerId: data.customerId,
            sellerId: this.backendService.getActiveUser()._id
        };

        this.backendService.save("orders", newOrder)
            .then(orderInDb => {
                this.params.closeCallback();
            });
    }

    goBack() {
        this._navigationService.goBack()
    }
}
