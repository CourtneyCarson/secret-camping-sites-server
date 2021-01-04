const CommentsService = {
  getAllComments(db) {
    return db.select('*')
      .from('comments');
  },
  getCommentsByUser(db, user_id) {
    return db
      .from('comments')
      .select('*');
  },
  getCommentById(db, comment_id) {
    return db
      .from('comments')
      .select('*')
      .where({ 'id': comment_id })
      .first();
  },
  insertComment(db, newComment) {
    return db
      .insert(newComment)
      .into('comments')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  deleteComment(db, comment_id) {
    return db('comments')
      .where({ 'id': comment_id })
      .delete();
  },
  serializeComment(comment) {
    const { id, location_id, title, content } = comment;
    return {
      id: id,
      location_id: location_id,
      title: title,
      content: content
    };
  }

};
module.exports = CommentsService;