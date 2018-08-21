import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "./shared/shared.module"

@Component({
    template: `
<GridLayout modalNavBar>
	<ScrollView>
		<Label text="Terms" nsRouterLink="../terms2" class="h2"></Label>
	</ScrollView>
</GridLayout>
`
})
export class TermsComponent { }

@Component({
    template: `
<GridLayout modalNavBar>
	<ScrollView>
		<Label text="Terms 2" nsRouterLink="../terms" class="h2"></Label>
	</ScrollView>
</GridLayout>
`
})
export class Terms2Component { }

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "terms" },
            { path: "terms", component: TermsComponent },
            { path: "terms2", component: Terms2Component }
        ])
    ],
    entryComponents: [
        TermsComponent,
        Terms2Component
    ],
    declarations: [
        TermsComponent,
        Terms2Component
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TermsModule { }
