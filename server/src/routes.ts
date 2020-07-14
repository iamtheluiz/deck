import express from 'express'

// Controllers
import CommandController from './controllers/CommandController'

// Define Controllers
const commandController = new CommandController()

// Routes
const routes = express.Router()

routes.get('/', commandController.index)
routes.post('/command', commandController.store)

export default routes
