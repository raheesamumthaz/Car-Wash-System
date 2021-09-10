const bodyParser = require('body-parser');
const { Router } = require('express');
const serviceplanController = require('../controllers/serviceplanController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();

var urlencodedParser = bodyParser.urlencoded({ extended: true });
/**
 * @swagger
 * /services:
 *  get:
 *    tags: 
 *      - name: Services
 *    security:
 *      - bearerAuth: []
 *    summary: Get all services
 *    responses:
 *      '201':
 *        description: list of all services
 *      '400' :
 *        description: Error occured
 */

router.get('/services',  requireAuth, serviceplanController.get_Services);
/**
* @swagger
* paths:
*   /services/{id}:
*     get:
*       summary: Get a specific service by its id
*       security:
*         - bearerAuth: []
*       tags: 
*         - name: Services
*       parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the service to get. 
*       responses:
*         '201':
*           description: service details
*         '400' :
*           description: Error occured     
*/
router.get('/services/:id', requireAuth,   serviceplanController.get_Service);
/**
 * @swagger
 * /activeServices:
 *  get:
 *    tags: 
 *      - name: Services
 *    security:
 *      - bearerAuth: []
 *    summary: Get all active services
 *    responses:
 *      '201':
 *        description: list of all active  services
 *      '400' :
 *        description: Error occured
 */
router.get('/activeServices', requireAuth, serviceplanController.get_Active_Services);
/**
 * @swagger
 * /activeCount:
 *  get:
 *    tags: 
 *      - name: Services
 *    security:
 *      - bearerAuth: []
 *    summary: Get count of active services
 *    responses:
 *      '201':
 *        description: Total count of active services
 *      '400' :
 *        description: Error occured
 */
router.get('/activeCount', requireAuth, serviceplanController.get_Count_Active_Services);
/**
* @swagger
* paths:
*  /services:
*    post:
*      tags: 
*        - name: Services
*      summary: create a service
*      security:
*         - bearerAuth: []
*      requestBody:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 name:
*                   type: string
*                 time:
*                   type: string
*                 cost:
*                   type: integer
*                 description:
*                   type: string
*             examples:
*               '0':
*                 value: |-
*                   {
*                    "name":"Service1",
*                     "time": "50-60",
*                     "cost": 500,
*                     "description": "new service"
*                    }
*      responses:
*        '201':
*          description: service details
*        '400':
*          description: Error occured        
*/

router.post('/services', requireAuth, urlencodedParser ,serviceplanController.post_Service);
/**
* @swagger
* paths:
*   /services/{id}:
*    put:
*      tags: 
*        - name: Services
*      summary: update a  service
*      security:
*         - bearerAuth: []
*      parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the service to update.
*      requestBody:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 name:
*                   type: string
*                 time:
*                   type: string
*                 cost:
*                   type: integer
*                 description:
*                   type: string
*             examples:
*               '0':
*                 value: |-
*                   {
*                    "name":"Service1",
*                     "time": "50-60",
*                     "cost": 500,
*                     "description": "new service"
*                    }
*      responses:
*        '201':
*          description: upated service details
*        '400':
*          description: Error occured        
*/
router.put('/services/:id', requireAuth, urlencodedParser ,serviceplanController.put_Service);
/**
* @swagger
* paths:
*   /services/{id}:
*     delete:
*       summary: Delete a service
*       security:
*         - bearerAuth: []
*       tags: 
*         - name: Services
*       parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the service to delete. 
*       responses:
*         '201':
*           description: deleted service details
*         '400' :
*           description: Error occured     
*/
router.delete('/services/:id',  requireAuth,  urlencodedParser ,serviceplanController.delete_Service);


module.exports = router;