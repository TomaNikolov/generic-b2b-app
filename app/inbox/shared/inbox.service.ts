import { Injectable, NgZone } from "@angular/core";
import { Http } from "@angular/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
const Kinvey = require("kinvey-nativescript-sdk").Kinvey;

Kinvey.init();

@Injectable()
export class InboxService {
    private _messages: any[] = [];

    constructor(private _ngZone: NgZone) { }

    getMessageById(id: string): any {
        if (!id) {
            return;
        }

        return this._messages.filter(customer => customer._id === id)[0];
    }

    load(): Observable<any> {
        const messages = Kinvey.DataStore.collection('messages').find();
        messages.subscribe(messagesData => {
            this._messages = messagesData;
        });

        return messages;
    }
}
