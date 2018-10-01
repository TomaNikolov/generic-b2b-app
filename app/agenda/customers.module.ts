import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { SharedModule } from "~/shared/shared.module"
import { CustomersDetailComponent } from "~/agenda/customers-detail/customers-detail.component";
import { CustomersListComponent } from "~/agenda/customers-list.component";
import { CustomersRoutingModule } from "~/agenda/customers-routing.module";
import { CustomersService } from "~/agenda/shared/customers.service";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        SharedModule,
        NativeScriptFormsModule,
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
