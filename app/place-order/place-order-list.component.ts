import { Component, OnDestroy, OnInit } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { } from "data/observable";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";

import { ProductsService } from "~/place-order/shared/products.service";

@Component({
    selector: "productsList",
    moduleId: module.id,
    templateUrl: "./place-order-list.component.html"
})
export class PlaceOrderListComponent implements OnInit, OnDestroy {
    private _isLoading: boolean = false;
    private _products: ObservableArray<any> = new ObservableArray<any>([]);
    private _units: ObservableArray<any> = new ObservableArray<any>([]);
    private _dataSubscription: Subscription;

    constructor(
        private _productsService: ProductsService,
    ) { }

    ngOnInit(): void {
        if (!this._dataSubscription) {
            this._isLoading = true;

            this._dataSubscription = this._productsService.load()
                .pipe(finalize(() => this._isLoading = false))
                .subscribe(products => {
                    this._products = new ObservableArray(products.map((p) => ({
                        _id: p._id,
                        unitInStock: p.unitInStock,
                        productName: p.productName,
                        unitPrice: p.unitPrice,
                        promo: p.promo,
                        quantity: 0
                    })));
                    this._units = new ObservableArray(products.map(p => ({ unitInStock: p.unitInStock })))
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

    get products(): ObservableArray<any> {
        return this._products;
    }
    get units(): ObservableArray<any> {
        return this._units;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }
}
