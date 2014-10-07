module.exports = {
  name: 'ember-cli-jquery-ui',

  included: function(app) {
    this._super.included(app);

    app.import('bower_components/jquery-ui/jquery-ui.js');
    app.import('bower_components/jquery-ui/themes/base/all.css')
  }
};
