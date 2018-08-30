import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { CustomNavBarDirective } from "./directives/custom-nav-bar.directive"

import { BackendService } from "./services/backend.service";
import { UserService } from "./services/user.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule
    ],
    exports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,

        CustomNavBarDirective
    ],
    providers: [
        ModalDialogService,
        BackendService,
        UserService
    ],
    declarations: [
        CustomNavBarDirective
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
