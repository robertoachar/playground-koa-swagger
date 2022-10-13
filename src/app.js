import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import KoaLogger from 'koa-logger';
import helmet from 'koa-helmet';

import { error } from './error';
import { logger } from './logger';
import { router } from './router';
import { router as productRouter } from './product/product.router';
import { router as userRouter } from './user/user.router';

const app = new Koa();
app.use(helmet());
app.use(cors());
app.use(bodyParser());
app.use(KoaLogger((str) => logger.info(str)));
app.use(error);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(productRouter.routes());
app.use(productRouter.allowedMethods());

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

export { app };
