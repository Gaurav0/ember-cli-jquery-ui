import Ember from 'ember';

var OPTIONS = ["altField", "altFormat", "appendText", "autoSize",
    "beforeShow", "beforeShowDay", "buttonImage", "buttonImageOnly",
    "buttonText", "calculateWeek", "changeMonth", "changeYear", "closeText",
    "constrainInput", "currentText", "dateFormat", "dayNames", "dayNamesMin",
    "dayNamesShort", "defaultDate", "duration", "firstDay", "gotoCurrent",
    "hideIfNoPrevNext", "isRTL", "maxDate", "minDate", "monthNames",
    "monthNamesShort", "navigationAsDateFormat", "nextText", "numberOfMonths",
    "onChangeMonthYear", "onClose", "onSelect", "prevText",
    "selectOtherMonths", "shortYearCutoff", "showAnim", "showButtonPanel",
    "showCurrentAtPos", "showMonthAfterYear", "showOn", "showOptions",
    "showOtherMonths", "showWeek", "stepMonths", "weekHeader", "yearRange",
    "yearSuffix"];

var EVENTS = ['onChangeMonthYear', 'onClose', 'onSelect'];

function sendAction(context, actionName) {
    return function() {
        var args = [].slice.call(arguments);
        context.send.apply(context, [actionName].concat(args));
    };
}

var DatePickerComponent = Ember.TextField.extend({
    initDatePicker: function() {
        var _this = this;
        Ember.run.schedule('afterRender', function() {
            var properties = _this.getProperties.apply(_this, OPTIONS);
            _this.proxyDatepickerEvents(properties);
            _this.$().datepicker(properties);
        });
    }.on('didInsertElement'),

    proxyDatepickerEvents: function(properties) {
        var component = this;
        var event;
        for (var i = 0, l = EVENTS.length; i < l; i++) {
            event = EVENTS[i];
            properties[event] = sendAction(component, event);
        }
    },

    actions: {
        onSelect: function() {
            this.set('value', this.$().val());
        },
        onClose: Ember.K,
        onChangeMonthYear: Ember.K
    },

    destroyDatepicker: function() {
        this.method('destroy');
    }.on('willDestroyElement'),

    method: function(method) {
        return this.$().datepicker(method);
    }
});

DatePickerComponent.reopenClass({
    OPTIONS: OPTIONS
});

export default DatePickerComponent;
