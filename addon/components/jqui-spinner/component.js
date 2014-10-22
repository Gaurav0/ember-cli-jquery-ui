import Ember from 'ember';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Ember.TextField.extend(jquiWidget, {
    uiType: 'spinner',
    uiOptions: ['culture', 'disabled', 'incremental', 'max', 'min', 'numberFormat', 'page', 'step'],
    uiEvents: ['change', 'create', 'spin', 'start', 'stop']
});
