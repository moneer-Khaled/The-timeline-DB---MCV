const express = require("express");


const app = express();
require('./config/DB')
const route= require('./config/routes')
app.listen(3000, ()=> console.log("Server is on 3000"))
 


app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))



app.use(route)

