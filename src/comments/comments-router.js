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


// get comments by location id? 
commentsRouter
.route('/:location_id')
  .get(requireAuth, (req, res, next) => {
    CommentsService.getAllCommentsByLocId(
      req.app.get('db'),
      req.params.loc_id
    )
      .then(comments => {
        if (!comments) {
          return res.status(400).json({
            error: { message: `comment does not exist` }
          });
        }
        res.json(comments.map(CommentsService.serializeComment));
      })
      .catch(next);
})


// post new comment 


  

module.exports = commentsRouter; 