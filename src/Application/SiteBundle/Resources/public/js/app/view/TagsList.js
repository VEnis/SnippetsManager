Ext.define('SnippetsManager.view.TagsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tagslist',
    store: 'Tags',
    columns: [
        { text: 'Name',  dataIndex: 'name' }
    ],
});