import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { SharedModule } from "~/shared/shared.module";
import { ProfileComponent } from "~/profile/profile.component";

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: ProfileComponent }
        ])
    ],
    declarations: [
        ProfileComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }
