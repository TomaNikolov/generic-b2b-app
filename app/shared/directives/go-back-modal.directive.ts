import { Directive, Injector, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import * as app from "tns-core-modules/application/application";
import { Page } from "tns-core-modules/ui/page/page";
import { ActionItem, NavigationButton } from "tns-core-modules/ui/action-bar/action-bar";

@Directive({
    selector: "[modalGoBack]",

})
export class GoBackModalDirective implements OnInit {
    private _modalDialogParams: ModalDialogParams;

    constructor(private _injector: Injector,
        private _routerExtensions: RouterExtensions,
        private page: Page) { }

    ngOnInit(): void {
        this.addNavButton();
    }

    public goBack() {
        if (this.isInsideModalDialog()) {
            if (this._routerExtensions.canGoBackToPreviousPage()) {
                this._routerExtensions.backToPreviousPage();
            } else {
                this._modalDialogParams.closeCallback();
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
