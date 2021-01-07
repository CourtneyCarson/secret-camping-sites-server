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

  // post a new location to db 
  .post(requireAuth, jsonParser, (req, res, next) => {
    const { title, content, keyword, image } = req.body;
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

// filter by search word - get request
locationRouter
  .route('/keyword/:searchTerm')
  .all((req, res, next) => {
    const { searchTerm } = req.params;
    // console.log(searchTerm)
    LocationService.getItemsByKeyword(req.app.get('db'), req.params.searchTerm)
      // console.log('after locservice', searchTerm)
      .then(loc => {
        if (!loc) {
          return res.status(404).json({
            error: { message: `Location doesn't exist` },
          });
        }
        res.loc = loc;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(res.loc);
  });










module.exports = locationRouter;