import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { InboxDetailComponent } from "./inbox-detail/inbox-detail.component";
import { InboxListComponent } from "./inbox-list.component";

const routes: Routes = [
    { path: "", redirectTo: "inbox-list" },
    { path: "inbox-list", component: InboxListComponent },
    { path: "inbox-detail/:id", component: InboxDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class InboxRoutingModule { }
