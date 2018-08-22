import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { config } from "~/core/routes-config";

@NgModule({
    imports: [NativeScriptRouterModule.forRoot([
        ...config.tabs,
        ...config.modals,
    ])],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
