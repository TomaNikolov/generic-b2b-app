import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ReportsListComponent } from "./reports-list.component";

const routes: Routes = [
    { path: "", redirectTo: "reports-list" },
    { path: "reports-list", component: ReportsListComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ReportsRoutingModule { }
