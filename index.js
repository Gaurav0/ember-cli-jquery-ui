var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-cli-jquery-ui',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    app.import(path.join(app.bowerDirectory, 'jquery-ui', 'jquery-ui.js'));

    var cssFileDir = path.join(app.bowerDirectory, 'jquery-ui', 'themes', 'base');
    var cssFiles = fs.readdirSync(cssFileDir);

    cssFiles.forEach(function(file) {
      if (/^.*\.css$/.test(file))
        app.import(path.join(cssFileDir, file));
    });

    var imgFileDir = path.join(app.bowerDirectory, 'jquery-ui', 'themes', 'base', 'images');
    var imgFiles = fs.readdirSync(imgFileDir);

    imgFiles.forEach(function(file) {
      app.import(path.join(imgFileDir, file), {
        destDir: "/assets/images"
      });
    });
  }
};
