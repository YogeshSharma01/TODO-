const express = require('express');
const app = express();
const port = 3000;


app.use('/',require('./routers/index'));
app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded);


  


app.listen(port,function(err){
    if(err){
        console.log(`Error is running in server ${err}`);
    }
    console.log(`Server is running on Port : ${port}`);
});
