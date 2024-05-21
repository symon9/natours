const express = require('express');
const router = express.Router(); //create the router
const tourController = require('./../controllers/tourController'); // we can just destructure it.

/* TOURS */
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
