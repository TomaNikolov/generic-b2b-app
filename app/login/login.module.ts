import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "~/shared/shared.module";

import { LoginComponent } from "~/login/login.component";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: LoginComponent }
        ])
    ],
    entryComponents: [
        LoginComponent
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class LoginModule { }
