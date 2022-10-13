import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import KoaLogger from 'koa-logger';
import helmet from 'koa-helmet';

import { error } from './error';
import { logger } from './logger';
import { router } from './router';

const app = new Koa();
app.use(helmet());
app.use(cors());
app.use(bodyParser());
app.use(KoaLogger((str) => logger.info(str)));
app.use(error);

app.use(router.routes());
app.use(router.allowedMethods());

export { app };
