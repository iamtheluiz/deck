import express from 'express'
import cors from 'cors'

const port = 5252
const app = express()

app.use(express.json())
app.use(cors())

app.get('/message', (req, res) => {
  res.json({
    message: 'Hello'
  })
})

app.listen(port, () => {
  console.log(`Application running at 'localhost:${port}'`)
})
