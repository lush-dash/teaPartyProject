import express from 'express';
// import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import dotenv from 'dotenv';
import path from 'path';
import jsxRender from './utils/jsxRender';
import indexRouter from './routes/render/indexRouter';
import apiRouter from './routes/api/apiRouter';
import teaRouter from './routes/render/teaRouter';
import apiTeaRouter from './routes/api/apiTeaRouter';
import apiUserRouter from './routes/api/apiUserRouter';
import userRouter from './routes/render/userRouter';

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: true, // Пересохранять ли куку при каждом запросе
  store: new FileStore(),
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.engine('js', jsxRender); // custom render
app.set('view engine', 'js');
app.set('views', path.join(__dirname, 'components'));

app.use(express.static('public'));
// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/tea', teaRouter);
app.use('/api/tea', apiTeaRouter);
app.use('/api/userpage', apiUserRouter);
app.use('/userpage', userRouter);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
