import Ember from 'ember';
import JquiWidgetMixin from 'ember-cli-jquery-ui/mixins/jqui-widget';

module('JquiWidgetMixin');

test('it works', function() {
  var JquiWidgetObject = Ember.Object.extend(JquiWidgetMixin);
  var subject = JquiWidgetObject.create();
  ok(subject);
});

test('gathers options', function() {
  var JquiWidgetObject = Ember.Object.extend(JquiWidgetMixin, {
    uiOptions: ['option1', 'option2']
  });
  var subject = JquiWidgetObject.create();
  var options = subject._gatherOptions();
  ok('option1' in options);
  ok('option2' in options);
});
