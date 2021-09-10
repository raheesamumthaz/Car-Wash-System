const { Router } = require('express');
const bodyparser = require('body-parser');
const orderController = require('../controllers/orderController');
const  { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedparser = bodyparser.urlencoded({extended: true});

 // Get list of all pending requests

router.get('/requests', requireAuth , orderController.get_orders);


 // Get a specific order by its id

router.get('/orders/:orderId', requireAuth , orderController.get_order);


// change order status to accepted

router.put('/accept/:orderId', requireAuth ,urlencodedparser, orderController.accept_order);


// change order status to cancelled

router.put('/reject/:orderId', requireAuth , urlencodedparser, orderController.reject_order);

// change order status to inprocess

router.put('/inprocess/:orderId', requireAuth , urlencodedparser, orderController.inprocess_order);

// change order status to completed

router.put('/completed/:orderId', requireAuth ,urlencodedparser, orderController.completed_order);


module.exports = router;