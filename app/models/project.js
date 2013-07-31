var Base = require('./base');

module.exports = Base.extend({
  url: '/projects/:name',
//  idAttribute: 'name',
//  type: 'static',
  api: 'projects'
});
module.exports.id = 'Project';
 