import { Directive, Injector, NgZone, ApplicationRef } from "@angular/core";
import { ModalDialogParams, ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { ActionItem } from "tns-core-modules/ui/action-bar"
import { Page } from "tns-core-modules/ui/page/page";
import { ModalComponent } from "~/core/navigation/modal.component";

@Directive({
    selector: "[customNavBar]"
})
export class CustomNavBarDirective {
    private params: ModalDialogParams;

    constructor(private injector: Injector,
        private modalDialogService: ModalDialogService,
        private appRef: ApplicationRef,
        private zone: NgZone,
        private page: Page) {
        if (this.isInsideModalDialog()) {
            this.page.actionBar.title = this.params.context.title;
            this.addNavButton();
        } else {
            this.page.actionBarHidden = true;
        }
    }

    public toggleNavigationBar() {
        this.page.actionBarHidden = !this.page.actionBarHidden;
    }

    public AddModalNavigationButton(title: string, path: string, params: string[]) {
        const backButton = new ActionItem();
        backButton.text = title;
        backButton.on("tap", () => {
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

        this.page.actionBar.actionItems.addItem(backButton);
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
