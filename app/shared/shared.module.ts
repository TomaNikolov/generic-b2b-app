import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { ModalNavBarDirective } from "./directives/modal-nav-bar.directive"
import { HideNavBar } from "./directives/hide-nav-bar.directive"
import { CustomNavBarDirective } from "./directives/custom-nav-bar.directive"

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule
    ],
    exports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,

        HideNavBar,
        ModalNavBarDirective,
        CustomNavBarDirective
    ],
    providers: [
        ModalDialogService
    ],
    declarations: [
        HideNavBar,
        ModalNavBarDirective,
        CustomNavBarDirective
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
