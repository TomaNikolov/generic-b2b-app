import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { switchMap } from "rxjs/operators";
import { ObservableArray } from "data/observable-array";
import { ActivatedRoute } from '@angular/router';

import { InboxService } from "../shared/inbox.service";

@Component({
    selector: "InboxDetail",
    moduleId: module.id,
    templateUrl: "./inbox-detail.component.html"
})
export class InboxDetailComponent implements OnInit {
    private _message: any;

    constructor(
        private _inboxService: InboxService,
        private activatedRoute: ActivatedRoute,
        private _pageRoute: PageRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(params => {
            const messageId = params.id;
            this._message = this._inboxService.getMessageById(messageId);
        });

    }

    get message(): any {
        return this._message;
    }
}
