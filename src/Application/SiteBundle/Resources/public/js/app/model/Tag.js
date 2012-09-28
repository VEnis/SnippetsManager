Ext.define('SnippetsManager.model.Tag', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],

    proxy: {
        type: 'rest',
        url: 'tags',
        reader: {
            type: 'json',
            root: 'tags'
        }
    }
});