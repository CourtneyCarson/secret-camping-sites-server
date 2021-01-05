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
};

module.exports = LocationService; 