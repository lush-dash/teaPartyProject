import { Router } from 'express';
import { Tea } from '../db/models';

const router = Router();

router.get('/:id', async (req, res) => {
  const tea = await Tea.findOne({ where: { id: req.params.id } });
  res.json(tea);
});

export default router;
