const express = require('express');
<<<<<<< HEAD
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
=======

const router = express.Router();
const homeController = require('../controllers/home_controller');



router.get('/',homeController.home);
router.post('/',homeController.description);



module.exports = router;
>>>>>>> e2575d82b7a1a54696aa4c6d284d7d25af7ac3c5
