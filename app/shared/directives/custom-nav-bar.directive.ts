import { Directive, Injector, NgZone, ApplicationRef } from "@angular/core";
import { ModalDialogParams, ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { ActionItem } from "tns-core-modules/ui/action-bar"
import { Page } from "tns-core-modules/ui/page/page";
import { ModalComponent } from "~/core/navigation/modal.component";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { ExtendedNavigationExtras } from "nativescript-angular/router/router-extensions";

@Directive({
    selector: "[customNavBar]"
})
export class CustomNavBarDirective {
    private params: ModalDialogParams;

    constructor(private injector: Injector,
        private modalDialogService: ModalDialogService,
        private appRef: ApplicationRef,
        private zone: NgZone,
        private page: Page,
        private _routerExtensions: RouterExtensions,
        private activatedRoute: ActivatedRoute) {
        this.page.actionBar.title = "";
        if (this.isInsideModalDialog()) {
            this.addNavButton();
        } else {
            this.page.actionBarHidden = true;
        }
    }

    public showNavigationBar() {
        this.page.actionBarHidden = !this.page.actionBarHidden;
    }

    public AddCustomButton(title: string, tapCallback: () => void): ActionItem {
        const btn = this.getButton(title);
        btn.on("tap", () => {
            tapCallback();
        });

        return btn;
    }

    public AddModalNavigationButton(title: string, path: string, params: string[]) {
        const btn = this.getButton(title);
        btn.on("tap", () => {
            const options: ModalDialogOptions = {
                context: {
                    path: path,
                    title: title,
                    params: params
                },
                fullscreen: true,
                // Access root viewContainerRef
                // https://github.com/angular/angular/issues/6446#issuecomment-173459525
                viewContainerRef: this.appRef.components[0].instance.viewContainerRef
            };

            this.zone.run(() => this.modalDialogService.showModal(ModalComponent, options))
        });
    }

    public AddCustomNavButton(title: string, command: any[], relative: boolean, tapCallback?: () => void) {
        tapCallback = tapCallback || (() => { });
        let extras: ExtendedNavigationExtras = {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        }

        if (relative) {
            extras.relativeTo = this.activatedRoute;
        }

        this.AddCustomButton(title, () => {
            tapCallback();
            this.zone.run(() => this._routerExtensions.navigate(command, extras));
        })
    }

    private getButton(buttonText: string): ActionItem {
        const actionItems = this.page.actionBar.actionItems.getItems();
        let actionItem = actionItems.find(actionItem => actionItem.text === buttonText);

        if (!actionItem) {
            actionItem = new ActionItem();
            actionItem.text = buttonText;
            this.page.actionBar.actionItems.addItem(actionItem);
        } else {
            actionItem.off("tap");
        }

        return actionItem;
    }

    private addNavButton() {
        if (this.page.actionBar.navigationButton) {
            return;
        }

        const btnText = "Done";
        const backButton  = this.AddCustomButton(btnText, () => this.params.closeCallback())
        if (backButton.ios) backButton.ios.position = "right";
    }

    private isInsideModalDialog() {
        try {
            // ModalDialogParams will resolve if inside a modal dialog
            this.params = this.injector.get(ModalDialogParams)
            return true;
        } catch (e) {
            return false;
        }
    }
}
