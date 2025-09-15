import type { OpenAPIV3 } from 'openapi-types';

import { Options } from '../options';
import { createResponse } from '../schemas';
import { confirmation } from './confirm';
import { error } from './error';
import where from './where';

export * from './parameters';

const schemas: Record<string, OpenAPIV3.SchemaObject> = {
  error,
  confirmation,
  where,
};

const responses: Record<string, OpenAPIV3.ResponseObject> = {
  'InvalidRequestErrorResponse': createResponse('invalid request', 'error'),
  'UnauthorizedErrorResponse': createResponse('unauthorized', 'error'),
  'NotFoundErrorResponse': createResponse('not found', 'error'),
  confirmationResponse: createResponse('confirmed', 'confirmation'),
};

const createBaseConfig = (options: Options): OpenAPIV3.Document => ({
  openapi: '3.0.3',
  info: {
    title: 'MZinga.io',
    version: '1.0.0',
  },
  paths: {},
  components: {
    securitySchemes: {
      basicAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'jwt',
      },
      cookieAuth: {
        in: 'cookie',
        type: 'apiKey',
        name: options.access.cookieName,
      },
      ...(options.access.apiKey
        ? {
            apiKeyAuth: {
              in: 'header',
              type: 'apiKey',
              name: 'Authorization',
            },
          }
        : {}),
    },
    schemas,
    responses,
  },
  externalDocs: {
    description: 'MZinga REST API documentation',
    url: 'https://mzinga.io/docs/rest-api/overview',
  },
});

export default createBaseConfig;
