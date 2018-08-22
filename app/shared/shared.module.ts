import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { ModalNavBarDirective } from "~/shared/directives/modal-nav-bar.directive"
import { HideNavBar } from "~/shared/directives/hide-nav-bar.directive"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule
    ],
    exports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,

        HideNavBar,
        ModalNavBarDirective
    ],
    providers: [
        ModalDialogService
    ],
    declarations: [
        HideNavBar,
        ModalNavBarDirective
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
