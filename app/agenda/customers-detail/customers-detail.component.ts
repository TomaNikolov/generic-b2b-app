import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TabView } from "ui/tab-view";
import { CustomersService } from "~/agenda/shared/customers.service";
import { NavigationService } from "~/core/services/navigation.service";
const metadata = require("./customers-detail.metadata.json");
import * as app from "tns-core-modules/application/application";
import { Observable } from "rxjs";
import { RadDataForm } from "nativescript-ui-dataform";

@Component({
    selector: "CustomersDetail",
    moduleId: module.id,
    templateUrl: "./customers-detail.component.html"
})
export class CustomersDetailComponent implements OnInit {
    public customer: any;
    public metadata: any;
    @ViewChild("formObject") radDataForm: any;

    constructor(
        private _navigationService: NavigationService,
        private _customersService: CustomersService,
        private _activatedRoute: ActivatedRoute,
    ) { }

    checkIn($event) {
        console.log(this.customer)
        console.log(this.radDataForm.dataForm.editedObject)
        this.radDataForm.dataForm.validateAll()
            .then(result => {
                console.log(result);
            });
        // this.radDataForm.validateAll()
        //     .then(r =>{
        //         console.log(r);
        //     })
    }

    ngOnInit(): void {

        // this._activatedRoute.params.subscribe(params => {
        //     const customerId = params.id;
        //     console.log("got from params")
        //     this.customer = this._customersService.getCustomerById(customerId);
        //     (<any>this.customer).loyal = true;
        // });

        // console.log("create empty")
        this.customer = { name: "", salary: 0, address: "", loyal: false };
        this.metadata = metadata;
    }

    placeOrder() {
        this._navigationService.navigateTo(["place-order", "place-order", this.customer._id]);
    }

    viewMap() {
        this._navigationService.absoluteRouterNavigation(['/', { outlets: { customersTab: ['my-customers', 'customer-detail', this.customer._id] } }]);
        const tabView: TabView = <TabView>app.getRootView().getViewById("tview")
        tabView.selectedIndex = 1;
    }

    goBack() {
        this._navigationService.absoluteRouterNavigation(['/', { outlets: { agendaTab: ['master', 'customer-list'] } }]);
    }
}
