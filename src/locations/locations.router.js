const express = require('express')
const xss = require('xss');
const path = require('path')
const requireAuth = require('../middleware/jwt-auth');

const LocationService = require('./locations.service')

const locationRouter = express.Router();
const jsonParser = express.json();

// get all locations
locationRouter
  .route('/')
  .get(requireAuth, (req, res) => {
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
      });
  });
module.exports = locationRouter;