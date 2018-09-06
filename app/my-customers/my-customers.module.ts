import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { SharedModule } from "~/shared/shared.module"
import { CustomersDetailComponent } from "~/my-customers/customers-detail/customers-detail.component";
import { MyCustomersListComponent } from "~/my-customers/my-customers-list.component";
import { MyCustomersRoutingModule } from "~/my-customers/my-customers-routing.module";
import { CustomersService } from "~/my-customers/shared/customers.service";
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { registerElement } from "nativescript-angular/element-registry";
registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);

@NgModule({
    imports: [
        NativeScriptHttpModule,

        SharedModule,
        MyCustomersRoutingModule,
    ],
    declarations: [
        MyCustomersListComponent,
        CustomersDetailComponent,
    ],
    providers: [
        CustomersService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MyCustomersModule { }
