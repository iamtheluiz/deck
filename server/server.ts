import express from 'express'
import cors from 'cors'

const port = 4531
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message: 'Bleh'
  })
})

app.listen(port, () => {
  console.log(`Application running at 'localhost:${port}'`)
})
