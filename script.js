const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
const path = require('path')

app.use(express.json())
app.set('view-engine', 'ejs')
app.set("views", path.join(__dirname, "views"));

app.get('/' , (req , res)=>{
    res.render('index.ejs');
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))