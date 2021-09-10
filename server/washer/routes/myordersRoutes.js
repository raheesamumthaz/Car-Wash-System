const {Router} = require('express');
const orderController = require('../controllers/myordersController');
const { requireAuth } = require('../middleware/authMiddleware');
const router = Router();

/**
 * @swagger
 * /accepted:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags: ['My orders']
 *    summary: Get list of all accepted Orders
 *    responses:
 *      '201':
 *        description: list of all accepted Orders
 *      '400' :
 *        description: Error occured
 */

router.get('/accepted', requireAuth, orderController.get_accepted_orders);
/**
 * @swagger
 * /pending:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags: ['My orders']
 *    summary: Get list of all pending Orders
 *    responses:
 *      '201':
 *        description: list of all pending Orders
 *      '400' :
 *        description: Error occured
 */

router.get('/pending',requireAuth, orderController.get_pending_orders);

/**
 * @swagger
 * /inprocess:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags: ['My orders']
 *    summary: Get list of all inprocess Orders
 *    responses:
 *      '201':
 *        description: list of all inprocess Orders
 *      '400' :
 *        description: Error occured
 */
router.get('/inprocess',requireAuth, orderController.get_inprocess_orders);
/**
 * @swagger
 * /completedAndPaid:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags: ['My orders']
 *    summary: Get list of all completed and paid Orders
 *    responses:
 *      '201':
 *        description: list of all completed and paid Orders
 *      '400' :
 *        description: Error occured
 */

router.get('/completedAndPaid',requireAuth, orderController.get_completed_paid_orders);
/**
 * @swagger
 * /completedAndUnpaid:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags: ['My orders']
 *    summary: Get list of all completed but unpaid Orders
 *    responses:
 *      '201':
 *        description: list of all completed but unpaid Orders
 *      '400' :
 *        description: Error occured
 */

router.get('/completedAndUnpaid',requireAuth, orderController.get_completed_unpaid_orders);
/**
 * @swagger
 * /cancelled:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    tags: ['My orders']
 *    summary: Get list of all cancelled Orders
 *    responses:
 *      '201':
 *        description: list of all cancelled Orders
 *      '400' :
 *        description: Error occured
 */
router.get('/cancelled',requireAuth, orderController.get_cancelled_orders);


module.exports = router;
