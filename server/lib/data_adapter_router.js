var utils = require('rendr/server/utils'),
    _ = require('underscore'),
    url = require('url'),
    request = require('request'),
    debug = require('debug')('app:DataAdapterRouter'),
    inspect = require('util').inspect,
    DataAdapterBase = require('rendr/server/data_adapter/index'),
    RestAdapter = require('rendr/server/data_adapter/rest_adapter'),
    StaticAdapter = require('./static_adapter'),
    ra, sa;

module.exports = DataAdapterRouter;

function DataAdapterRouter(options) {
  ra = new RestAdapter(options);
  sa = new StaticAdapter(options);
  DataAdapterBase.call(this, options);
}

DataAdapterRouter.prototype.request = function(req, api, options, callback) {
  //if api type is blank, use rest:
  if(!api.api || !this.options[api.api] || !this.options[api.api].type || this.options[api.api].type === "rest") {
    return ra.request.apply(ra, arguments);
  } else {
    //else call depending on api type
    if(this.options[api.api].type === "static") {
      return sa.request.apply(ra, arguments);
    } else {
      throw new Exception('Implement me!');
    }
  }
};