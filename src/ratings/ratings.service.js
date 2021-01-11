const RatingsService = {
  getAllRatings(db) {
    return db
      .select('*')
      .from('ratings');
  },
  // getRatingsByUser(db, user_id) {
  //   return db
  //     .from('comments')
  //     .select('*');
  // },
  // 
  getAllRatingsByLocId(db, loc_id) {
    return db
      .select('*')
      .from('ratings')
      .where({ 'location_id': loc_id });
  },
  // getCommentById(db, comment_id) {
  //   return db
  //     .from('comments')
  //     .select('*')
  //     .where({ 'id': comment_id })
  //     .first();
  // },
  // insertComment(db, newComment) {
  //   return db
  //     .insert(newComment)
  //     .into('comments')
  //     .returning('*')
  //     .then(rows => {
  //       return rows[0];
  //     });
  // },
  // deleteComment(db, comment_id) {
  //   return db('comments')
  //     .where({ 'id': comment_id })
  //     .delete();
  // },
  serializeRating(rating) {
    const { id, location_id, stars } = rating;
    return {
      id: id,
      location_id: location_id,
      stars: stars,
    };
  },

};
module.exports = RatingsService;