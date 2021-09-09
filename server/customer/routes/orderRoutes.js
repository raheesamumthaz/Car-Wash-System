const bodyParser = require('body-parser');
const ordercontroller = require('../controllers/orderController');
const { requireAuth } = require('../middleware/authMiddleware');
const { Router } = require('express');


const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});

//Get the booking page
router.get('/order', requireAuth, ordercontroller.get_order);

router.post('/order', requireAuth, urlencodedparser, ordercontroller.create_order);

router.put('/order/:id', requireAuth,urlencodedparser, ordercontroller.cancel_order);

router.put('/orderPayment/:id', requireAuth, urlencodedparser, ordercontroller.orderPaymentFulfilled);

router.put('/washcount', requireAuth, urlencodedparser, ordercontroller.increaseWashCount)

module.exports = router;