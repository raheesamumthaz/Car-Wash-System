const { Router } = require('express');
const orderController = require('../controllers/myordersController');
const { requireAuth } = require('../middleware/authMiddleware');
const router = Router();

/**
* @swagger
* paths:
*   /accepted:
*     get:
*       summary: get accepted order details
*       security:
*         - bearerAuth: []
*       tags: ['Orders']
*       responses:
*         '200':
*           description: get accepted details
*         '400' :
*           description: Error occured     
*/
router.get('/accepted', requireAuth, orderController.get_accepted_orders);


router.get('/pending', requireAuth, orderController.get_pending_orders);
/**
 * @swagger
 * /pending:
 *  get:
 *    summary: get pending Orders  
 *    security:
 *      - bearerAuth: []
 *    tags: ['My orders']
 *    description: Get list of all pending Orders
 *    responses:
 *      '200':
 *        description: list of all pending Orders
 *      '400' :
 *        description: Error occured
 */


router.get('/inprocess', requireAuth, orderController.get_inprocess_orders);

/**
 * @swagger
 * /inprocess:
 *  get:
 *    summary: get inprocess Orders 
 *    security:
 *      - bearerAuth: []
 *    tags: ['My orders']
 *    description: Get list of all inprocess Orders
 *    responses:
 *      '200':
 *        description: list of all inprocess Orders
 *      '400' :
 *        description: Error occured
 */

router.get('/completedAndPaid', requireAuth, orderController.get_completed_paid_orders);

/**
 * @swagger
 * /completedAndPaid:
 *  get:
 *    summary: get completedAndPaid Orders 
 *    security:
 *      - bearerAuth: []
 *    tags: ['My orders']
 *    description: Get list of all completed and paid Orders
 *    responses:
 *      '200':
 *        description: list of all completed and paid Orders
 *      '400' :
 *        description: Error occured
 */

router.get('/completedAndUnpaid', requireAuth, orderController.get_completed_unpaid_orders);

/**
 * @swagger
 * /completedAndUnpaid:
 *  get:
 *    summary: get completedAndUnpaid Orders 
 *    security:
 *      - bearerAuth: []
 *    tags: ['My orders']
 *    description: Get list of all completed but unpaid Orders
 *    responses:
 *      '200':
 *        description: list of all completed but unpaid Orders
 *      '400' :
 *        description: Error occured
 */


router.get('/cancelled', requireAuth, orderController.get_cancelled_orders);

/**
 * @swagger
 * /cancelled:
 *  get:
 *    summary: get cancelled Orders 
 *    security:
 *      - bearerAuth: []
 *    tags: ['My orders']
 *    description: Get list of all cancelled Orders
 *    responses:
 *      '200':
 *        description: list of all cancelled Orders
 *      '400' :
 *        description: Error occured
 */
module.exports = router;