"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0', // Specify the version of OpenAPI
        info: {
            title: 'Node JS Learnings App', // API title
            version: '1.0.0', // API version
            description: 'This is the API documentation for the Math Operations App', // API description
        },
    },
    // Path to the API docs (JSDoc comments)
    apis: ['./src/routers/**/*.ts'], // Point to your router files where you have JSDoc
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
