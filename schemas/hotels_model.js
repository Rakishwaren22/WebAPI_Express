var conn = require('../connector');
var schema = require('./hotels_schema');

const models = conn.model('Hotels', schema, 'hotel_collection');

module.exports = models;
