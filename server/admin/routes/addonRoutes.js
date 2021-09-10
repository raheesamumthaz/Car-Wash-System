const { Router } = require('express');
const addonController = require('../controllers/addonController');
const bodyParser = require('body-parser');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});
/**
 * @swagger
 * /addons:
 *  get:
 *    tags: 
 *      - name: Addons
 *    security:
 *      - bearerAuth: []
 *    summary: Get list of all addons
 *    responses:
 *      '201':
 *        description: list of all addons
 *      '400' :
 *        description: Error occured
 */

router.get('/addons', requireAuth, addonController.get_addons);

/**
* @swagger
* paths:
*   /addons/{id}:
*     get:
*       summary: Get a specific addon by its id
*       security:
*         - bearerAuth: []
*       tags: 
*         - name: Addons
*       parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the addon to get. 
*       responses:
*         '201':
*           description: addon details
*         '400' :
*           description: Error occured     
*/
router.get('/addons/:id', requireAuth, addonController.get_addon);

/**
* @swagger
* paths:
*  /addons:
*    post:
*      tags: 
*        - name: Addons
*      summary: create a new addon
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
*                 cost:
*                   type: integer
*                 forServices:
*                   type: array
*                   items:
*                     type: string
*             examples:
*               '0':
*                 value: |-
*                   {
*                       "name":"Addon1",
*                       "cost":500,
*                       "forServices":
*                           [
*                            "Service1"
*                           ]
*                    }
*      responses:
*        '201':
*          description: addon details
*        '400':
*          description: Error occured        
*/
router.post('/addons',requireAuth, urlencodedparser,addonController.post_addons );
/**
* @swagger
* paths:
*   /addons/{id}:
*    put:
*      tags: 
*        - name: Addons
*      summary: update a  addon
*      security:
*         - bearerAuth: []
*      parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the addon to update.
*      requestBody:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 name:
*                   type: string
*                 cost:
*                   type: integer
*                 forServices:
*                   type: array
*                   items:
*                     type: string
*             examples:
*               '0':
*                 value: |-
*                   {
*                       "name":"Addon1",
*                       "cost":500,
*                       "forServices":
*                           [
*                            "Service1"
*                           ]
*                    }
*      responses:
*        '201':
*          description: upated addon details
*        '400':
*          description: Error occured        
*/

router.put('/addons/:id', requireAuth, urlencodedparser, addonController.put_addons);
/**
* @swagger
* paths:
*   /addons/{id}:
*     delete:
*       summary: Delete an addon
*       security:
*         - bearerAuth: []
*       tags: 
*         - name: Addons
*       parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the addon to delete. 
*       responses:
*         '201':
*           description: deleted addon details
*         '400' :
*           description: Error occured     
*/

router.delete('/addons/:id', requireAuth, addonController.delete_addons);


module.exports = router;