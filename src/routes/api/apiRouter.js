import express from 'express';
import { hash, compare } from 'bcrypt';
import { User, Country } from '../../db/models';

const router = express.Router();

router.post('/reg', async (req, res) => {
  const {
    email, password, name, isAdmin,
  } = req.body;

  if (!name || !email || !password) return res.status(400).json({ message: 'Имя, почта или пароль не заданы' });
  const hashPassword = await hash(password, 10);

  const emailInDb = await User.findOne({ where: { email } });
  if (emailInDb) return res.status(400).json({ message: 'Данный пользователь уже зарегистрирован' });

  try {
    const newUser = await User.create({
      email, password: hashPassword, name, isAdmin: (!!isAdmin),
    });
    req.session.user = { id: newUser.id, email: newUser.email, isAdmin: newUser.isAdmin };
    res.json({ id: newUser.id, email: newUser.email, isAdmin: newUser.isAdmin });
  } catch (err) {
    console.error(err);
  }
});

router.post('/auth', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: 'Почта или пароль не заданы' });
  try {
    const userFromDb = await User.findOne({ where: { email } });
    if (!userFromDb) return res.status(400).json({ message: 'Данный пользователь не существует' });
    const isValid = await compare(password, userFromDb.password);

    if (!isValid) return res.status(400).json({ message: 'Почта или пароль не верны' });

    req.session.user = { id: userFromDb.id, email: userFromDb.email, isAdmin: userFromDb.isAdmin};
    console.log(req.session.user);
    res.json({ id: userFromDb.id, email: userFromDb.email, isAdmin: userFromDb.isAdmin });
  } catch (err) {
    console.error(err);
  }
});

router.get('/logout', async (req, res) => {
  res.clearCookie('user_sid');
  req.session.destroy();
  res.sendStatus(200);
});

router.get('/', async (req, res) => {
  const coords = await Country.findOne({ where: { name: 'Astana' } });
  res.json(coords);
});

router.get('/allCountry', async (req, res) => {
  const allCountry = await Country.findAll();
  res.json(allCountry);
});

export default router;
