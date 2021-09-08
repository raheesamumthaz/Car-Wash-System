const { Router } = require('express');
const bodyParser = require('body-parser');
const profileController = require('../controllers/profileController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedParser = bodyParser.urlencoded({extended:true});

router.post('/profile', requireAuth, urlencodedParser, profileController.post_profile);
router.get('/profile',requireAuth, urlencodedParser,profileController.get_specific_profile);
router.put('/profile',requireAuth, urlencodedParser,profileController.update_profile);


module.exports = router;