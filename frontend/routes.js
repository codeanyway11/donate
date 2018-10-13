const routes = require('next-routes')();

routes
  .add('index', '/', 'index')
  .add('donate', '/donate', 'donate');

module.exports = routes;
