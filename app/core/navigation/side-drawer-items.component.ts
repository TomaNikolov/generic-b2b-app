import { Component, ViewContainerRef, Input } from "@angular/core";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/directives/dialogs";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application/application";

import { ModalComponent } from "~/core/navigation/modal.component";
import { config } from "~/core/routes-config"

@Component({
	selector: "side-drawer-items",
	moduleId: module.id,
	templateUrl: "./side-drawer-items.component.html"
})
export class SideDrawerItemsComponent {
	constructor(private modalDialogService: ModalDialogService,
		private viewContainerRef: ViewContainerRef) {
	}

	open(pageName: string): Promise<any> {
		const options: ModalDialogOptions = {
			context: {
				path: pageName,
				title: config.modals.find((route) => route.path === pageName).title
			},
			fullscreen: true,
			viewContainerRef: this.viewContainerRef
		};

		(<RadSideDrawer>app.getRootView()).closeDrawer();

		return this.modalDialogService.showModal(ModalComponent, options)
	}
}


