import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms"

import { CoreModule } from "~/core/core.module"
import { AppRoutingModule } from "~/app-routing.module"
import { AppComponent } from "~/app.component";

import { SideDrawerItemsComponent } from "~/navigation/side-drawer/side-drawer-items.component"
import { TabsComponent } from "~/navigation/tabs/tabs.component";
import { ModalComponent } from "~/navigation/modal/modal.component";

@NgModule({
    bootstrap: [AppComponent],
    entryComponents: [
        ModalComponent,
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,

        AppRoutingModule,
        CoreModule
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
