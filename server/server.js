'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var settings = require('./datasources.local');

var DataSource = require('loopback-datasource-juggler').DataSource;

var app = module.exports = loopback();

var resSource = require('loopback-connector-rest');

var dataSource = new DataSource(resSource,settings.DataAPI);
app.dataSource('DataAPI', dataSource);

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
