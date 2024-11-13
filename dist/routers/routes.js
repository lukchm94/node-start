"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Version = exports.Routes = void 0;
var Routes;
(function (Routes) {
    Routes["root"] = "/";
    Routes["health"] = "/health";
    Routes["math"] = "/math";
})(Routes || (exports.Routes = Routes = {}));
var Version;
(function (Version) {
    Version["v1"] = "/v1";
    Version["v2"] = "/v2";
})(Version || (exports.Version = Version = {}));
