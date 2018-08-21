"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var routesConfig = require("./routes-config.json");
exports.config = {
    tabs: routesConfig.tabs.slice(),
    modals: routesConfig.modals.slice()
};
