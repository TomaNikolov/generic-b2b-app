import { Component } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application/application";
import { NavigationService } from "~/shared/services/navigation.service";

@Component({
	selector: "side-drawer-items",
	moduleId: module.id,
	templateUrl: "./side-drawer-items.component.html"
})
export class SideDrawerItemsComponent {
	constructor(private _navigationService: NavigationService) {
	}

	open(pageName: string): void {
		(<RadSideDrawer>app.getRootView()).closeDrawer();
		this._navigationService.navigateTo([pageName]);
	}
}


