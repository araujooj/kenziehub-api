import ensureAuth from '@modules/users/infra/http/middlewares/ensureAuth';
import { Router } from 'express';
import TechsController from '../controllers/TechsController'

const techRouter = Router();

const techController = new TechsController();

techRouter.use(ensureAuth);

techRouter.post('/', techController.create);

techRouter.put('/:id', techController.update);

techRouter.delete('/:id', techController.delete)

export default techRouter;
