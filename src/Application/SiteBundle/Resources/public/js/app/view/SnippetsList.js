Ext.define('SnippetsManager.view.SnippetsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.snippetslist',
    store: 'Snippets',

    forceFit: true,
    columns: [
        { text: 'Name',  dataIndex: 'name', flex: 4 },
        { text: 'Syntax',  dataIndex: 'syntax', flex: 1 },
        { text: 'Created At',  dataIndex: 'created', xtype: 'datecolumn', flex: 1, format:'Y-m-d H:i:s' },
        { text: 'Updated At',  dataIndex: 'updated', xtype: 'datecolumn', flex: 1, format:'Y-m-d H:i:s' }
    ],
    features: [{ftype:'grouping'}],
    title: "Snippets"
});