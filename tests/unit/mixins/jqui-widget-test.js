import Ember from 'ember';
import {module, test} from 'qunit';
import JquiWidgetMixin from 'ember-cli-jquery-ui/mixins/jqui-widget';

module('JquiWidgetMixin');

test('it works', function(assert) {
  var JquiWidgetObject = Ember.Object.extend(JquiWidgetMixin);
  var subject = JquiWidgetObject.create();
  assert.ok(subject);
});

test('gathers options', function(assert) {
  var JquiWidgetObject = Ember.Object.extend(JquiWidgetMixin, {
    uiOptions: ['option1', 'option2']
  });
  var subject = JquiWidgetObject.create();
  var options = subject._gatherOptions();
  assert.ok('option1' in options);
  assert.ok('option2' in options);
});
