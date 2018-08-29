import { Component, OnDestroy, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData } from "nativescript-ui-listview";
import { Subscription } from "rxjs";
import { finalize } from "rxjs/operators";

import { InboxService } from "./shared/inbox.service";

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
        private activatedRoute: ActivatedRoute,
        private _inboxService: InboxService,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        console.log("HERE?")
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

        // TODO: Transisions don't work when in tabs (they do in modals though)
        this._routerExtensions.navigate(["../inbox-detail", tappedInboxItem._id],
            {
                relativeTo: this.activatedRoute,
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }
}
