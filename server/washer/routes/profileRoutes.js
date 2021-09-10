const { Router } = require('express');
const bodyParser = require('body-parser');
const profileController = require('../controllers/profileController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = Router();
const urlencodedParser = bodyParser.urlencoded({extended:true});
/**
* @swagger
* paths:
*  /profile:
*    post:
*      tags: 
*        - name: Profile
*      summary: create a new profile
*      security:
*         - bearerAuth: []
*      requestBody:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 addresses:
*                   type: object
*                   properties:
*                     zipcode:
*                       type: integer
*                     country:
*                       type: string
*                     address:
*                       type: string
*                     city:
*                       type: string
*                 name:
*                   type: string
*                 mobile:
*                   type: integer
*             examples:
*               '0':
*                 value: |-
*                   {
*                       "name":"Washer1",
*                       "mobile":1234567890,
*                       "addresses":
*                           {
*                            "country":"india",
*                            "city":"city",
*                            "address":"test",
*                            "zipcode":123
*                           }
*                    }
*      responses:
*        '201':
*          description: Washer profile
*        '400':
*          description: Error occured        
*/
router.post('/profile', requireAuth, urlencodedParser, profileController.post_profile);
/**
 * @swagger
 * /profile:
 *  get:
 *    tags: 
 *      - name: Profile
 *    security:
 *      - bearerAuth: []
 *    summary: Get Profile of logged in washer
 *    responses:
 *      '201':
 *        description: Profile
 *      '400' :
 *        description: Error occured
 */

router.get('/profile',requireAuth, urlencodedParser,profileController.get_specific_profile);
/**
* @swagger
* paths:
*  /profile:
*    put:
*      tags: 
*        - name: Profile
*      summary: update profile
*      security:
*         - bearerAuth: []
*      requestBody:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 addresses:
*                   type: object
*                   properties:
*                     zipcode:
*                       type: integer
*                     country:
*                       type: string
*                     address:
*                       type: string
*                     city:
*                       type: string
*                 name:
*                   type: string
*                 mobile:
*                   type: integer
*             examples:
*               '0':
*                 value: |-
*                   {
*                       "name":"Washer1",
*                       "mobile":1234567890,
*                       "addresses":
*                           {
*                            "country":"india",
*                            "city":"city",
*                            "address":"test",
*                            "zipcode":123
*                           }
*                    }
*      responses:
*        '201':
*          description: updated Washer profile
*        '400':
*          description: Error occured        
*/
router.put('/profile',requireAuth, urlencodedParser,profileController.update_profile);


module.exports = router;