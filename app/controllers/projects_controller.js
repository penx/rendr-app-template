// module.exports = {
//   index: function(params, callback) {
//     console.log('projects_controller index');
//     callback();
//   }
// };

module.exports = {
  index: function(params, callback) {
    // var spec = {
    //   collection: {collection: 'Projects', params: params}
    // };
    // this.app.fetch(spec, function(err, result) {
    //   callback(err, result);
    // });

    var spec = {
      build: { collection: 'Projects', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, result);
    });


  }//,

  // show: function(params, callback) {
  //   var spec = {
  //     model: {model: 'Project', params: params}
  //   };
  //   this.app.fetch(spec, function(err, result) {
  //     callback(err, result);
  //   });
  // }
};
