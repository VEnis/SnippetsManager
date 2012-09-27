Ext.define('SnippetsManager.view.SnippetsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.snippetslist',
    store: 'Snippets',
    columns: [
        { text: 'Name',  dataIndex: 'name' }
    ],
});