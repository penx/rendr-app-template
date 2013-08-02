var Project = require('../models/project')
  , Base = require('./base');

module.exports = Base.extend({
  model: Project,
  url: '/projects',
  api: 'static'
});
module.exports.id = 'Projects';
