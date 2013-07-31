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
  if (arguments.length === 3) {
    callback = options;
    options = {};
  }

  var err = null, response = {}, body = [{name:"test1"}, {name:"test2"}];
  response.body = body;

  callback(err, response, body);
};


