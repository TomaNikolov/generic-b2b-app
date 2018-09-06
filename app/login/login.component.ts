import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs/dialogs";
import { Page } from "tns-core-modules/ui/page/page";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import * as app from "tns-core-modules/application/application";

import { User } from "~/shared/models/user.model";
import { UserService } from "~/core/services/user.service";
import { NavigationButton } from "tns-core-modules/ui/action-bar/action-bar";
import { NgZone } from "@angular/core";
import { NavigationStart } from "@angular/router";
import { NavigatedData } from "tns-core-modules/ui/frame/frame";
import { of, Subject } from "rxjs";


@Component({
	selector: "app-login",
	moduleId: module.id,
	templateUrl: "./login.component.html",
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	isLoggingIn = true;
	user: User;
	@ViewChild("password") password: ElementRef;
	@ViewChild("confirmPassword") confirmPassword: ElementRef;

	constructor(private _page: Page,
		private _userService: UserService,
		private _zone: NgZone,
		private _params: ModalDialogParams) {
		this.user = new User();
		this.user.password = "admin";
		this.user.username = "admin";
	}

	androidBackButtonCallback(args: any) {
		args.cancel = true;
		app.android.foregroundActivity.moveTaskToBack(true);
	}

	ngOnInit(): void {
		if (app.android) {
			this._page.on("loaded", (d) => {
				this._page.frame.on("activityBackPressed", this.androidBackButtonCallback);
			});
		}
	}

	toggleForm() {
		this.isLoggingIn = !this.isLoggingIn;
	}

	submitWithMic() {
		this.proceedWithLogin(this._userService.loginWithMIC('http://example.com'));
		this._page.frame.removeEventListener("activityBackPressed", this.androidBackButtonCallback);
	}

	submit() {
		if (!this.user.username || !this.user.password) {
			this.alert("Please provide both an email address and password.");
			return;
		}

		if (this.isLoggingIn) {
			this.login();
		} else {
			this.register();
		}
	}

	login() {
		this.proceedWithLogin(this._userService.login(this.user));
	}

	register() {
		if (this.user.password != this.user.confirmPassword) {
			this.alert("Your passwords do not match.");
			return;
		}
		this._userService.register(this.user)
			.then(() => {
				this.alert("Your account was successfully created.");
				this.isLoggingIn = true;
			})
			.catch(() => {
				this.alert("Unfortunately we were unable to create your account.");
			});
	}

	forgotPassword() {
		prompt({
			title: "Forgot Password",
			message: "Enter the email address you used to register for Acme Trader to reset your password.",
			inputType: "email",
			defaultText: "",
			okButtonText: "Ok",
			cancelButtonText: "Cancel"
		}).then((data) => {
			if (data.result) {
				this._userService.resetPassword(data.text.trim())
					.then(() => {
						this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
					}).catch(() => {
						this.alert("Unfortunately, an error occurred resetting your password.");
					});
			}
		});
	}

	focusPassword() {
		this.password.nativeElement.focus();
	}

	focusConfirmPassword() {
		if (!this.isLoggingIn) {
			this.confirmPassword.nativeElement.focus();
		}
	}

	private proceedWithLogin(loginPromise: Promise<any>) {
		loginPromise
			.then(() => {
				this._zone.run(() => this._params.closeCallback(this.user));
			})
			.catch(() => {
				this.alert("Unfortunately we could not find your account.");
			});
	}

	alert(message: string) {
		return alert({
			title: "Acme Trader",
			okButtonText: "OK",
			message: message
		});
	}
}

