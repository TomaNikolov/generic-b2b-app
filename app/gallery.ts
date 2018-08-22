import { Component, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "~/shared/shared.module";

@Component({
    selector: "Gallery",
    template: `
<GridLayout hideNavBar>
	<ScrollView>
		<Label text="Gallery" class="h2"></Label>
	</ScrollView>
</GridLayout>
`
})
export class GalleryComponent {
    constructor() {
		console.log("GalleryComponent")
	}
}

@NgModule({
    imports: [
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: GalleryComponent }
        ])
    ],
    declarations: [
        GalleryComponent
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class GalleryModule { }
