Ext.define('SnippetsManager.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'SnippetsManager.view.TopBar',
        'SnippetsManager.view.SnippetInfo',
        'SnippetsManager.view.SnippetsList',
        'SnippetsManager.view.TagsList'        
    ],

    layout: 'fit',

    initComponent: function() {
        this.items = {
            xtype: 'panel',
            layout: 'border',
            items: [{
                xtype: 'tagslist',
                region: 'west',
                split: true,
                collapsible: true
            }, {
                xtype: 'container',
                region: 'center',
                layout: 'border',
                items: [{
                    xtype: 'snippetslist',
                    region: 'center',
                    flex: 1
                },{
                    xtype: 'snippetinfo',
                    region: 'south',
                    split: true,
                    collapsible: true,
                    flex: 2
                }]
            },{
                xtype:'topbar',
                region:'north'
            }]
        };

        this.callParent();
    }
});