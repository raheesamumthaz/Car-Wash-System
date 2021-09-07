const bodyParser = require('body-parser');
const profileController = require('../controllers/profileController');

const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');

const urlencodedParser = bodyParser.urlencoded({ extended: true})
const router = Router();


router.post('/profile', requireAuth,  urlencodedParser, profileController.post_profile);

router.get('/profile', requireAuth, urlencodedParser,profileController.get_specific_profile);

router.put('/profile', requireAuth, urlencodedParser,profileController.update_profile);


module.exports = router;