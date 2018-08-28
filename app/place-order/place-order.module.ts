import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";

import { SharedModule } from "~/shared/shared.module"
import { PlaceOrderListComponent } from "~/place-order/place-order-list.component";
import { PlaceOrderRoutingModule } from "~/place-order/place-order-routing.module";
import { ProductsService } from "~/place-order/shared/products.service";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { QuestionableBooleanPipe } from '~/place-order/pipes/questionable-boolean.pipe';

@NgModule({
    imports: [
        SharedModule,
        PlaceOrderRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        NativeScriptUIListViewModule,
        NativeScriptHttpModule,
        NativeScriptUIDataFormModule
    ],
    declarations: [
        PlaceOrderListComponent,
        QuestionableBooleanPipe,
    ],
    entryComponents: [
        PlaceOrderListComponent
    ],
    providers: [
        ProductsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PlaceOrderModule { }
