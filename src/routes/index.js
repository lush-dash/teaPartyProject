import { Router } from 'express';
import { Entry } from '../db/models';

const router = Router();

router.get('/', async (req, res) => {
  res.render('Layout');
});

export default router;
