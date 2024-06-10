const express = require("express");
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/overview', viewsController.getOverview);
router.get('/tour', viewsController.getOverview);

module.exports = router
