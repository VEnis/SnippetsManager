Ext.define('SnippetsManager.view.TopBar', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.topbar',

    requires: [
        'SnippetsManager.view.SnippetsActions'        
    ],
    
    layout: "hbox",

    items: [{
            xtype: "snippetsactions"
        },{
            xtype: "snippetsactions"
        },{
            xtype: "snippetsactions"
    }]
});