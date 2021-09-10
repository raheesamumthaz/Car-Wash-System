const bodyParser = require('body-parser');
const ordercontroller = require('../controllers/orderController');
const { requireAuth } = require('../middleware/authMiddleware');
const { Router } = require('express');


const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});

//Get the booking page
router.get('/order', requireAuth, ordercontroller.get_order);



/**
* @swagger
* paths:
*   /order:
*     get:
*       summary: get order  details
*       security:
*         - bearerAuth: []
*       tags: ['Orders']
*       responses:
*         '200':
*           description: get order details
*         '400' :
*           description: Error occured     
*/

router.post('/order', requireAuth, urlencodedparser, ordercontroller.create_order);
/**
* @swagger
* paths:
*  /order:
*    post:
*      tags: 
*        - name: Orders
*      summary: create a new order
*      security:
*         - bearerAuth: []
*      requestBody:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 userDetails:
*                   type: object
*                   properties:
*                     userId:
*                       type: string
*                     name:
*                       type: string
*                     mobile:
*                       type: integer
*             schema1:
*               type: object
*               properties:
*                 address:
*                   type: object
*                   properties:
*                     userId:
*                       type: string
*                     name:
*                       type: string
*                     mobile:
*                       type: integer
*                 status:
*                   type: string
*                 totalCost:
*                   type: integer
*                 package:
*                   type: string
*                 isPaymentDone:
*                   type: boolean
*             examples:
*               '0':
*                 value: |-
*                   {
*                       "status":"inprocess",
*                       "package":10000,
*                       "totalCost":100,
*                       "isPaymentDone":true,
*                       "addresses":
*                           {
*                            "country":"india",
*                            "city":"city1"
*                           }
*                    }
*      responses:
*        '201':
*          description: order profile
*        '400':
*          description: Error occured        
*/

router.put('/order/:id', urlencodedparser, ordercontroller.cancel_order);

/**
* @swagger
* paths:
*   /order/{id}:
*     put:
*       summary: change order status to cancelled
*       security:
*         - bearerAuth: []
*       tags: ['Orders']
*       parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613770dca6f97714e897e8aa
*           description: Object Id of the order to canel. 
*       responses:
*         '200':
*           description: upated order details
*         '400' :
*           description: Error occured     
*/

router.put('/orderPayment/:id', requireAuth, urlencodedparser, ordercontroller.orderPaymentFulfilled);

/**
* @swagger
* paths:
*   /orderPayment/{id}:
*     put:
*       summary: change orderPayment status to completed
*       security:
*         - bearerAuth: []
*       tags: ['Orders']
*       parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613770dca6f97714e897e8aa
*           description: Object Id of the orderPayment to get. 
*       responses:
*         '200':
*           description: upated orderPayment details
*         '400' :
*           description: Error occured     
*/

router.put('/washcount', requireAuth, urlencodedparser, ordercontroller.increaseWashCount)


/**
* @swagger
* paths:
*   /washcount:
*     put:
*       summary: Increase wash count
*       security:
*         - bearerAuth: []
*       tags: ['Orders']
*       responses:
*         '200':
*           description: get washcount details
*         '400' :
*           description: Error occured     
*/

module.exports = router;