import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  res.render('Layout');
});

router.get('/reg', (req, res) => {
  res.render('Layout');
});

router.get('/auth', (req, res) => {
  res.render('Layout');
});

router.get('/userpage', (req, res) => {
  res.render('Layout');
});

export default router;
