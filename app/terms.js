"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("./shared/shared.module");
var TermsComponent = /** @class */ (function () {
    function TermsComponent() {
    }
    TermsComponent = __decorate([
        core_1.Component({
            template: "\n<GridLayout modalNavBar>\n\t<ScrollView>\n\t\t<Label text=\"Terms\" nsRouterLink=\"../terms2\" class=\"h2\"></Label>\n\t</ScrollView>\n</GridLayout>\n"
        })
    ], TermsComponent);
    return TermsComponent;
}());
exports.TermsComponent = TermsComponent;
var Terms2Component = /** @class */ (function () {
    function Terms2Component() {
    }
    Terms2Component = __decorate([
        core_1.Component({
            template: "\n<GridLayout modalNavBar>\n\t<ScrollView>\n\t\t<Label text=\"Terms 2\" nsRouterLink=\"../terms\" class=\"h2\"></Label>\n\t</ScrollView>\n</GridLayout>\n"
        })
    ], Terms2Component);
    return Terms2Component;
}());
exports.Terms2Component = Terms2Component;
var TermsModule = /** @class */ (function () {
    function TermsModule() {
    }
    TermsModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
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
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], TermsModule);
    return TermsModule;
}());
exports.TermsModule = TermsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVybXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXJtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzRTtBQUN0RSxzREFBdUU7QUFDdkUsd0RBQXFEO0FBV3JEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBVDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsMEpBTWI7U0FDQSxDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYztBQVczQjtJQUFBO0lBQStCLENBQUM7SUFBbkIsZUFBZTtRQVQzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLDJKQU1iO1NBQ0EsQ0FBQztPQUNXLGVBQWUsQ0FBSTtJQUFELHNCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsMENBQWU7QUFxQjVCO0lBQUE7SUFBMkIsQ0FBQztJQUFmLFdBQVc7UUFuQnZCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCw0QkFBWTtnQkFDWixpQ0FBd0IsQ0FBQyxRQUFRLENBQUM7b0JBQzlCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFO29CQUNqQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGNBQWMsRUFBRTtvQkFDNUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUU7aUJBQ2pELENBQUM7YUFDTDtZQUNELGVBQWUsRUFBRTtnQkFDYixjQUFjO2dCQUNkLGVBQWU7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsY0FBYztnQkFDZCxlQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLFdBQVcsQ0FBSTtJQUFELGtCQUFDO0NBQUEsQUFBNUIsSUFBNEI7QUFBZixrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gXCIuL3NoYXJlZC9zaGFyZWQubW9kdWxlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgdGVtcGxhdGU6IGBcclxuPEdyaWRMYXlvdXQgbW9kYWxOYXZCYXI+XHJcblx0PFNjcm9sbFZpZXc+XHJcblx0XHQ8TGFiZWwgdGV4dD1cIlRlcm1zXCIgbnNSb3V0ZXJMaW5rPVwiLi4vdGVybXMyXCIgY2xhc3M9XCJoMlwiPjwvTGFiZWw+XHJcblx0PC9TY3JvbGxWaWV3PlxyXG48L0dyaWRMYXlvdXQ+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlcm1zQ29tcG9uZW50IHsgfVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICB0ZW1wbGF0ZTogYFxyXG48R3JpZExheW91dCBtb2RhbE5hdkJhcj5cclxuXHQ8U2Nyb2xsVmlldz5cclxuXHRcdDxMYWJlbCB0ZXh0PVwiVGVybXMgMlwiIG5zUm91dGVyTGluaz1cIi4uL3Rlcm1zXCIgY2xhc3M9XCJoMlwiPjwvTGFiZWw+XHJcblx0PC9TY3JvbGxWaWV3PlxyXG48L0dyaWRMYXlvdXQ+XHJcbmBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRlcm1zMkNvbXBvbmVudCB7IH1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCJ0ZXJtc1wiIH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJ0ZXJtc1wiLCBjb21wb25lbnQ6IFRlcm1zQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJ0ZXJtczJcIiwgY29tcG9uZW50OiBUZXJtczJDb21wb25lbnQgfVxyXG4gICAgICAgIF0pXHJcbiAgICBdLFxyXG4gICAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICAgICAgVGVybXNDb21wb25lbnQsXHJcbiAgICAgICAgVGVybXMyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVGVybXNDb21wb25lbnQsXHJcbiAgICAgICAgVGVybXMyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXJtc01vZHVsZSB7IH1cclxuIl19