const { Router } = require('express');
const bodyParser = require('body-parser');
const authController = require('../controllers/authController');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = Router();

/**
 * @swagger
 * /signup:
 *  post:
 *    tags: ['auth']
 *    description: signup a new washer
 *    parameters:
 *      - in: body
 *        name: Washer
 *        description: The washer details for signup.
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string         
 *    responses:
 *      '201':
 *        description: A successful response
 *      '400' :
 *        description: Error occured
 */
router.post('/signup', urlencodedParser ,authController.post_signup);
/**
 * @swagger
 * /login:
 *  post:
 *    tags: ['auth']
 *    description: login a new washer
 *    parameters:
 *      - in: body
 *        name: Washer
 *        description: The washer details for login.
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string         
 *    responses:
 *      '201':
 *        description: JWT token of Washer
 *      '400' :
 *        description: Error occured
 */
router.post('/login', urlencodedParser ,authController.post_login);





module.exports = router;