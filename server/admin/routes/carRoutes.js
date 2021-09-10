const { Router } = require("express");
const carController = require("../controllers/carController");
const bodyParser = require("body-parser");
const { requireAuth } = require("../middleware/authMiddleware");

const router = Router();
const urlencodedparser = bodyParser.urlencoded({ extended: true });
/**
 * @swagger
 * /cars:
 *  get:
 *    tags: 
 *      - name: Cars
 *    security:
 *      - bearerAuth: []
 *    summary: Get all cars
 *    responses:
 *      '201':
 *        description: list of all cars
 *      '400' :
 *        description: Error occured
 */
router.get("/cars",requireAuth, carController.get_cars);

/**
* @swagger
* paths:
*   /cars/{id}:
*     get:
*       summary: Get a specific car by its id
*       security:
*         - bearerAuth: []
*       tags: 
*         - name: Cars
*       parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the car to get. 
*       responses:
*         '201':
*           description: car details
*         '400' :
*           description: Error occured     
*/
router.get("/cars/:id", requireAuth, carController.get_car);

/**
* @swagger
* paths:
*  /cars:
*    post:
*      tags: 
*        - name: Cars
*      summary: create a new car
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
*                 model:
*                   type: string
*             examples:
*               '0':
*                 value: |-
*                   {
*                    "name":"Car1",
*                     "model": "model1"
*                    }
*      responses:
*        '201':
*          description: car details
*        '400':
*          description: Error occured        
*/

router.post("/cars", requireAuth, urlencodedparser, carController.post_cars);

/**
* @swagger
* paths:
*   /cars/{id}:
*    put:
*      tags: 
*        - name: Cars
*      summary: update a  car
*      security:
*         - bearerAuth: []
*      parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the car to update.
*      requestBody:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 name:
*                   type: string
*                 model:
*                   type: string
*             examples:
*               '0':
*                 value: |-
*                   {
*                       "name":"Car1",
*                       "model": "model1"
*                    }
*      responses:
*        '201':
*          description: upated car details
*        '400':
*          description: Error occured        
*/

router.put("/cars/:id",requireAuth,  urlencodedparser, carController.put_cars);

/**
* @swagger
* paths:
*   /cars/{id}:
*     delete:
*       summary: Delete a car
*       security:
*         - bearerAuth: []
*       tags: 
*         - name: Cars
*       parameters:
*         - in: path
*           name: id
*           type: string
*           required: true
*           example: 613b038a7200c95d5c3a35bc
*           description: Object Id of the car to delete. 
*       responses:
*         '201':
*           description: deleted car details
*         '400' :
*           description: Error occured     
*/


router.delete("/cars/:id", requireAuth, carController.delete_cars);

module.exports = router;
