import { Router } from 'express';
import { Tea } from '../db/models';

const router = Router();

router.get('/:id', async (req, res) => {
  const tea = await Tea.findOne({ where: { id: req.params.id } });
  // const tea = {
  //   title: 'tea', description: 'text here', place: 'Moscow', id: 1,
  // };
  const initState = { tea };
  res.render('Layout', initState);
});

export default router;
