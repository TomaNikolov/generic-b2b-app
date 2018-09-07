import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/directives/dialogs";
import * as app from "tns-core-modules/application/application";

import { User } from "~/shared/models/user.model";
import { UserService } from "~/core/services/user.service";
import { Page } from "tns-core-modules/ui/page/page";


@Component({
	selector: "anonymous-login",
	moduleId: module.id,
	templateUrl: "./anonymous-login.component.html"
})
export class AnonymousLoginComponent implements OnInit {
	private user: User;

	constructor(
		private _page: Page,
		private _userService: UserService,
		private _params: ModalDialogParams) {
		this.user = new User();
		this.user.password = "";
		this.user.username = ""
	}

	ngOnInit(): void {
		if (app.android) {
			this._page.on("loaded", () => {
				this._page.frame.on("activityBackPressed", (args: any) => {
					args.cancel = true;
					app.android.foregroundActivity.moveTaskToBack(true);
				});
			});
		}

		this._userService.register(this.user)
			.then(() => {
				this._params.closeCallback();
			})
			.catch(() => {
				console.log("Unfortunately we were unable to create your account.");
			});
	}
}

