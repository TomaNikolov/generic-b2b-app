import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "./shared/shared.module"

@Component({
    template: `
<GridLayout modalNavBar>
	<ScrollView>
		<Label text="Profile" class="h2"></Label>
	</ScrollView>
</GridLayout>
`
})
export class ProfileComponent { }

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: ProfileComponent }
        ])
    ],
    entryComponents: [
        ProfileComponent
    ],
    declarations: [
        ProfileComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class ProfileModule { }