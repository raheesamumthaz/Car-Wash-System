const { Router } = require('express');
const bodyParser = require('body-parser');
const authController = require('../controllers/authController');


var urlencodedParser = bodyParser.urlencoded({ extended: false });
const router = Router();


/**
* @swagger
* paths:
*  /signup:
*    post:
*      tags: 
*        - name: Auth
*      summary: Admin signup
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
*                      "email":"admin@gmail.com",
*                      "password":"admin@123"
*                  }
*      responses:
*        '201':
*          description: Userid Washer
*        '400':
*          description: Error occured        
*/
router.post('/signup', urlencodedParser ,authController.post_signup);


/**
* @swagger
* paths:
*  /login:
*    post:
*      tags: 
*        - name: Auth
*      summary: Admin login
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
*                      "email":"admin@gmail.com",
*                      "password":"admin@123"
*                  }
*      responses:
*        '201':
*          description: JWT of logged in Washer
*        '400':
*          description: Error occured        
*/
router.post('/login', urlencodedParser ,authController.post_login);





module.exports = router;