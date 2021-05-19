const express = require('express');
const router = express.Router();
const  ApiController = require( '../controllers/api');


router.get('/states',ApiController.api_get_states);
router.get('/districts/:id',ApiController.api_get_districts);
router.get('/slots/:id',ApiController.api_get_slots);
module.exports = router; 