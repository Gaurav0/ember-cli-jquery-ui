import Ember from 'ember';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Ember.Component.extend(jquiWidget, {
    uiType: 'slider',
    uiOptions: ['animate', 'disabled', 'max', 'min', 'orientation', 'range', 'step', 'value', 'values'  ],
    uiEvents: ['change', 'create', 'slide', 'start', 'stop'],
    uiActions: {
        slide: function(event, ui) {
            this.set('value', ui.value);
            this.set('values', ui.values);
        }
    }
});