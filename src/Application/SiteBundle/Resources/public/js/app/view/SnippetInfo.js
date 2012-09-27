Ext.define('SnippetsManager.view.SnippetInfo', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.snippetinfo',
    tpl: '{content}',
    bbar: [
        { xtype: 'combobox'}
    ]
});