const express = require('express');
const xss = require('xss');
const path = require('path');
const requireAuth = require('../middleware/jwt-auth');

const LocationService = require('./locations.service');

const locationRouter = express.Router();
const jsonParser = express.json();

// get all locations
locationRouter
  .route('/')
  .get(requireAuth, (req, res, next) => {
    LocationService.getAllLocations(
      req.app.get('db'),
      req.user.id
    )
      .then(loc => {
        if (!loc) {
          return res.status(404).json({
            error: { message: `location does not exist` }
          });
        }
        res.json(loc);
      })
      .catch(next);
  })

  .post(requireAuth, jsonParser, (req, res, next) => {
    // on front end imageURL is returned from cloudinary but locations table name is image 
    const { title, content, keyword, image} = req.body;
    const newLocation = { user_id: req.user.id, title, content, keyword, image };


    LocationService.insertNewLocation(
      req.app.get('db'),
      newLocation
    )
      .then(loc => {
        res.status(201)
          .json(newLocation);
      })
      .catch(next);
  });

// post req.body title, content, imageURL, store all into db 
module.exports = locationRouter;