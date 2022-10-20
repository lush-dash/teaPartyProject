import { Router } from 'express';
import {
  Tea, Comm, User, Country,
} from '../../db/models';

const router = Router();

router.get('/:id', async (req, res) => {
  const tea = await Tea.findOne({ where: { id: req.params.id } });
  const filteredComments = await Comm.findAll({
    where: { tea_id: req.params.id },
    include: [{
      model: User,
      attributes: ['name'],
    }],
    order: [['id', 'DESC']],
  });
  const initState = { tea, filteredComments, allCountries };
  res.render('Layout', initState);
});



export default router;
