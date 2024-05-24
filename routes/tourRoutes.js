/* eslint-disable import/no-useless-path-segments */
const express = require('express');
const tourController = require('./../controllers/tourController'); // we can also just destructure it.

const router = express.Router(); //create the router

// MIDDLEWARE STACK FOR TOUR ROUTES IF THERE IS AN ID
//router.param('id', tourController.checkID);

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
