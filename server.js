const express = require('express')
const app = express()
const port = 80

app.use(express.static(__dirname))

app.get('/', (req, res) => {
  res.redirect('/')
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
