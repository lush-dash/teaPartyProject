import { Router } from 'express';
import { Tea, Comm, User } from '../../db/models';

const router = Router();

router.get('/:id', async (req, res) => {
  const tea = await Tea.findOne({ where: { id: req.params.id } });
  res.json(tea);
});

router.post('/:id/comment', async (req, res) => {
  const comment = await Comm.create({
    user_id: Number(req.body.userId),
    tea_id: req.params.id,
    text: req.body.newCommentText,
  });
  const newComment = await Comm.findByPk(comment.id, {
    include: [
      {
        model: User,
        attributes: ['name'],
      }],
  });
  res.json(newComment);
});

router.get('/:id/comments', async (req, res) => {
  const filteredComments = await Comm.findAll({
    where: { tea_id: req.params.id },
    include: [{
      model: User,
      attributes: ['name'],
    }],
    order: [['id', 'DESC']],
  });
  res.json(filteredComments);
});

export default router;

router.post('/', async (req, res) => {
  const tea = await Tea.create({
    title: req.body.title,
    place: req.body.place,
    img: req.body.img,
    description: req.body.description,
  });
  console.log(tea);
  res.json(tea);
});

router.get('/', async (req, res) => {
  const allTeas = await Tea.findAll({ order: [['id', 'DESC']] });
  res.json(allTeas);
});
