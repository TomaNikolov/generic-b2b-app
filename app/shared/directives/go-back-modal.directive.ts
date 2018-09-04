import { Directive, Injector } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";

@Directive({
    selector: "[goBack]",

})
export class GoBackModalDirective {
    private _modalDialogParams: ModalDialogParams;

    constructor(private _injector: Injector,
        private _routerExtensions: RouterExtensions) { }

    public goBack() {
        debugger;
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
}
