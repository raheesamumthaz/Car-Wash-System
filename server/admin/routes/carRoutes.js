const { Router } = require("express");
const carController = require("../controllers/carController");
const bodyParser = require("body-parser");
const { requireAuth } = require("../middleware/authMiddleware");

const router = Router();
const urlencodedparser = bodyParser.urlencoded({ extended: true });

//Get all cars
router.get("/cars",requireAuth, carController.get_cars);

// Get a specific car by id
router.get("/cars/:id", requireAuth, carController.get_car);

// create a new car

router.post("/cars", requireAuth, urlencodedparser, carController.post_cars);

// update a car by its id

router.put("/cars/:id",requireAuth,  urlencodedparser, carController.put_cars);

// delete a car by its id

router.delete("/cars/:id", requireAuth, carController.delete_cars);

module.exports = router;
