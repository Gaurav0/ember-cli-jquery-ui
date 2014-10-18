import Ember from 'ember';
import JquiWidgetMixin from 'ember-cli-jquery-ui/mixins/jqui-widget';

module('JquiWidgetMixin');

// Replace this with your real tests.
test('it works', function() {
  var JquiWidgetObject = Ember.Object.extend(JquiWidgetMixin);
  var subject = JquiWidgetObject.create();
  ok(subject);
});
