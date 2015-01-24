var express = require('express');
var path    = require('path');

module.exports = function () {

  var app = express();
      app.use(require('connect-livereload')());
      app.use(express.static('./build'));
      app.listen(4000);

};
