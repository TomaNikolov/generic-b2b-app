import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "~/shared/shared.module"

@Component({
	template: `
<GridLayout hideNavBar>
	<ScrollView>
		<Label text="Kinvey Studio" nsRouterLink="../home2" class="h2"></Label>
	</ScrollView>
</GridLayout>
`
})
export class HomeComponent {
	constructor() {
		console.log("HomeComponent")
	}

}

@Component({
	template: `
<GridLayout hideNavBar>
	<ScrollView>
		<Label text="Kinvey Studio 2" nsRouterLink="../home" class="h2"></Label>
	</ScrollView>
</GridLayout>
`
})
export class Home2Component {
	constructor() {
		console.log("Home2Component")
	}
}

@NgModule({
	imports: [
		SharedModule,
		NativeScriptRouterModule.forChild([
			{ path: "home", component: HomeComponent },
			{ path: "home2", component: Home2Component }
		])
	],
	declarations: [
		HomeComponent,
		Home2Component
	],
	schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
