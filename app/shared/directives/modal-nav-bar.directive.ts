import { Directive } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { ActionItem } from "tns-core-modules/ui/action-bar/action-bar"
import { Page } from "tns-core-modules/ui/page/page";

@Directive({
    selector: "[modalNavBar]"
})
export class ModalNavBarDirective {
    constructor(private params: ModalDialogParams,
                private page: Page) {
        this.page.actionBar.title = this.params.context.title;
        this.addNavButton();
    }

    private addNavButton() {
        if (this.page.actionBar.navigationButton) {
            return;
        }

        const backButton = new ActionItem();

        backButton.ios.position = "right";
        backButton.text = "Done";
        backButton.on("tap", () => this.params.closeCallback());

        this.page.actionBar.actionItems.addItem(backButton);
    }
}
