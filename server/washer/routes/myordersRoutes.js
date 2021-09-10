const {Router} = require('express');
const orderController = require('../controllers/myordersController');
const { requireAuth } = require('../middleware/authMiddleware');
const router = Router();


router.get('/accepted', requireAuth, orderController.get_accepted_orders);


router.get('/pending',requireAuth, orderController.get_pending_orders);


router.get('/inprocess',requireAuth, orderController.get_inprocess_orders);


router.get('/completedAndPaid',requireAuth, orderController.get_completed_paid_orders);


router.get('/completedAndUnpaid',requireAuth, orderController.get_completed_unpaid_orders);

router.get('/cancelled',requireAuth, orderController.get_cancelled_orders);


module.exports = router;
