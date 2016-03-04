var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost:27017/matches',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  }//,
  //production: {
  //   rootPath: rootPath,
  //   db: 'mongodb://??'
  //   port: process.env.PORT || 80
  // }
}
