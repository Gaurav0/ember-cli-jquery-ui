import Ember from 'ember';
import jquiWidget from 'ember-cli-jquery-ui/mixins/jqui-widget';

export default Ember.Component.extend(jquiWidget, {
    uiType: 'tabs',
    uiOptions: ['active', 'collapsible', 'disabled', 'event', 'heightStyle', 'hide', 'show'],
    uiEvents: ['activate', 'beforeActivate', 'beforeLoad', 'create', 'load'],

    uiActions: {
        // Hacky workaround for bug in JQuery UI Tabs _isLocal method
        // Source: http://stackoverflow.com/questions/13837304/jquery-ui-non-ajax-tab-loading-whole-website-into-itself
        create: function(event){
            var $ = Ember.$;
            var tabsData = $(event.target).data('ui-tabs');
            tabsData.anchors.each(function(idx, anchor){
                var contentId = $(anchor).attr('href');
                var $panel = $(tabsData.panels[idx]);
                $panel.html($(contentId).remove().html());
            });
        },
        beforeLoad: function(event){
            event.preventDefault();
        }
    }
});