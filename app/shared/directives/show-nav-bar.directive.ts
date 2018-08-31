import { Directive, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Directive({
    selector: "[showNavBar]"
})
export class ShowNavBar implements OnInit {
    constructor(private page: Page) {}

    ngOnInit() {
        this.page.actionBarHidden = false;
    }
}
