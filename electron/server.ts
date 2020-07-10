import express from 'express'
import path from 'path'
import cors from 'cors'

const port = 5252
const app = express()

app.use(express.json())
app.use(cors())

if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, 'renderer/index.html')))
}

app.get('/', (req, res) => {
  res.json({
    message: 'Hello'
  })
})

app.listen(port, () => {
  console.log(`Application running at 'localhost:${port}'`)
})
