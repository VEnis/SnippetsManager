Ext.define('SnippetsManager.view.TagsList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tagslist',
    store: 'Tags',

    title: "Tags",
    forceFit: true,
    //header: false,
    columns: [{
        text: "Name", dataIndex: "name", sortable: false, draggable: false, menuDisabled: true
    }],
    hideHeaders: true,
    width: 100
});