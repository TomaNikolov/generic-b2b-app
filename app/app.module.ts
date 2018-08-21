import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { SharedModule } from "./shared/shared.module"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component";

import { SideDrawerItemsComponent } from "./core/navigation/side-drawer-items.component"
import { TabsComponent } from "./core/navigation/tabs.component"
import { ModalComponent } from "./core/navigation/modal.component";

@NgModule({
    bootstrap: [AppComponent],
    entryComponents: [
        ModalComponent,
    ],
    imports: [
        NativeScriptModule,
        SharedModule,
        AppRoutingModule,

        NativeScriptUISideDrawerModule,
    ],
    declarations: [
        AppComponent,

        SideDrawerItemsComponent,
        TabsComponent,
        ModalComponent,
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
