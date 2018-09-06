import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BackendService } from "~/core/services/backend.service";

@Injectable()
export class InboxService {
    private _messages: any[] = [];

    constructor(private backendService: BackendService) { }

    getMessageById(id: string): any {
        if (!id) {
            return;
        }

        return this._messages.filter(customer => customer._id === id)[0];
    }

    load(): Observable<any> {
        const messages = this.backendService.find('messages');
        messages.subscribe(messagesData => {
            this._messages = messagesData;
        });

        return messages;
    }
}
