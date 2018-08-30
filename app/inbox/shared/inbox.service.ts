import { Injectable, NgZone } from "@angular/core";
import { Http } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { BackendService } from "../../shared/services/backend.service";

@Injectable()
export class InboxService {
    private _messages: any[] = [];

    constructor(private _ngZone: NgZone,
        private backendService: BackendService) { }

    getMessageById(id: string): any {
        if (!id) {
            return;
        }

        return this._messages.filter(customer => customer._id === id)[0];
    }

    load(): Observable<any> {
        const messages = this.backendService.getAllElements('messages');
        messages.subscribe(messagesData => {
            this._messages = messagesData;
        });

        return messages;
    }
}
