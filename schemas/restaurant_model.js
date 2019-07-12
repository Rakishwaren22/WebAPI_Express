var conn = require('../connector');
var schema = require('./restaurant_schema');

const models = conn.model('Restaurant', schema, 'restaurant_collection');

module.exports = models;
