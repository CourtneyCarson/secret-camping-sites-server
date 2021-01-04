const express = require('express'); 
const xss = require('xss'); 
const path = require('path'); 

//service import it 
const CommentsService = require('./comments-service'); 
const requireAuth = require('../middleware/jwt-auth');

//router + json parser
const commentsRouter = express.Router(); 
const jsonParser = express.json(); 


//routes
// get all notes 
commentsRouter
  .route('/')
  .get(requireAuth, (req, res, next) => {
    CommentsService.getCommentsByUser(
      req.app.get('db'),
      req.user.id
    )
      .then(comment => {
        res.json(comment.map(CommentsService.serializeComment));
      })
      .catch(next);
  });



  

module.exports = commentsRouter; 