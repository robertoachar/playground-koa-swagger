/* eslint no-process-env: 0 */

import { config } from './config';
import { logger } from './logger';

export const error = async (ctx, next) =>
  next().catch((err) => {
    const networkError = err.response && err.response.data;
    const message = networkError ? err.response.data.message : err.message;
    const internalServerError =
      config.NODE_ENV === 'dev' ? message : 'Something is broken';

    logger.error(`${err.name} - ${message}`);

    switch (err.name) {
      case 'Error':
        ctx.status = 422;
        ctx.body = { message };
        break;

      case 'UnauthorizedError':
        ctx.status = 401;
        ctx.body = { message };
        break;

      case 'ForbiddenError':
        ctx.status = 403;
        ctx.body = { message };
        break;

      default:
        ctx.status = 500;
        ctx.body = { message: internalServerError };
    }
  });
