import { Router } from 'express';
import { Comm } from '../../db/models';

const router = Router();

router.get('/comments', async (req, res) => {
  const allComments = await Comm.findAll();
  try {
    res.json(allComments);
  } catch (err) {
    console.error(err);
  }
});

export default router;
