import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { InboxService } from "../shared/inbox.service";
import { NavigationService } from "~/shared/services/navigation.service";

@Component({
    selector: "InboxDetail",
    moduleId: module.id,
    templateUrl: "./inbox-detail.component.html"
})
export class InboxDetailComponent implements OnInit {
    private _message: any;

    constructor(
        private _inboxService: InboxService,
        private _activatedRoute: ActivatedRoute,
        private _navigationService: NavigationService,
    ) { }

    ngOnInit(): void {
        this._activatedRoute.params.subscribe(params => {
            const messageId = params.id;
            this._message = this._inboxService.getMessageById(messageId);
        });

    }

    get message(): any {
        return this._message;
    }

    goBack() {
        this._navigationService.relativeRouterNavigation(['../']);
    }
}
