const bodyParser = require('body-parser');
const profileController = require('../controllers/profileController');

const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');

const urlencodedParser = bodyParser.urlencoded({ extended: true})
const router = Router();


router.post('/profile', requireAuth,  urlencodedParser, profileController.post_profile);


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
*                 car:
*                   type: object
*                   properties:
*                     carName:
*                       type: string
*             schema1:
*               type: object
*               properties:
*                 addresses:
*                   type: object
*                   properties:
*                     country:
*                       type: string
*                     zipcode:
*                       type: string
*                 name:
*                   type: string
*                 mobile:
*                   type: integer
*                 noOfWashes:
*                   type: string
*             examples:
*               '0':
*                 value: |-
*                   {
*                       "name":"inprocess",
*                       "mobile":10000,
*                       "noOfWashes":100,
*                       "addresses":
*                           {
*                            "country":"india",
*                            "zipcode":500000
*                           }
*                    }
*      responses:
*        '201':
*          description: profile details
*        '400':
*          description: Error occured        
*/
router.get('/profile', requireAuth, urlencodedParser,profileController.get_specific_profile);


/**
 * @swagger
 * /profile:
 *  get:
 *    summary: get spcific profile details 
 *    security:
 *      - bearerAuth: []
 *    tags: 
 *      - name: Profile
 *    responses:
 *      '200':
 *        description: list of all profile 
 *      '400' :
 *        description: Error occured
 */

router.put('/profile', requireAuth, urlencodedParser,profileController.update_profile);


/**
* @swagger
* paths:
*  /profile:
*    put:
*      tags: 
*        - name: Profile
*      summary: update a new profile
*      security:
*         - bearerAuth: []
*      requestBody:
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 car:
*                   type: object
*                   properties:
*                     carName:
*                       type: string
*             schema1:
*               type: object
*               properties:
*                 addresses:
*                   type: object
*                   properties:
*                     country:
*                       type: string
*                     zipcode:
*                       type: string
*                 name:
*                   type: string
*                 mobile:
*                   type: integer
*                 noOfWashes:
*                   type: string
*             examples:
*               '0':
*                 value: |-
*                   {
*                       "name":"inprocess",
*                       "mobile":10000,
*                       "noOfWashes":100,
*                       "addresses":
*                           {
*                            "country":"india",
*                            "zipcode":500000
*                           }
*                    }
*      responses:
*        '200':
*          description: updated profile
*        '400':
*          description: Error occured        
*/

module.exports = router;