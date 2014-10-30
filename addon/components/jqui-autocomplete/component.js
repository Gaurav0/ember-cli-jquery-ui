import Ember from 'ember';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Ember.Component.extend(jquiWidget, {
    uiType: 'autocomplete',
    uiOptions: ['appendTo', 'autofocus', 'delay', 'disabled', 'minLength', 'position', 'source'  ],
    uiEvents: ['close', 'search'],
    uiSetup: function() {
        var _this = this;
        Ember.run.schedule('afterRender', function() {
            _this.set('appendTo', _this.$().find(".ui-front").eq(0));
        });
    }.on('didInsertElement')
});