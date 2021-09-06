const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const authController = require('../controllers/authController');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = Router();


//Routes for signup
router.get('/signup', authController.get_signup);

router.post('/signup', urlencodedParser ,authController.post_signup);


//Routes for login
router.get('/login', authController.get_login);
router.post('/login',urlencodedParser ,authController.post_login);


module.exports = router;