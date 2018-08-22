import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";

import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptFormsModule } from "nativescript-angular/forms"

import { SharedModule } from "~/shared/shared.module"
import { AppRoutingModule } from "~/app-routing.module"
import { AppComponent } from "~/app.component";

import { SideDrawerItemsComponent } from "~/core/navigation/side-drawer-items.component"
import { TabsComponent } from "~/core/navigation/tabs.component";
import { ModalComponent } from "~/core/navigation/modal.component";

import { UserService } from "~/shared/services/user.service";

@NgModule({
    bootstrap: [AppComponent],
    entryComponents: [
        ModalComponent,
    ],
    imports: [
        NativeScriptModule,
        SharedModule,
        AppRoutingModule,

        NativeScriptFormsModule,
        NativeScriptUISideDrawerModule,
    ],
    declarations: [
        AppComponent,

        SideDrawerItemsComponent,
        TabsComponent,
        ModalComponent,
    ],
    providers: [
        UserService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
