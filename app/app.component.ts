import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import * as app from "tns-core-modules/application/application";
import { ModalComponent } from "~/core/navigation/modal.component";
import { UserService } from "~/shared/services/user.service";
import { config } from "~/core/routes-config"
import { NgZone } from "@angular/core";

@Component({
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    constructor(private modalDialogService: ModalDialogService,
        // Access root viewContainerRef from custom-nav-bar.directive.ts
        public viewContainerRef: ViewContainerRef,
        private routerExtensions: RouterExtensions,
        private zone: NgZone,
        private userService: UserService) {
        // this.userService.logout()
    }

    ngOnInit(): void {
        if (app.android) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, (args: app.AndroidActivityBackPressedEventData) => {
                if (this.routerExtensions.canGoBack()) {
                    args.cancel = true;
                    this.zone.run(() => this.routerExtensions.back());
                }
            });
        }

        if (!this.userService.isLoginIn()) {
            this.open("login").catch(error => console.log(error));
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

        return this.modalDialogService.showModal(ModalComponent, options)
    }
}
