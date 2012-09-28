Ext.define('SnippetsManager.view.SnippetsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.snippetslist',
    store: 'Snippets',

    forceFit: true,
    columns: [
        { text: 'Title',  dataIndex: 'title', flex: 4 },
        { text: 'Syntax',  dataIndex: 'syntax', flex: 1 },
        { text: 'Created At',  dataIndex: 'created_at', xtype: 'datecolumn', flex: 1, format:'Y-m-d H:i:s' },
        { text: 'Updated At',  dataIndex: 'updated_at', xtype: 'datecolumn', flex: 1, format:'Y-m-d H:i:s' }
    ],
    features: [{ftype:'grouping'}],
    title: "Snippets"
});