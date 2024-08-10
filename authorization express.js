const express = require('express')
const logger = require('./logger')
const app = express()
const authorize = require('./authorize')

app.use(authorize,logger)

app.get('/',(req,res)=>{
    // res.send('Home')
    res.status(200).send("Home page")
})

app.get('/api/about',(req,res)=>{
    // res.send('Home')
    res.status(200).send("About page")
    console.log(req.user)
})

app.listen(3000,()=>{
  console.log("Server is listening on port 3000")

})