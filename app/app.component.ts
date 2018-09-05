import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { ModalComponent } from "~/core/navigation/modal.component";
import { UserService } from "~/shared/services/user.service";
import { config } from "~/core/routes-config";

@Component({
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    constructor(private modalDialogService: ModalDialogService,
        // Access root viewContainerRef from custom-nav-bar.directive.ts
        public viewContainerRef: ViewContainerRef,
        private _userService: UserService) {
        // this.userService.logout()
    }

    ngOnInit(): void {
        if (!this._userService.isLoggedIn()) {
            this.open("login").catch(error => console.log(error));
        }
    }

    open(pageName: string): Promise<any> {
        const options: ModalDialogOptions = {
            context: {
                command: [pageName],
                title: config.modals.find((route) => route.path === pageName).title
            },
            fullscreen: true,
            viewContainerRef: this.viewContainerRef
        };

        return this.modalDialogService.showModal(ModalComponent, options)
    }
}
