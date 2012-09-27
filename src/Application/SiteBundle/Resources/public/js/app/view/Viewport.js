Ext.define('SnippetsManager.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'SnippetsManager.view.ActionBar',
        'SnippetsManager.view.SnippetInfo',
        'SnippetsManager.view.SnippetsList',
        'SnippetsManager.view.TagsList'        
    ],

    layout: 'fit',

    initComponent: function() {
        this.items = {
            xtype: 'panel',
            dockedItems: [{
                dock: 'top',
                xtype: 'toolbar',
                height: 80,
                items: [{
                    xtype: 'actionbar',
                    width: 150
                }, {
                    xtype: 'component',
                    html: 'Snippets Manager<br>Ultimate Solution'
                }]
            }],
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [{
                width: 250,
                xtype: 'panel',
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'tagslist',
                    flex: 1
                }, {
                    html: 'Ad',
                    height: 250,
                    xtype: 'panel'
                }]
            }, {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'snippetslist',
                    height: 250
                }, {
                    xtype: 'snippetinfo',
                    flex: 1
                }]
            }]
        };

        this.callParent();
    }
});