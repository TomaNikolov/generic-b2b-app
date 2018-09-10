import { Directive, Injector, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page/page";
import { ActionItem, NavigationButton } from "tns-core-modules/ui/action-bar/action-bar";
import { ActivatedRoute } from "@angular/router";
import { path } from "tns-core-modules/file-system/file-system";
import * as app from "tns-core-modules/application/application";

import { NavigationService } from "~/core/services/navigation.service";

@Directive({
    selector: "[goBack]",
})
export class GoBackModalDirective implements OnInit {
    private _modalDialogParams: ModalDialogParams;

    constructor(private _injector: Injector,
        private _routerExtensions: RouterExtensions,
        private page: Page,
        private _activatedRoute: ActivatedRoute,
        private _navigationService: NavigationService, ) {
    }

    ngOnInit(): void {
        this.addNavButton();
    }

    public goBack() {
        if (this._routerExtensions.canGoBackToPreviousPage()) {
            this._routerExtensions.backToPreviousPage();
        } else {
            if (this.isInsideModalDialog()) {
                this._modalDialogParams.closeCallback();
            } else if (this._routerExtensions.canGoBack()) {
                this._activatedRoute.params.subscribe(params => {
                    const backPath = "..";
                    let navigationPath = backPath;
                    for (const key in params) {
                        if (params.hasOwnProperty(key)) {
                            navigationPath = path.join(navigationPath, backPath);
                        }
                    }

                    this._navigationService.relativeRouterNavigation([navigationPath], this._activatedRoute);
                });
            }
        }
    }

    private isInsideModalDialog() {
        try {
            // ModalDialogParams will resolve if inside a modal dialog
            this._modalDialogParams = this._injector.get(ModalDialogParams)
            return true;
        } catch (e) {
            return false;
        }
    }

    private addNavButton() {
        const navBtn = new NavigationButton();
        navBtn.on("tap", () => this.goBack());
        if (app.android) {
            navBtn.android.systemIcon = "ic_menu_back"
        }

        this.page.actionBar.navigationButton = navBtn
        if (app.ios) {
            this.page.actionBar.navigationButton.visibility = "collapsed";
            const backButton = new ActionItem();
            backButton.on("tap", () => this.goBack());
            backButton.ios.systemIcon = 8;
            this.page.actionBar.actionItems.addItem(backButton);
        }
    }
}
