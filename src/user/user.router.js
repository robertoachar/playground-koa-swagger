import Router from 'koa-router';
import { list } from './middlewares/list';

const router = Router({
  prefix: '/users',
});

router.get('/', list);

export { router };
