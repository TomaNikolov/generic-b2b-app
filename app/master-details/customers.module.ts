import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { SharedModule } from "~/shared/shared.module"
import { CustomersDetailComponent } from "~/master-details/customers-detail/customers-detail.component";
import { CustomersListComponent } from "~/master-details/customers-list.component";
import { CustomersRoutingModule } from "~/master-details/customers-routing.module";
import { CustomersService } from "~/master-details/shared/customers.service";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptUIChartModule,
        CustomersRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
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
