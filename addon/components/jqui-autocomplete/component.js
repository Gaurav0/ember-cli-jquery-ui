import Ember from 'ember';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Ember.TextField.extend(jquiWidget, {
    uiType: 'autocomplete',
    uiOptions: ['autofocus', 'delay', 'disabled', 'minLength', 'position', 'source'  ],
    uiEvents: ['close', 'search']
});