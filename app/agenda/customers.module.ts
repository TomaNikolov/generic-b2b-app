import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { SharedModule } from "~/shared/shared.module"
import { CustomersDetailComponent } from "~/agenda/customers-detail/customers-detail.component";
import { CustomersListComponent } from "~/agenda/customers-list.component";
import { CustomersRoutingModule } from "~/agenda/customers-routing.module";
import { CustomersService } from "~/agenda/shared/customers.service";

@NgModule({
    imports: [
        NativeScriptUIChartModule,

        SharedModule,
        CustomersRoutingModule,
    ],
    declarations: [
        CustomersListComponent,
        CustomersDetailComponent
    ],
    providers: [
        CustomersService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CustomersModule { }
