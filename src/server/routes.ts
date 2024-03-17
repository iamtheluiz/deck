import express from 'express';

// Controllers
import CommandController from './controllers/CommandController';

// Middlewares
import StoreCommand from './middlewares/StoreCommand';

// Routes
const routes = express.Router();

routes.get('/', CommandController.index);
routes.put('/command', CommandController.update, StoreCommand);
routes.post('/command', CommandController.store, StoreCommand);
routes.post('/command/reset', CommandController.reset, StoreCommand);
routes.delete('/command/:position', CommandController.remove, StoreCommand);
routes.get('/execute/:position', CommandController.execute);

export default routes;
