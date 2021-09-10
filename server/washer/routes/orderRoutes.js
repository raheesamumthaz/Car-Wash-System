const { Router } = require('express');
const bodyparser = require('body-parser');
const orderController = require('../controllers/orderController');
const  { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedparser = bodyparser.urlencoded({extended: true});

/**
 * @swagger
 * /requests:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags: ['Orders']
 *    summary: Get list of all pending requests
 *    responses:
 *      '201':
 *        description: list of all pending requests
 *      '400' :
 *        description: Error occured
 */

router.get('/requests', requireAuth , orderController.get_orders);



/**
* @swagger
* paths:
*   /orders/{orderId}:
*     get:
*       summary: Get a specific order by its id
*       security:
*         - bearerAuth: []
*       tags: ['Orders']
*       parameters:
*         - in: path
*           name: orderId
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the order to get. 
*       responses:
*         '201':
*           description: order details
*         '400' :
*           description: Error occured     
*/


router.get('/orders/:orderId', requireAuth , orderController.get_order);
/**
* @swagger
* paths:
*   /accept/{orderId}:
*     put:
*       summary: change order status to accepted
*       security:
*         - bearerAuth: []
*       tags: ['Orders']
*       parameters:
*         - in: path
*           name: orderId
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the order to get. 
*       responses:
*         '201':
*           description: upated order details
*         '400' :
*           description: Error occured     
*/
router.put('/accept/:orderId', requireAuth ,urlencodedparser, orderController.accept_order);



/**
* @swagger
* paths:
*   /reject/{orderId}:
*     put:
*       summary: change order status to cancelled
*       security:
*         - bearerAuth: []
*       tags: ['Orders']
*       parameters:
*         - in: path
*           name: orderId
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the order to get. 
*       responses:
*         '201':
*           description: upated order details
*         '400' :
*           description: Error occured     
*/
router.put('/reject/:orderId', requireAuth , urlencodedparser, orderController.reject_order);

/**
* @swagger
* paths:
*   /inprocess/{orderId}:
*     put:
*       summary: change order status to inprocess
*       security:
*         - bearerAuth: []
*       tags: ['Orders']
*       parameters:
*         - in: path
*           name: orderId
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the order to get. 
*       responses:
*         '201':
*           description: upated order details
*         '400' :
*           description: Error occured     
*/

router.put('/inprocess/:orderId', requireAuth , urlencodedparser, orderController.inprocess_order);


/**
* @swagger
* paths:
*   /completed/{orderId}:
*     put:
*       summary: change order status to completed
*       security:
*         - bearerAuth: []
*       tags: ['Orders']
*       parameters:
*         - in: path
*           name: orderId
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the order to get. 
*       responses:
*         '201':
*           description: upated order details
*         '400' :
*           description: Error occured     
*/

router.put('/completed/:orderId', requireAuth ,urlencodedparser, orderController.completed_order);


module.exports = router;