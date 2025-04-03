const express = require('express')
const blog = require('./routes/blog')
const { log } = require('node:console')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use('./blog', blog)

app.get('/', (req, res) => {
    console.log("hey its a get req");
    res.send('Hello World2!')
})

app.post('/', (req, res) => {
    console.log("its a post req");
    res.send('Hello World post')
})

app.put('/', (req, res) => {
    console.log("its a put req");
    res.send('Hello World put')
})

app.get('/index', (req, res) => {
    console.log("hey its a html file");
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get('/api', (req, res) => {
    console.log("hey its a json file");
    res.json({ a: 1, b: 2, c: 3, d: 4 })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})