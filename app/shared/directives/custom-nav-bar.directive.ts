import { Directive, Injector } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { ActionItem } from "tns-core-modules/ui/action-bar"
import { Page } from "tns-core-modules/ui/page";

@Directive({
    selector: "[customNavBar]"
})
export class CustomNavBarDirective {
    private params: ModalDialogParams;

    constructor(private injector: Injector,
        private page: Page) {
        console.log("asdsad")
        if (this.isInsideModalDialog()) {
            this.page.actionBar.title = this.params.context.title;
            this.addNavButton();
        } else {
            this.page.actionBarHidden = true;
        }
    }

    private addNavButton() {
        if (this.page.actionBar.navigationButton) {
            return;
        }

        const backButton = new ActionItem();

        if (backButton.ios) backButton.ios.position = "right";
        backButton.text = "Done";
        backButton.on("tap", () => this.params.closeCallback());

        this.page.actionBar.actionItems.addItem(backButton);
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