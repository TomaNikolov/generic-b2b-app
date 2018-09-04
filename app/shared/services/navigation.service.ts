import { Injectable, ViewContainerRef } from "@angular/core";
import { NgZone, ApplicationRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { ModalComponent } from "~/core/navigation/modal.component";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { ExtendedNavigationExtras } from "nativescript-angular/router/router-extensions";
import * as app from "tns-core-modules/application/application";

@Injectable()
export class NavigationService {
    constructor(private modalDialogService: ModalDialogService,
        private _appRef: ApplicationRef,
        private _zone: NgZone,
        private _routerExtensions: RouterExtensions,
        private _activatedRoute: ActivatedRoute, ) { }


    public navigateTo(command: any[], activatedRoute?: ActivatedRoute) {
        if (this.isInsideModal()) {
            this.routerNavigation(command, activatedRoute);
        } else {
            this.navigateToModal(command);
        }
    }

    public absoluteRouterNavigation(command: any[]) {
        this.routerNavigation(command);
    }

    public relativeRouterNavigation(command: any[], activatedRoute?: ActivatedRoute) {
        activatedRoute = activatedRoute || this._activatedRoute;
        this.routerNavigation(command, activatedRoute);
    }

    public goBack() {
        this._routerExtensions.canGoBackToPreviousPage()
    }

    private navigateToModal(command: string[]) {
        const options: ModalDialogOptions = {
            context: {
                command: command
            },
            fullscreen: true,
            // Access root viewContainerRef
            // https://github.com/angular/angular/issues/6446#issuecomment-173459525
            viewContainerRef: this._appRef.components[0].instance.viewContainerRef
        };

        this._zone.run(() => this.modalDialogService.showModal(ModalComponent, options))
    }

    private isInsideModal() {
        return app.getRootView() && app.getRootView().modal
    }

    private routerNavigation(command: any[], activatedRoute?: ActivatedRoute) {
        let extras: ExtendedNavigationExtras = {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        }

        if (activatedRoute) {
            extras.relativeTo = activatedRoute;
        }

        this._zone.run(() => this._routerExtensions.navigate(command, extras));
    }
}
