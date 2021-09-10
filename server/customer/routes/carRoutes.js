const carController = require('../controllers/carController');
const {requireAuth} = require('../middleware/authMiddleware');
const {Router} = require('express');
const router = Router();


router.get('/cars', carController.get_cars);

/**
 * @swagger
 * /cars:
 *  get:
 *    tags: ['cars']
 *    description: Get the list of active cars
 *    responses:
 *      '201':
 *        description: successfully get all cars
 *      '400' :
 *        description: Error occured
 */

module.exports = router;