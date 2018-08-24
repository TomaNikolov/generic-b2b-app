import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ReportsListComponent } from "./reports-list.component";
import { ReportsRoutingModule } from "./reports-routing.module";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { ReportsService } from "./reports.service";
import { SharedModule } from "../shared/shared.module"
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIListViewModule,
        ReportsRoutingModule
    ],
    declarations: [
        ReportsListComponent
    ],
    entryComponents: [
        ReportsListComponent
    ],
    providers: [
        ReportsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ReportsModule { }
