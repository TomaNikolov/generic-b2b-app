import { Injectable } from "@angular/core";
import { User } from "~/models/user.model";
import { BackendService } from "./backend.service";

@Injectable()
export class UserService {
    constructor(private backendService: BackendService) { }
    register(user: User) {
        return new Promise((resolve, reject) => {
            this.backendService.logout()
                .then(() => {
                    this.backendService.signup(user.username, user.password)
                        .then(resolve)
                        .catch((error) => { this.handleErrors(error); reject(); })
                })
                .catch((error) => { this.handleErrors(error); reject(); })
        });
    }

    login(user: User) {
        return new Promise((resolve, reject) => {
            this.backendService.logout()
                .then(() => {
                    this.backendService.login(user.username, user.password)
                        .then(resolve)
                        .catch((error) => { this.handleErrors(error); reject(); })
                })
                .catch((error) => { this.handleErrors(error); reject(); })
        });
    }

    logout(): Promise<void> {
        return this.backendService.logout();
    }

    resetPassword(email) {
        return this.backendService.resetPassword(email)
            .catch(this.handleErrors);
    }

    handleErrors(error) {
        console.error(error.message);
    }

    isLoggedIn(): boolean {
        const user = this.backendService.getActiveUser();
        return !!user
    }

    loginWithMIC(redirectUri: string) {
        return this.backendService.loginWithMIC(redirectUri);
    }
}
