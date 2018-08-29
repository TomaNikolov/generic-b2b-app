import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";
import { Kinvey } from "kinvey-nativescript-sdk";

@Injectable()
export class LoggedInLazyLoadGuard implements CanLoad {
    canLoad(): boolean {
        return !!Kinvey.User.getActiveUser();
    }
}