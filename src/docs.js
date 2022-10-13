import fs from 'fs';
import path from 'path';

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Playground with Koa and Swagger',
      version: '1.0.0',
    },
  },
  apis: ['./src/**/__docs__/**/*.yaml'],
};

const openapiSpecification = swaggerJsdoc(options);

fs.writeFileSync(
  path.join(__dirname, './openapi.json'),
  JSON.stringify(openapiSpecification, null, 2)
);
