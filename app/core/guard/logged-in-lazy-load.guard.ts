import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";
import { BackendService } from "~/core/services/backend.service";

@Injectable()
export class LoggedInLazyLoadGuard implements CanLoad {
    constructor(private backendService: BackendService) { }

    canLoad(): boolean {
        return !!this.backendService.getActiveUser();
    }
}
