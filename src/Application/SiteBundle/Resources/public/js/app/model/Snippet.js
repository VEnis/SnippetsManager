Ext.define('SnippetsManager.model.Snippet', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'syntax', 'created', 'updated', 'content'],

    proxy: {
        type: 'ajax',
        url: 'data/snippets.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});