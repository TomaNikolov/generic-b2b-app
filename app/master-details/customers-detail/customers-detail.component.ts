import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";

import { CustomersService } from "../shared/customers.service";

@Component({
    selector: "CustomersDetail",
    moduleId: module.id,
    templateUrl: "./customers-detail.component.html"
})
export class CustomersDetailComponent implements OnInit {
    private _customer: any;

    constructor(
        private _customersService: CustomersService,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        this._pageRoute.activatedRoute
            .pipe(switchMap((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
                const customerId = params.id;

                this._customer = this._customersService.getCustomerById(customerId);
            });
    }

    get customer(): any {
        return this._customer;
    }

    onBackButtonTap(): void {
        this._routerExtensions.backToPreviousPage();
    }
}
