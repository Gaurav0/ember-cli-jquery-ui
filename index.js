var path = require('path');

module.exports = {
  name: 'ember-cli-jquery-ui',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    app.import(path.join(app.bowerDirectory, 'jquery-ui', 'jquery-ui.js'));
    app.import(path.join(app.bowerDirectory, 'jquery-ui', 'themes', 'base', 'all.css'));
  },

  treeForPublic: function(tree) {
    return this.pickFiles(path.join(app.bowerDirectory, 'jquery-ui', 'themes', 'base', 'images'), {
      srcDir: '/',
      files: '**/*.*',
      destDir: '/images'
    });
  }
};
