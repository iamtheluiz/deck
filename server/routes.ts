import express from 'express'

// Controllers
import CommandController from './controllers/CommandController'

// Middlewares
import StoreCommand from './middlewares/StoreCommand'

// Define Controllers
const commandController = new CommandController()

// Routes
const routes = express.Router()

routes.get('/', commandController.index)
routes.put('/command', commandController.update, StoreCommand)
routes.post('/command', commandController.store, StoreCommand)
routes.delete('/command/:position', commandController.remove, StoreCommand)
routes.get('/execute/:position', commandController.execute)

export default routes
