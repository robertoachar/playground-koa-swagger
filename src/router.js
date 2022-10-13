import Router from 'koa-router';

const router = new Router();

router.get('/', (ctx) => {
  const body = {
    message: 'A playground for Koa and Swagger',
  };

  ctx.body = body;
});

export { router };
