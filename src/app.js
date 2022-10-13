import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import KoaLogger from 'koa-logger';
import helmet from 'koa-helmet';
import { koaSwagger } from 'koa2-swagger-ui';

import { error } from './error';
import { logger } from './logger';
import { router } from './router';
import { router as productRouter } from './product/product.router';
import { router as userRouter } from './user/user.router';
import openapi from './openapi.json';

const cspDirectives = helmet.contentSecurityPolicy.getDefaultDirectives();

const app = new Koa();
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      ...cspDirectives,
      'script-src-elem': [
        "'self'",
        "'unsafe-inline'",
        'https://cdnjs.cloudflare.com/',
      ],
    },
  })
);
app.use(cors());
app.use(bodyParser());
app.use(KoaLogger((str) => logger.info(str)));
app.use(error);

app.use(
  koaSwagger({
    routePrefix: '/docs',
    swaggerOptions: {
      spec: openapi,
    },
  })
);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(productRouter.routes());
app.use(productRouter.allowedMethods());

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

export { app };
