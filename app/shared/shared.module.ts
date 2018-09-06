import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { ShowNavBar } from "~/shared/directives/show-nav-bar.directive";
import { HideNavBar } from "~/shared/directives/hide-nav-bar.directive";
import { GoBackModalDirective } from "~/shared/directives/go-back-modal.directive";
import { IfAndroidDirective, IfIosDirective } from "~/shared/directives/if-platform.directive";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,
    ],
    exports: [
        NativeScriptCommonModule,
        NativeScriptUIListViewModule,

        GoBackModalDirective,
        ShowNavBar,
        HideNavBar,
        IfAndroidDirective,
        IfIosDirective
    ],
    declarations: [
        GoBackModalDirective,
        ShowNavBar,
        HideNavBar,
        IfAndroidDirective,
        IfIosDirective
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
