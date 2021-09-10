const carController = require('../controllers/carController');
const {requireAuth} = require('../middleware/authMiddleware');
const {Router} = require('express');
const router = Router();


router.get('/cars', carController.get_cars);


/**
* @swagger
* paths:
*   /cars:
*     get:
*       summary: get cars status details
*       security:
*         - bearerAuth: []
*       tags: ['Orders']
*       responses:
*         '200':
*           description: get cars details
*         '400' :
*           description: Error occured     
*/
module.exports = router;