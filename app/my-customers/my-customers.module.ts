import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";

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
        SharedModule,
        MyCustomersRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        NativeScriptHttpModule
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
