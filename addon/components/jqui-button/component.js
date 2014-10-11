import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'button',
    disabled: false,
    icon: "",

    didInsertElement: function() {
        var _this = this;
        Ember.run.schedule('afterRender', function() {
            _this.$().button({
                disabled: _this.get('disabled'),
                icons: {
                    primary: _this.get('icon')
                }
            });
        });
    },

    click: function() {
        this.sendAction();
    },

    disabledDidChange: function() {
        this.$().button("option", "disabled", this.get('disabled'));
    }.observes('disabled')
});
