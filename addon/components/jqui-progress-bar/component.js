import Ember from 'ember';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Ember.Component.extend(jquiWidget, {
    uiType: 'progressbar',
    uiOptions: ['value', 'max'],
    uiEvents: ['change', 'complete']
});
