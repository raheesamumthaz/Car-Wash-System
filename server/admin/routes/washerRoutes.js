const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const washerController = require('../controllers/washerController');
const bodyParser = require('body-parser');


const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});

/**
 * @swagger
 * /washers:
 *  get:
 *    tags: 
 *      - name: Washers
 *    security:
 *      - bearerAuth: []
 *    summary: get all washers
 *    responses:
 *      '201':
 *        description: List of all washers
 *      '400' :
 *        description: Error occured
 */

router.get('/washers', requireAuth, washerController.get_all_washers);

 /**
 * @swagger
 * /unapprovedwasher:
 *  get:
 *    tags: 
 *      - name: Washers
 *    security:
 *      - bearerAuth: []
 *    summary: get all unapprovedwasher
 *    responses:
 *      '201':
 *        description: List of all unapprovedwasher
 *      '400' :
 *        description: Error occured
 */

router.get('/unapprovedwasher', requireAuth, washerController.get_unapproved_washers);

 
 /**
 * @swagger
 * /approvedWashers:
 *  get:
 *    tags: 
 *      - name: Washers
 *    security:
 *      - bearerAuth: []
 *    summary: get all approvedWashers
 *    responses:
 *      '201':
 *        description: List of all approvedWashers
 *      '400' :
 *        description: Error occured
 */

 router.get('/approvedWashers', requireAuth, washerController.get_approved_washers);

/**
* @swagger
* paths:
*   /washer/{id}:
*     put:
*       summary: update status of washer as approved
*       security:
*         - bearerAuth: []
*       tags: 
*         - name: Washers
*       parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: washer Id to update. 
*       responses:
*         '201':
*           description: upated washer details
*         '400' :
*           description: Error occured     
*/

router.put('/washer/:id', requireAuth, urlencodedparser, washerController.update_washer);
/**
* @swagger
* paths:
*   /washer/{id}:
*     delete:
*       summary: Delete/Reject a washer
*       security:
*         - bearerAuth: []
*       tags: 
*         - name: Washers
*       parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: washer Id to update. 
*       responses:
*         '201':
*           description: washer details
*         '400' :
*           description: Error occured     
*/

router.delete('/washer/:id', requireAuth, washerController.delete_washer);
/**
 * @swagger
 * /countWashers:
 *  get:
 *    tags: 
 *      - name: Washers
 *    security:
 *      - bearerAuth: []
 *    summary: get count of approved washers
 *    responses:
 *      '201':
 *        description: Total count of active washers
 *      '400' :
 *        description: Error occured
 */
router.get('/countWashers', requireAuth, washerController.count_washers);

module.exports = router;