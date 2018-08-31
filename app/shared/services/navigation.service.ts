import { Injectable } from "@angular/core";
import { NgZone, ApplicationRef } from "@angular/core";
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { ModalComponent } from "~/core/navigation/modal.component";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { ExtendedNavigationExtras } from "nativescript-angular/router/router-extensions";


@Injectable()
export class NavigationService {
    constructor(private modalDialogService: ModalDialogService,
        private _appRef: ApplicationRef,
        private _zone: NgZone,
        private _routerExtensions: RouterExtensions,
        private _activatedRoute?: ActivatedRoute) { }

    public navigateToModal(title: string, path: string, params: string[]) {
        const options: ModalDialogOptions = {
            context: {
                path: path,
                title: title,
                params: params
            },
            fullscreen: true,
            // Access root viewContainerRef
            // https://github.com/angular/angular/issues/6446#issuecomment-173459525
            viewContainerRef: this._appRef.components[0].instance.viewContainerRef
        };

        this._zone.run(() => this.modalDialogService.showModal(ModalComponent, options))
    }

    public absoluteRouterNavigation(command: any[]) {
         this.routerNavigation(command);
    }

    public relativeRouterNavigation(command: any[], activatedRoute?: ActivatedRoute) {
        activatedRoute = activatedRoute || this._activatedRoute;
         this.routerNavigation(command, activatedRoute);
    }

    public goBack() {
        this._routerExtensions.backToPreviousPage();
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
