import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular";

import { SharedModule } from "../shared/shared.module"
import { InboxDetailComponent } from "./inbox-detail/inbox-detail.component";
import { InboxListComponent } from "./inbox-list.component";
import { InboxRoutingModule } from "./inbox-routing.module";
import { InboxService } from "./shared/inbox.service";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptUIChartModule,
        InboxRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        InboxListComponent,
        InboxDetailComponent
    ],
    entryComponents: [
        InboxListComponent
    ],
    providers: [
        InboxService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InboxModule {
    constructor() {
        console.log("Module!")
    }
}
