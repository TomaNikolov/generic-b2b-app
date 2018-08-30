import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

import { Data } from "~/place-order/providers/data";
import { ProductsService } from "~/place-order/shared/products.service";
import { Utils } from "~/place-order/shared/utils";
import { ModalNavBarDirective } from "~/shared/directives/modal-nav-bar.directive";
import { OrderOptions } from "./order-options.model";

@Component({
    selector: "productsList",
    moduleId: module.id,
    templateUrl: "./place-order-list.component.html"
})
export class PlaceOrderListComponent implements OnInit, OnDestroy {
    private _isLoading: boolean = false;
    private _products: ObservableArray<any> = new ObservableArray<any>([]);
    private _dataSubscription: Subscription;
    private _customerId: string;
    private _orderOptions: OrderOptions;

    @ViewChild(ModalNavBarDirective) modalNavBar: ModalNavBarDirective;
    constructor(
        private _productsService: ProductsService,
        private _routerExtensions: RouterExtensions,
        private activatedRoute: ActivatedRoute,
        private _data: Data,
        private _utils: Utils
    ) { }

    get categories(): string[] {
        return ["Any", "Cat 1",
            "Cat 2", "Cat 3"];
    }

    get promos(): string[] {
        return ["Any", "Yes", "No"];
    }

    get sortBys(): string[] {
        return ["Product name", "Last updated", "Last created", "From previous order first"];
    }

    get orderOptions(): OrderOptions {
        return this._orderOptions;
    }

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
                        quantity: 0,
                    })));
                    this._isLoading = false;
                });
        }

        this.activatedRoute.params.subscribe(params => {
            this._customerId = params.id;
        });

        this.modalNavBar.AddCustomNavButton("Confirm order", () => {
            this._data.storage = {
                customerId: this._customerId,
                products: this._products.filter(p => p.quantity !== 0),
                totalOrder: this.totalOrder
            }

            this._routerExtensions.navigate(["../../confirm-order"],
                {
                    relativeTo: this.activatedRoute,
                    animated: true,
                    transition: {
                        name: "slide",
                        duration: 200,
                        curve: "ease"
                    }
                });
        });

        this._orderOptions = new OrderOptions("", "", "");
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

    get totalOrder() {
        return this._utils.getTotalOrder(this._products);
    }

    get isLoading(): boolean {
        return this._isLoading;
    }
}
