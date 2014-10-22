import Ember from 'ember';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Ember.TextField.extend(jquiWidget, {
    uiType: 'slider',
    uiOptions: ['animate', 'disabled', 'max', 'min', 'orientation', 'range', 'step', 'value', 'values'  ],
    uiEvents: ['change', 'create', 'slide', 'start', 'stop']
});