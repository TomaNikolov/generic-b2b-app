import { Directive, ViewContainerRef, TemplateRef } from '@angular/core';
import * as app from "tns-core-modules/application/application";

@Directive({ selector: "[ifAndroid]" })
export class IfAndroidDirective {
	constructor(container: ViewContainerRef, templateRef: TemplateRef<Object>) {
		if (app.android) {
			container.createEmbeddedView(templateRef);
		}
	}
}

@Directive({ selector: "[ifIos]" })
export class IfIosDirective {
	constructor(container: ViewContainerRef, templateRef: TemplateRef<Object>) {
		if (app.ios) {
			container.createEmbeddedView(templateRef);
		}
	}
}
