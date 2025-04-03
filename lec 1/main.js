const { log } = require('console')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public')) // used to access public files from public folder

//app.get(path,handler)
app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/about', (req, res) => {
    res.send('about us')
  })

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
  })

app.get('/idk/intro-to-express', (req, res) => {
    res.send('Hello express js')
  })

app.get('/idk/:slug', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`hello ${req.params.slug}`)
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})