
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended: false}))
app.use(express.static('assets'));

app.use('/',require('./routers/index'));

  


app.listen(port,function(err){
    if(err){
        console.log(`Error is running in server ${err}`);
    }
    console.log(`Server is running on Port : ${port}`);
});