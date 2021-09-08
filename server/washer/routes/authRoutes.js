const { Router } = require('express');
const bodyParser = require('body-parser');
const authController = require('../controllers/authController');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = Router();


//Routes for signup
router.post('/signup', urlencodedParser ,authController.post_signup);


//Routes for login
router.post('/login', urlencodedParser ,authController.post_login);





module.exports = router;