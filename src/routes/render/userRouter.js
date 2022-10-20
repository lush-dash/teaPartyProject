import { Router } from 'express';
import { Tea } from '../../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const teas = await Tea.findAll({ order: [['id', 'DESC']] });
  const initState = { teas };
  res.render('Layout', initState);
});

export default router;
