import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { BackendService } from "./services/backend.service";
import { UserService } from "./services/user.service";
import { NavigationService } from "./services/navigation.service";
import { ShowNavBar } from "~/shared/directives/show-nav-bar.directive";
import { HideNavBar } from "~/shared/directives/hide-nav-bar.directive";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule
    ],
    exports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        ShowNavBar,
        HideNavBar,
    ],
    providers: [
        ModalDialogService,
        BackendService,
        UserService,
        NavigationService
    ],
    declarations: [
        ShowNavBar,
        HideNavBar,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
