import { LoggedInLazyLoadGuard } from "~/core/guard/logged-in-lazy-load.guard";

export const routes = {
    "tabs": [
        {
            "path": "",
            "redirectTo": "/(agendaTab:master/customer-list//customersTab:my-customers/customer-list//reportsTab:reports/reports-list//inboxTab:inbox/inbox-list)",
            "pathMatch": "full",
            canLoad: [LoggedInLazyLoadGuard],
        },
        {
            "path": "master",
            "outlet": "agendaTab",
            "loadChildren": "./agenda/customers.module#CustomersModule",
            canLoad: [LoggedInLazyLoadGuard],
        },
        {
            "path": "my-customers",
            "outlet": "customersTab",
            "loadChildren": "./my-customers/my-customers.module#MyCustomersModule",
            canLoad: [LoggedInLazyLoadGuard],
        },
        {
            "path": "reports",
            "outlet": "reportsTab",
            "loadChildren": "./reports/reports.module#ReportsModule",
            canLoad: [LoggedInLazyLoadGuard],
        },
        {
            "path": "inbox",
            "outlet": "inboxTab",
            "loadChildren": "./inbox/inbox.module#InboxModule",
            canLoad: [LoggedInLazyLoadGuard],
        }
    ],
    "modals": [
        {
            "path": "login",
            "loadChildren": "./login/login.module#LoginModule",
            "title": "login"
        },
        {
            "path": "profile",
            "loadChildren": "./profile#ProfileModule",
            "title": "Profile"
        },
        {
            "path": "place-order",
            "title": "Place Order",
            "loadChildren": "./place-order/place-order.module#PlaceOrderModule"
        }
    ]
}
