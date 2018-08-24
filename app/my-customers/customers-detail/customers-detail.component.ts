import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { map } from "rxjs/operators";
import { CustomersService } from "~/my-customers/shared/customers.service";
import { Http } from "@angular/http";

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

    @ViewChild("map") public mapbox: ElementRef;
    constructor(
        private _customersService: CustomersService,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions,
        private http: Http
    ) { }

    ngOnInit(): void {
        console.log("ngOnInit")
        this._pageRoute.activatedRoute
            .pipe(switchMap((activatedRoute) => activatedRoute.params))
            .forEach((params) => {
                const customerId = params.id;
                this._customer = this._customersService.getCustomerById(customerId);
            });
    }

    public onMapReady(args: any) {
        console.log(`${this.mapBoxApiUrl}/v4/geocode/mapbox.places/"${this._customer.address}".json?access_token=${this.mapboxToken}`)
        this.http.get(`${this.mapBoxApiUrl}/v4/geocode/mapbox.places/"${this._customer.address}".json?access_token=${this.mapboxToken}`)
            .pipe(map(res => res.json()))
            .subscribe((response: any) => {
                const features: any[] = response.features;
                features.sort((a, b) => b.relevance - a.relevance)
                console.log(features)
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

    onBackButtonTap(): void {
        this._routerExtensions.backToPreviousPage();
    }
}
