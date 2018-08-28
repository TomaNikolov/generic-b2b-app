import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PlaceOrderListComponent } from "~/place-order/place-order-list.component";

const routes: Routes = [
    { path: "", redirectTo: "place-order" },
    { path: "place-order", component: PlaceOrderListComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PlaceOrderRoutingModule { }
