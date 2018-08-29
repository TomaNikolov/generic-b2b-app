import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ConfirmOrderComponent } from "~/place-order/confirm-order/confirm-order.component";
import { PlaceOrderListComponent } from "~/place-order/place-order-list.component";

const routes: Routes = [
    { path: "place-order/:id", component: PlaceOrderListComponent },
    { path: "confirm-order", component: ConfirmOrderComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PlaceOrderRoutingModule {
    constructor() {}
}
