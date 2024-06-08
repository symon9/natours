const express = require('express');
const tourController = require('./../controllers/tourController'); // we can also just destructure it.
const authController = require('./../controllers/authController');
const reviewsController = require('../controllers/reviewController');

const router = express.Router(); //create the router

// MIDDLEWARE STACK FOR TOUR ROUTES IF THERE IS AN ID
//router.param('id', tourController.checkID);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router.route('/tour-stats').get(tourController.getTourStats);
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour,
  );

// POST /tour/345s78fci/reviews
// GET /tour/345s78fci/reviews
// GET /tour/345s78fci/reviews/8f8h9826528

router
  .route('/:tourId/reviews')
  .post(
    authController.protect,
    authController.restrictTo('user'),
    reviewsController.createReviews,
  );

module.exports = router;
