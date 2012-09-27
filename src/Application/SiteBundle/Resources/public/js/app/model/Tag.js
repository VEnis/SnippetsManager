Ext.define('SnippetsManager.model.Tag', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],

    proxy: {
        type: 'ajax',
        url: 'data/tags.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});