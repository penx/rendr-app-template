var Base = require('./base');

module.exports = Base.extend({
  url: '/projects/:name',
  idAttribute: 'name',
  api: 'projects'
});
module.exports.id = 'Project';
 