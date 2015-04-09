import Ember from 'ember';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Ember.TextField.extend(jquiWidget, {
  uiType: 'datepicker',
  uiOptions: ["altField", "altFormat", "appendText", "autoSize",
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
    "yearSuffix"]
});
