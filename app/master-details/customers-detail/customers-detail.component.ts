import { Component, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "data/observable-array";
import { ActivatedRoute } from "@angular/router";

import { CustomNavBarDirective } from "../../shared/directives/custom-nav-bar.directive"
import { CustomersService } from "~/master-details/shared/customers.service";

@Component({
    selector: "CustomersDetail",
    moduleId: module.id,
    templateUrl: "./customers-detail.component.html"
})
export class CustomersDetailComponent implements OnInit {
    private _customer: any;
    private _categoricalSource: ObservableArray<any>;

    @ViewChild(CustomNavBarDirective) modalNavBar: CustomNavBarDirective;
    constructor(
        private _customersService: CustomersService,
        private _routerExtensions: RouterExtensions,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const customerId = params.id;
            this._customer = this._customersService.getCustomerById(customerId);
        });

        this._categoricalSource = new ObservableArray([
            { label: "Last month", amount: 75000 },
            { label: "This month", amount: 25000 },
        ]);

        this.modalNavBar.toggleNavigationBar();
        this.modalNavBar.AddModalNavigationButton("Place order", "place-order/place-order", [this._customer._id]);
    }

    get customer(): any {
        return this._customer;
    }

    get categoricalSource(): ObservableArray<any> {
        return this._categoricalSource;
    }
}
