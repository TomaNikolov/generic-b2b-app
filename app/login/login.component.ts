import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs/dialogs";
import { Page } from "tns-core-modules/ui/page/page";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import * as app from "tns-core-modules/application/application";

import { User } from "~/models/user.model";
import { UserService } from "~/shared/services/user.service";


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

	constructor(private page: Page, private userService: UserService, private params: ModalDialogParams) {
		this.page.actionBarHidden = true;
		this.user = new User();
		this.user.password = "admin";
		this.user.username = "admin"
	}

	ngOnInit(): void {
		if (app.android) {
			this.page.on("loaded", () => {
				this.page.frame.on("activityBackPressed", (args: any) => {
					args.cancel = true;
					// global.android.os.Process.killProcess(global.android.os.Process.myPid());
					app.android.foregroundActivity.moveTaskToBack(true);
				});
			});
		}
	}


	toggleForm() {
		this.isLoggingIn = !this.isLoggingIn;
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
		this.userService.login(this.user)
			.then(() => {
				this.params.closeCallback(this.user);
			})
			.catch(() => {
				this.alert("Unfortunately we could not find your account.");
			});
	}

	register() {
		if (this.user.password != this.user.confirmPassword) {
			this.alert("Your passwords do not match.");
			return;
		}
		this.userService.register(this.user)
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
				this.userService.resetPassword(data.text.trim())
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

	alert(message: string) {
		return alert({
			title: "Acme Trader",
			okButtonText: "OK",
			message: message
		});
	}
}

