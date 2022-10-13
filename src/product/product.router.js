import Router from 'koa-router';
import { list } from './middlewares/list';

const router = Router({
  prefix: '/products',
});

router.get('/', list);

export { router };
