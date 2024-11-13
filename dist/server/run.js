"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const routes_1 = require("../routers/routes");
const options_1 = __importDefault(require("../routers/swagger/options"));
const impl_1 = __importDefault(require("../routers/v1/impl"));
const impl_2 = __importDefault(require("../routers/v2/impl"));
const app = (0, express_1.default)();
const PORT = parseInt(process.env.PORT || '3000');
app.use(express_1.default.json());
app.use(routes_1.Routes.apiDocs, swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(options_1.default));
app.use(routes_1.Version.v1, impl_1.default);
app.use(routes_1.Version.v2, impl_2.default);
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
