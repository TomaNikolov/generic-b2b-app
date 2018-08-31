import { Component, OnDestroy, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ActivatedRoute } from "@angular/router";
import { ListViewEventData } from "nativescript-ui-listview";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";

import { InboxService } from "./shared/inbox.service";
import { NavigationService } from "~/shared/services/navigation.service";

@Component({
    selector: "InboxList",
    moduleId: module.id,
    templateUrl: "./inbox-list.component.html"
})
export class InboxListComponent implements OnInit, OnDestroy {
    private _isLoading: boolean = false;
    private _messages: ObservableArray<any> = new ObservableArray<any>([]);
    private _dataSubscription: Subscription;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _inboxService: InboxService,
        private _navigationService: NavigationService,

    ) { }

    ngOnInit(): void {
        if (!this._dataSubscription) {
            this._isLoading = true;

            this._dataSubscription = this._inboxService.load()
                .pipe(finalize(() => this._isLoading = false))
                .subscribe(messages => {
                    this._messages = new ObservableArray(messages);
                    this._isLoading = false;
                });
        }
    }

    ngOnDestroy(): void {
        if (this._dataSubscription) {
            this._dataSubscription.unsubscribe();
            this._dataSubscription = null;
        }
    }

    get messages(): ObservableArray<any> {
        return this._messages;
    }

    get isLoading(): boolean {
        return this._isLoading;
    }

    onMessageItemTap(args: ListViewEventData): void {
        const tappedInboxItem = args.view.bindingContext;
        this._navigationService.relativeRouterNavigation(["../inbox-detail", tappedInboxItem._id], this._activatedRoute);
    }
}
