 var utils = require('rendr/server/utils'),
  _ = require('underscore'),
  url = require('url'),
  request = require('request'),
  debug = require('debug')('app:StaticAdapter'),
  env = require('./env'),
  linkedin_client = require('linkedin-js')(env.current.rendrApp.linkedIn.apiKey, env.current.rendrApp.linkedIn.secretKey, env.current.rendrApp.linkedIn.oauth_url),
  inspect = require('util').inspect;
  
module.exports = LinkedInAdapter;
 
function LinkedInAdapter(options) {
  this.options = options || {};
}

// 
// `req`: Actual request object from Express/Connect.
// `api`: Object describing API call; properties including 'path', 'query', etc.
//        Passed to `url.format()`.
// `options`: (optional) Options.
// `callback`: Callback.
//
LinkedInAdapter.prototype.request = function(req, api, options, callback) {
  /**
   * Allow for either 3 or 4 arguments; `options` is optional.
   */
  var err = null, response = {}, body;

  if (arguments.length === 3) {
    callback = options;
    options = {};
  }

  linkedin_client.apiCall('GET', '/people/~:(summary)', {
      token: {
        oauth_token_secret: env.current.rendrApp.linkedIn.oauth_token_secret,
        oauth_token: env.current.rendrApp.linkedIn.oauth_token
      }
    }, function (error, result) {
      response.body = result;
      callback(error, response, result);
  });
};