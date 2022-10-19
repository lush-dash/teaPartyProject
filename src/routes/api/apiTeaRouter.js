import { Router } from 'express';
import { Tea, Comm } from '../../db/models';

const router = Router();

router.get('/:id', async (req, res) => {
  const tea = await Tea.findOne({ where: { id: req.params.id } });
  res.json(tea);
});

router.post('/:id/comment', async (req, res) => { // принимать user.id и ставить сместо 1
  await Comm.create({ user_id: 1, tea_id: req.params.id, text: req.body.newCommentText });
  res.sendStatus(200);
});

export default router;
