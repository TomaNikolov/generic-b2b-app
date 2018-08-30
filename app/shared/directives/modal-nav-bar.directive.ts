import { Directive } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import { ActionItem } from "tns-core-modules/ui/action-bar/action-bar"
import { Page, EventData } from "tns-core-modules/ui/page/page";
import * as app from "tns-core-modules/application/application";

@Directive({
    selector: "[modalNavBar]"
})
export class ModalNavBarDirective {
    constructor(private params: ModalDialogParams,
        private page: Page,
        private _routerExtensions: RouterExtensions) {
        this.page.actionBar.title = this.params.context.title;
        this.addNavButton();
    }

    public AddCustomNavButton(title: string,  tapCallback: (args: EventData) => void) {
        const backButton = new ActionItem();
        backButton.text = title;
        backButton.on("tap", tapCallback);
        this.page.actionBar.actionItems.addItem(backButton);
    }

    private addNavButton() {
        if (this.page.actionBar.navigationButton) {
            return;
        }

        const backButton = new ActionItem();

        if (app.ios) {
            backButton.ios.position = "right";
        }
        backButton.text = "Done";
        backButton.on("tap", () => this.params.closeCallback());

        this.page.actionBar.actionItems.addItem(backButton);
    }
}
