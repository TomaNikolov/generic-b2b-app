import { NgModule } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { BackendService } from "./services/backend.service";
import { UserService } from "./services/user.service";
import { NavigationService } from "./services/navigation.service";
import { LoggedInLazyLoadGuard } from "~/core/guard/logged-in-lazy-load.guard";

@NgModule({
    providers: [
        ModalDialogService,
        BackendService,
        UserService,
        NavigationService,

        LoggedInLazyLoadGuard
    ]
})
export class CoreModule { }
