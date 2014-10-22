import Ember from 'ember';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Ember.Component.extend(jquiWidget, {
    uiType: 'slider',
    uiOptions: ['animate', 'disabled', 'max', 'min', 'orientation', 'range', 'step', 'value', 'values'  ],
    uiEvents: ['change', 'create', 'slide', 'start', 'stop'],
    slide: function(event, ui) {
        this.set('value', ui.value);
    },
    change: function(event, ui) {
        var _this = this;
        Ember.run.next(function() {
            _this.set('value', ui.value);
        });
    }
});