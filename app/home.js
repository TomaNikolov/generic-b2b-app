"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var shared_module_1 = require("./shared/shared.module");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            template: "\n<GridLayout hideNavBar>\n\t<ScrollView>\n\t\t<Label text=\"Kinvey Studio\" nsRouterLink=\"../home2\" class=\"h2\"></Label>\n\t</ScrollView>\n</GridLayout>\n"
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
var Home2Component = /** @class */ (function () {
    function Home2Component() {
    }
    Home2Component = __decorate([
        core_1.Component({
            template: "\n<GridLayout hideNavBar>\n\t<ScrollView>\n\t\t<Label text=\"Kinvey Studio 2\" nsRouterLink=\"../home\" class=\"h2\"></Label>\n\t</ScrollView>\n</GridLayout>\n"
        })
    ], Home2Component);
    return Home2Component;
}());
exports.Home2Component = Home2Component;
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([
                    { path: "home", component: HomeComponent },
                    { path: "home2", component: Home2Component }
                ])
            ],
            declarations: [
                HomeComponent,
                Home2Component
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBc0U7QUFDdEUsc0RBQXVFO0FBQ3ZFLHdEQUFxRDtBQVdyRDtJQUFBO0lBQ0EsQ0FBQztJQURZLGFBQWE7UUFUekIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxnS0FNVjtTQUNBLENBQUM7T0FDVyxhQUFhLENBQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSxzQ0FBYTtBQVkxQjtJQUFBO0lBQ0EsQ0FBQztJQURZLGNBQWM7UUFUMUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxpS0FNVjtTQUNBLENBQUM7T0FDVyxjQUFjLENBQzFCO0lBQUQscUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSx3Q0FBYztBQWlCM0I7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQWR0QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUU7Z0JBQ1IsNEJBQVk7Z0JBQ1osaUNBQXdCLENBQUMsUUFBUSxDQUFDO29CQUNqQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRTtvQkFDMUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUU7aUJBQzVDLENBQUM7YUFDRjtZQUNELFlBQVksRUFBRTtnQkFDYixhQUFhO2dCQUNiLGNBQWM7YUFDZDtZQUNELE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzNCLENBQUM7T0FDVyxVQUFVLENBQUk7SUFBRCxpQkFBQztDQUFBLEFBQTNCLElBQTJCO0FBQWQsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tIFwiLi9zaGFyZWQvc2hhcmVkLm1vZHVsZVwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHR0ZW1wbGF0ZTogYFxyXG48R3JpZExheW91dCBoaWRlTmF2QmFyPlxyXG5cdDxTY3JvbGxWaWV3PlxyXG5cdFx0PExhYmVsIHRleHQ9XCJLaW52ZXkgU3R1ZGlvXCIgbnNSb3V0ZXJMaW5rPVwiLi4vaG9tZTJcIiBjbGFzcz1cImgyXCI+PC9MYWJlbD5cclxuXHQ8L1Njcm9sbFZpZXc+XHJcbjwvR3JpZExheW91dD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHRlbXBsYXRlOiBgXHJcbjxHcmlkTGF5b3V0IGhpZGVOYXZCYXI+XHJcblx0PFNjcm9sbFZpZXc+XHJcblx0XHQ8TGFiZWwgdGV4dD1cIktpbnZleSBTdHVkaW8gMlwiIG5zUm91dGVyTGluaz1cIi4uL2hvbWVcIiBjbGFzcz1cImgyXCI+PC9MYWJlbD5cclxuXHQ8L1Njcm9sbFZpZXc+XHJcbjwvR3JpZExheW91dD5cclxuYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZTJDb21wb25lbnQge1xyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG5cdGltcG9ydHM6IFtcclxuXHRcdFNoYXJlZE1vZHVsZSxcclxuXHRcdE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXHJcblx0XHRcdHsgcGF0aDogXCJob21lXCIsIGNvbXBvbmVudDogSG9tZUNvbXBvbmVudCB9LFxyXG5cdFx0XHR7IHBhdGg6IFwiaG9tZTJcIiwgY29tcG9uZW50OiBIb21lMkNvbXBvbmVudCB9XHJcblx0XHRdKVxyXG5cdF0sXHJcblx0ZGVjbGFyYXRpb25zOiBbXHJcblx0XHRIb21lQ29tcG9uZW50LFxyXG5cdFx0SG9tZTJDb21wb25lbnRcclxuXHRdLFxyXG5cdHNjaGVtYXM6IFtOT19FUlJPUlNfU0NIRU1BXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH0iXX0=