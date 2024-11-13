declare module 'swagger-jsdoc' {
  interface SwaggerJsdocOptions {
    definition: object;
    apis: string[];
  }

  const swaggerJsdoc: (options: SwaggerJsdocOptions) => object;

  export = swaggerJsdoc;
}
