import { Directive, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Directive({
    selector: "[hideNavBar]"
})
export class HideNavBar implements OnInit {
    constructor(private page: Page) {
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }
}
