"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_server_1 = require("@hono/node-server");
var index_js_1 = require("./index.js");
(0, node_server_1.serve)(index_js_1.default, function (info) {
    console.log("Sever is runnig on localhost:".concat(info.port));
});
