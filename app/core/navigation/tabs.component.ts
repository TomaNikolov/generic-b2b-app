import { Component } from "@angular/core";
import * as platform from "tns-core-modules/platform";

@Component({
    selector: "tabs",
    templateUrl: "./core/navigation/tabs.component.html"
})
export class TabsComponent {
    onTabViewLoaded({ object: tabView }) {
        if (platform.isAndroid) {
            return;
        }

        tabView.eachChild((child) => {
            const tabBarItem = child.__controller.tabBarItem;
            tabBarItem.titlePositionAdjustment = { horizontal: 0, vertical: -11 };
        });
    }
}