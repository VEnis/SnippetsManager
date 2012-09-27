Ext.define('SnippetsManager.model.Snippet', {
    extend: 'Ext.data.Model',

    fields: [
        {name:'id', type:'auto'},
        {name:'name', type:'string'},
        {name:'syntax', type:'string'},
        {name:'created', type:'date', dateFormat: "timestamp"},
        {name:'updated', type:'date', dateFormat: "timestamp"},
        {name:'content', type:'string'}
    ],

    proxy: {
        type: 'ajax',
        url: 'bundles/applicationsite/data/snippets.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});