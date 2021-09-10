const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const authController = require('../controllers/authController');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = Router();


//Routes for signup
router.get('/signup', authController.get_signup);

/**
 * @swagger
 * /signup:
 *  get:
 *    tags: ['auth']
 *    description: signup a new customer
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */


router.post('/signup', urlencodedParser ,authController.post_signup);


/**
 * @swagger
 * /signup:
 *  post:
 *    tags: ['auth']
 *    description: signup a new customer
 *    parameters:
 *          email :
 *              type :string
 *          password:
 *              type: string
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */

//Routes for login
router.get('/login', authController.get_login);

router.post('/login',urlencodedParser ,authController.post_login);

/**
 * @swagger
 * /login:
 *  post:
 *    tags: ['auth']
 *    description: login the customer
 *      parameters:
 *          email :
 *              type :string
 *          password:
 *              type: string
 *    responses:
 *      '201':
 *        description: successfully get all cars
 *      '400' :
 *        description: Error occured
 */


module.exports = router;