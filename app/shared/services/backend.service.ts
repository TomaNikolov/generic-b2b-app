import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { last, catchError, shareReplay } from "rxjs/operators";
import { Kinvey } from "kinvey-nativescript-sdk";

@Injectable()
export class BackendService {
    constructor() {
        Kinvey.init();
    }

    login(username: string, password: string) {
        return Kinvey.User.login(username, password);
    }

    loginWithMIC(redirectUri: string, authorizationGrant?: Kinvey.AuthorizationGrant, options?: Kinvey.RequestOptions) {
        return Kinvey.User.loginWithMIC(redirectUri, authorizationGrant, options);
    }

    logout() {
        return Kinvey.User.logout();
    }

    signup(username: string, password: string) {
        return Kinvey.User.signup({ username, password });
    }

<<<<<<< HEAD
=======
    login(username: string, password: string) {
        return Kinvey.User.login(username, password);
    }

    loginWithMIC(redirectUri: string) {
        return Kinvey.User.loginWithMIC(redirectUri)
    }

>>>>>>> Initial loginWithMIC
    getActiveUser() {
        return Kinvey.User.getActiveUser();
    }

    resetPassword(email: string, options?: Kinvey.RequestOptions) {
        return Kinvey.User.resetPassword(email, options);
    }

    save(collectionName: string, item: any, dataStoreType?: Kinvey.DataStoreType, options?: Kinvey.RequestOptions) {
        return Kinvey.DataStore.collection(collectionName, dataStoreType).save(item, options);
    }

    find(collectionName: string, dataStoreType?: Kinvey.DataStoreType, query?: Kinvey.Query, options?: Kinvey.RequestOptions) {
        const observableResult = Kinvey.DataStore.collection(collectionName, dataStoreType).find(query, options);
        return this.cacheLast(observableResult);
    }

    findById(collectionName: string, id: string, dataStoreType?: Kinvey.DataStoreType, options?: Kinvey.RequestOptions) {
        const observableResult = Kinvey.DataStore.collection(collectionName, dataStoreType).findById(id, options);
        return this.cacheLast(observableResult);
    }

    private cacheLast(observable: Observable<any>) {
        return observable.pipe(
            catchError(_ => of(null)),
            last(value => !!value),
            shareReplay(1)
        );
    }
}
