var utils = require('rendr/server/utils'),
  _ = require('underscore'),
  url = require('url'),
  request = require('request'),
  debug = require('debug')('app:StaticAdapter'),
  inspect = require('util').inspect;
 
module.exports = StaticAdapter;
 
function StaticAdapter(options) {
  this.options = options || {};
}

// 
// `req`: Actual request object from Express/Connect.
// `api`: Object describing API call; properties including 'path', 'query', etc.
//        Passed to `url.format()`.
// `options`: (optional) Options.
// `callback`: Callback.
//
StaticAdapter.prototype.request = function(req, api, options, callback) {
  /**
   * Allow for either 3 or 4 arguments; `options` is optional.
   */
  var err = null, response = {}, body;

  if (arguments.length === 3) {
    callback = options;
    options = {};
  }

  //get static data from local json files, using path variable
  body = require('../data/' + this.options[api.api].datapath + '.json');
  
  response.body = body;

  callback(err, response, body);
};


