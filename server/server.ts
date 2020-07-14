import express from 'express'
import cors from 'cors'
import routes from './src/routes'

const port = 4531
const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(port, () => {
  console.log(`Application running at 'localhost:${port}'`)
})
