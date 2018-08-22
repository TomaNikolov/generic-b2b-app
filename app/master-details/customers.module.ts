import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { SharedModule } from "../shared/shared.module"
import { CustomersDetailComponent } from "./customers-detail/customers-detail.component";
import { CustomersListComponent } from "./customers-list.component";
import { CustomersRoutingModule } from "./customers-routing.module";
import { CustomersService } from "./shared/customers.service";

@NgModule({
    imports: [
        SharedModule,
        CustomersRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        CustomersListComponent,
        CustomersDetailComponent,
    ],
    entryComponents: [
        CustomersListComponent
    ],
    providers: [
        CustomersService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CustomersModule { }
