const routesConfig = require("./routes-config.json");

export var config = {
    tabs: [
        ...(<any>routesConfig).tabs
    ],
    modals: [
        ...(<any>routesConfig).modals
    ]
};
