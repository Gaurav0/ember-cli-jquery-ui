import Ember from 'ember';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Ember.Component.extend(jquiWidget, {
    uiType: 'button',
    uiOptions: ['disabled'],
    uiEvents: [],
    tagName: 'button',
    disabled: false,
    icon: "",

    didInsertElement: function() {
        var _this = this;
        Ember.run.next(function() {
            _this.$().button("option", "icons", {
                primary: _this.get('icon')
            });
        });
    },

    click: function() {
        this.sendAction();
    }
});
