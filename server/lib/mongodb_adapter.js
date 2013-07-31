var utils = require('rendr/server/utils'),
    _ = require('underscore'),
    url = require('url'),
    request = require('request'),
    debug = require('debug')('app:MongoDBAdapter'),
    inspect = require('util').inspect;
 
module.exports = MongoDBAdapter;
 
function MongoDBAdapter(options) {
  this.options = options || {};
}

MongoDBAdapter.prototype.request = function(req, api, options, callback) {
      throw new Exception('Implement me!');
};