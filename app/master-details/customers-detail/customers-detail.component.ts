import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { ObservableArray } from "data/observable-array";
import { ActivatedRoute } from '@angular/router';

import { CustomersService } from "~/master-details/shared/customers.service";

@Component({
    selector: "CustomersDetail",
    moduleId: module.id,
    templateUrl: "./customers-detail.component.html"
})
export class CustomersDetailComponent implements OnInit {
    private _customer: any;
    private _categoricalSource: ObservableArray<any>;

    constructor(
        private _customersService: CustomersService,
        private activatedRoute: ActivatedRoute,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions
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
    }

    get customer(): any {
        return this._customer;
    }

    get categoricalSource(): ObservableArray<any> {
        return this._categoricalSource;
    }

    onBackButtonTap(): void {
        this._routerExtensions.backToPreviousPage();
    }
}
