const LocationService = {
  getAllLocations(db) {
    return db
      .select('*')
      .from('locations');
  },
  getLocationsById(db, loc_id) {
    return db
      .from('locations')
      .select('*')
      .where({ 'id': loc_id })
      .first();
  },
  // saved to users account:
  // getLocationsByUser(db, user_id) {
  //   return db
  //   .from('locations')
  // }
  insertNewLocation(db, newLoc) {
    return db
      .insert(newLoc)
      .into('locations')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  // get items by keyword (filter) 
  getItemsByKeyword(db, key_word) {
    return db
      .from('locations')
      .select('*')
      .where('keyword', 'like', `%${key_word}%`);
  },
};




module.exports = LocationService; 