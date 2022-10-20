import express from 'express';
import { hash, compare } from 'bcrypt';
import { User } from '../../db/models';

const router = express.Router();

// сделать нормальную проверку на валидный пароль

router.post('/reg', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.json({ status: 400, message: 'email or password not valid' });
  const hashPassword = await hash(password, 10);

  try {
    const newUser = await User.create({ email, password: hashPassword });
    req.session.user = { id: newUser.id, email: newUser.email };
    res.json({ id: newUser.id, email: newUser.email });
  } catch (err) {
    console.error(err);
  }
});

router.post('/auth', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.json({ status: 400, message: 'email or password not valid' });
  try {
    const userFromDb = await User.findOne({ where: { email } });
    if (!userFromDb) return res.json({ status: 400, message: 'email not found' });
    const isValid = await compare(password, userFromDb.password);

    if (!isValid) return res.json({ status: 400, message: 'email or password is invalid' });

    req.session.user = { id: userFromDb.id, email: userFromDb.email };
    res.json({ id: userFromDb.id, email: userFromDb.email });
  } catch (err) {
    console.error(err);
  }
});

router.get('/auth/logout', async (req, res) => {
  res.clearCookie('user_sid');
  req.session.destroy();
  res.sendStatus(200);
});

export default router;
