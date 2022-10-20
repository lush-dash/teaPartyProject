import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('Layout');
});

router.get('/reg', (req, res) => {
  res.render('Layout');
});

router.get('/auth', (req, res) => {
  res.render('Layout');
});

export default router;
