var Base = require('./base');

module.exports = Base.extend({
  url: '/:name',
  idAttribute: 'name',
  api: 'projects'
});
module.exports.id = 'Project';
 