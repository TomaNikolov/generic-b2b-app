import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { map } from "rxjs/operators";
import { CustomersService } from "~/my-customers/shared/customers.service";
import { Http } from "@angular/http";
import { ActivatedRoute } from '@angular/router';
import { CustomNavBarDirective } from "~/shared/directives/custom-nav-bar.directive";
import { TabView } from "tns-core-modules/ui/tab-view/tab-view";
import * as app from "application";

@Component({
    selector: "CustomersDetail",
    moduleId: module.id,
    templateUrl: "./customers-detail.component.html"
})
export class CustomersDetailComponent implements OnInit {
    readonly mapBoxApiUrl = "https://api.mapbox.com"
    readonly mapboxToken = "pk.eyJ1IjoidG9tYXNhYSIsImEiOiJjamw2N2E1bDQybGlnM3FxcjYwbGpjbmEzIn0.VPNBKrn82D_GOt7T0m4cqw"
    private _customer: any;
    private _address: any;

    @ViewChild(CustomNavBarDirective) customNavBar: CustomNavBarDirective;
    @ViewChild("map") public mapbox: ElementRef;
    constructor(
        private _customersService: CustomersService,
        private activatedRoute: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private http: Http
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const customerId = params.id;
            this._customer = this._customersService.getCustomerById(customerId);
        });

        this.customNavBar.showNavigationBar();
        this.customNavBar.AddCustomNavButton("View details", ['/', { outlets: { agendaTab: ['master', 'customer-detail', this._customer._id] } }], false, () => {
            const tabView: TabView = <TabView>app.getRootView().getViewById("tview")
            tabView.selectedIndex = 0;
        });
    }

    public onMapReady(args: any) {
        this.http.get(`${this.mapBoxApiUrl}/v4/geocode/mapbox.places/"${this._customer.address}".json?access_token=${this.mapboxToken}`)
            .pipe(map(res => res.json()))
            .subscribe((response: any) => {
                const features: any[] = response.features;
                features.sort((a, b) => b.relevance - a.relevance)
                this._address = features[0];

                if (!this._address) {
                    return;
                }

                this.mapbox.nativeElement.addMarkers([
                    {
                        lat: this._address.geometry.coordinates[1],
                        lng: this._address.geometry.coordinates[0],
                        title: this._customer.name,
                        subtitle: this._address.place_name,
                    }
                ]);

                this.mapbox.nativeElement.setCenter(
                    {
                        lat: this._address.center[1],
                        lng: this._address.center[0],
                    }
                )
            });
    }

    get accessToken(): any {
        return this.mapboxToken;
    }
}
