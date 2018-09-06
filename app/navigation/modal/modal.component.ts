import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
	template: "<page-router-outlet></page-router-outlet>"
})
export class ModalComponent implements OnInit {
	constructor(private routerExtensions: RouterExtensions,
		private activatedRoute: ActivatedRoute,
		private params: ModalDialogParams) {
	}

	ngOnInit(): void {
		this.routerExtensions.navigate(this.params.context.command, { relativeTo: this.activatedRoute });
	}
}
