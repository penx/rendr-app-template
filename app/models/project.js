var Base = require('./base');

module.exports = Base.extend({
  url: '/projects/:name',
  idAttribute: 'name',
  api: 'static'
});
module.exports.id = 'Project';
 