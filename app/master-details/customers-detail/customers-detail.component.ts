import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TabView } from "ui/tab-view";
import { CustomersService } from "~/master-details/shared/customers.service";
import { NavigationService } from "~/shared/services/navigation.service";
import * as app from "tns-core-modules/application/application";

@Component({
    selector: "CustomersDetail",
    moduleId: module.id,
    templateUrl: "./customers-detail.component.html"
})
export class CustomersDetailComponent implements OnInit {
    private _customer: any;
    private _categoricalSource: any[];

    constructor(
        private _navigationService: NavigationService,
        private _customersService: CustomersService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(params => {
            const customerId = params.id;
            this._customer = this._customersService.getCustomerById(customerId);
        });

        this._categoricalSource = [
            { label: "Last month", amount: 75000 },
            { label: "This month", amount: 25000 },
        ];
    }

    get customer(): any {
        return this._customer;
    }

    get categoricalSource(): any[] {
        return this._categoricalSource;
    }

    placeOrder() {
        this._navigationService.navigateTo(["place-order", "place-order", this._customer._id]);
    }

    viewMap() {
        this._navigationService.absoluteRouterNavigation(['/', { outlets: { customersTab: ['my-customers', 'customer-detail', this._customer._id] } }]);
        const tabView: TabView = <TabView>app.getRootView().getViewById("tview")
        tabView.selectedIndex = 1;
    }

    goBack() {
        this._navigationService.absoluteRouterNavigation(['/', { outlets: { agendaTab: ['master', 'customer-list'] } }]);
    }
}
