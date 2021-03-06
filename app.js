const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const poll = require('./routes/poll')

// Set the public folder
app.use(express.static(path.join(__dirname, 'public')))
// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Enable CORS
app.use(cors())
app.use('/poll', poll)

const port = 3000;

// Start the Server
app.listen(port, () => console.log(`Server started on port ${port}`))