import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "~/shared/shared.module";

import { AnonymousLoginComponent } from "~/anonymous-login/anonymous-login.component"

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: AnonymousLoginComponent }
        ])
    ],
    declarations: [
        AnonymousLoginComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AnonymousLoginModule { }
