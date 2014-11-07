import Ember from 'ember';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Ember.Component.extend(jquiWidget, {
    uiType: 'accordion',
    uiOptions: ['active', 'animate', 'collapsible', 'disabled', 'event', 'header', 'heightStyle', 'icons'],
    uiEvents: ['activate', 'beforeActivate', 'create']
});