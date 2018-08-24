import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import * as app from "tns-core-modules/application/application";

import { ModalComponent } from "~/core/navigation/modal.component";
import { UserService } from "~/shared/services/user.service";
import { config } from "~/core/routes-config"

@Component({
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    constructor(private modalDialogService: ModalDialogService,
        private viewContainerRef: ViewContainerRef,
        private userService: UserService) {
            // this.userService.logout()
    }

    ngOnInit(): void {
        if (!this.userService.isLoginIn()) {
            this.open("login").then(result => {
                this.removeBackPressEvent()
            }).catch(error => console.log(error));
        }
    }

    open(pageName: string): Promise<any> {
        const options: ModalDialogOptions = {
            context: {
                path: pageName,
                title: config.modals.find((route) => route.path === pageName).title
            },
            fullscreen: true,
            viewContainerRef: this.viewContainerRef
        };

        this.addBackPressEvent()
        return this.modalDialogService.showModal(ModalComponent, options)
    }

    removeBackPressEvent(): void {
        if (app.android) {
            app.android.off(app.AndroidApplication.activityBackPressedEvent, (args) => {
                args.cancel = false;
            });
        }
    }

    addBackPressEvent(): void {
        if (app.android) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, (args: any) => {
                args.cancel = true;
            });
        }
    }
}
