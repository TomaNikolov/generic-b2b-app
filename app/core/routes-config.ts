import * as routesConfig from "./routes-config.json";

export var config = {
    tabs: [
        ...(<any>routesConfig).tabs
    ],
    modals: [
        ...(<any>routesConfig).modals
    ]
};