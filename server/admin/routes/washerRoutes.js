const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const washerController = require('../controllers/washerController');
const bodyParser = require('body-parser');


const router = Router();
const urlencodedparser = bodyParser.urlencoded({extended: true});

// get all washers

router.get('/washers', requireAuth, washerController.get_all_washers);

 //get unapproved washers

router.get('/unapprovedWashers', requireAuth, washerController.get_unapproved_washers);

 //get approved washers

 router.get('/approvedWashers', requireAuth, washerController.get_approved_washers);

 //update status of washer as approved

router.put('/washer/:id', requireAuth, urlencodedparser, washerController.update_washer);

 //Delete/Reject a washer

router.delete('/washer/:id', requireAuth, washerController.delete_washer);


 //get count of approved washers
router.get('/countWashers', requireAuth, washerController.count_washers);

module.exports = router;