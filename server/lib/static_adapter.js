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

  if(!api.path  || api.path.split("/").length < 1 || api.path.charAt(0) != "/" || api.path.split("/")[1].length == 0) {
    throw new Error("Missing or incorrect path parameter");
  }

  //get static data from local json files, using first dir in path variable
  body = require('../data/' + api.path.split("/")[1] + '.json');
  
  if(api.path.split("/").length > 2 && api.path.split("/")[2].length > 0) {
    var child, childId = api.path.split("/")[2];

    for(var i = 0, m = null; i < body.length; ++i) {
      if(body[i].id != childId) {
          continue;        
      }
      child = body[i];
      break;
    }
    body = child;
  }
  response.body = body;

  callback(err, response, body);
};


