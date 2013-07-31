// Config settings for NODE_ENV=development

exports.config = {
  assets: {
    minify: false,
    cdn: {
      protocol: 'http',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  api: {
    'default': {
      host: 'api.github.com',
      protocol: 'https'
    },
    'travis-ci': {
      host: 'api.travis-ci.org',
      protocol: 'https'
    },
    'projects': {
      type: 'static',
      datapath: 'projects'
    }
  },

  rendrApp: {
    someProperty: 'someValue'
  }
};
