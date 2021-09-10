const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const {customer} = require('../models/customer');
const router = Router();



/**
 * @swagger
 * /customersCount:
 *  get:
 *    tags: 
 *      - name: Customer
 *    security:
 *      - bearerAuth: []
 *    summary: Get the total customer count
 *    responses:
 *      '201':
 *        description: total customer count
 *      '400' :
 *        description: Error occured
 */
router.get('/customersCount', requireAuth ,function(req,res){
    customer.count({},function(err,doc){
        if(err){
            res.status(400).json(err);
        } else {
            res.status(200).json(doc);
        }
    })
});

module.exports = router;