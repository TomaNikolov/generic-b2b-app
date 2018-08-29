import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { config } from "~/core/routes-config";

import { LoggedInLazyLoadGuard } from "./logged-in-lazy-load.guard";

@NgModule({
    imports: [NativeScriptRouterModule.forRoot([
        ...config.tabs.map(t => { t.canLoad = [LoggedInLazyLoadGuard]; return t; }),
        ...config.modals,
    ])],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
