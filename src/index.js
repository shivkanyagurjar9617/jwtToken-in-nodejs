const express = require('express')
const { friendRoute } = require('./routes/friends')
const { loginRoute } = require('./routes/loginRoute')
const { registerRoute } = require('./routes/registerRoute')
const app = express()
require('dotenv').config()
app.use(express.json())
app.use(registerRoute)
app.use(loginRoute)
app.use(friendRoute)
let port = process.env.PORT
app.listen(port,()=>{
    console.log('listening on port '+port)
})