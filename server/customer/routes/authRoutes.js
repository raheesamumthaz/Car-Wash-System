const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const authController = require('../controllers/authController');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = Router();


//Routes for signup
router.get('/signup', authController.get_signup)


router.post('/signup', urlencodedParser ,authController.post_signup);


/**
* @swagger
* paths:
*  /signup:
*    post:
*      summary: create Signup  details
*      tags: 
*        - name: Auth
*      description: Signup a new customer
*      requestBody:
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                password:
*                  type: string
*                email:
*                  type: string
*            examples:
*              '0':
*                value: |-
*                  {
*                      "email":"customer@gmail.com",
*                      "password":"customer@123"
*                  }
*      responses:
*        '201':
*          description: Userid customer
*        '400':
*          description: Error occured        
*/

//Routes for login
router.get('/login', authController.get_login);

router.post('/login',urlencodedParser ,authController.post_login);
/**
* @swagger
* paths:
*  /login:
*    post:
*      summary: created login  details
*      tags: 
*        - name: Auth
*      description: Login a new customer
*      requestBody:
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                password:
*                  type: string
*                email:
*                  type: string
*            examples:
*              '0':
*                value: |-
*                  {
*                      "email":"customer@gmail.com",
*                      "password":"customer@123"
*                  }
*      responses:
*        '201':
*          description: JWT of logged in customer
*        '400':
*          description: Error occured        
*/


module.exports = router;