import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { SharedModule } from "../shared/shared.module"
import { InboxDetailComponent } from "./inbox-detail/inbox-detail.component";
import { InboxListComponent } from "./inbox-list.component";
import { InboxRoutingModule } from "./inbox-routing.module";
import { InboxService } from "./shared/inbox.service";

@NgModule({
    imports: [
        SharedModule,
        InboxRoutingModule,
    ],
    declarations: [
        InboxListComponent,
        InboxDetailComponent
    ],
    providers: [
        InboxService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class InboxModule { }
