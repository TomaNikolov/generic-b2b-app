import { Injectable } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";

@Injectable()
export class BackendService {
    constructor() {
        this.init();
    }

    logout() {
        return Kinvey.User.logout();
    }

    signup(username: string, password: string) {
        return Kinvey.User.signup({ username, password });
    }

    login(username: string, password: string) {
        return Kinvey.User.login(username, password);
    }

    getActiveUser() {
        return Kinvey.User.getActiveUser();
    }

    getAllElements(collectionName: string) {
        return Kinvey.DataStore.collection(collectionName).find();
    }

    resetPassword(email: string) {
        return Kinvey.User.resetPassword(email);
    }

    save(collectionName: string, obj: any) {
        return Kinvey.DataStore.collection(collectionName).save(obj);
    }

    private init() {
        return Kinvey.init();
    }
}
