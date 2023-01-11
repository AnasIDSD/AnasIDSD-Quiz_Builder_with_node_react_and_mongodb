require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const connection = require('./connection/connection')
const router = require('./routes/postRouters')

const app = express()
const PORT = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', router)

app.get('/', (req, res) => {
    return res.send('home')
})

connection()

app.listen(PORT, () => console.log(`Server is listrening on port: http://localhost:${PORT}`))