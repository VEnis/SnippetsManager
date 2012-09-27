Ext.define('SnippetsManager.model.Tag', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],

    proxy: {
        type: 'ajax',
        url: 'bundles/applicationsite/data/tags.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});