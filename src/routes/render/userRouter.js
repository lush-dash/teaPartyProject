import { Router } from 'express';
import { Tea, Comm, User } from '../../db/models';

const router = Router();

router.get('/', async (req, res) => {
  const teas = await Tea.findAll({ order: [['id', 'DESC']] });
  const allComments = await Comm.findAll({
    include: [{
      model: User,
      attributes: ['name'],
    }, {
      model: Tea,
      attributes: ['title', 'id'],
    }],
    order: [['id', 'DESC']],
  });
  const initState = { teas, allComments };
  res.render('Layout', initState);
});

export default router;
