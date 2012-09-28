Ext.define('SnippetsManager.model.Snippet', {
    extend: 'Ext.data.Model',

    fields: [
        {name:'id', type:'auto'},
        {name:'title', type:'string'},
        {name:'syntax', type:'string'},
        {name:'created_at', type:'date', dateFormat: "Y-m-dTH:i:sO"},
        {name:'updated_at', type:'date', dateFormat: "Y-m-dTH:i:sO"},
        {name:'content', type:'string'}
    ],

    hasMany: "Tag",

    proxy: {
        type: 'rest',
        url: 'snippets',
        reader: {
            type: 'json',
            root: 'snippets'
        }
    }
});