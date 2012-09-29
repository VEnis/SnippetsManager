Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'SnippetsManager': 'bundles/applicationsite/js/app',
        'Ext.ux': 'bundles/applicationsite/js/ux',
        'Ext': 'bundles/applicationsite/js/extjs/src'
    }
});

Ext.application({
    name: 'SnippetsManager',
    appFolder: "bundles/applicationsite/js/app",
    autoCreateViewport: true,

    models: ['Snippet', 'Tag'],
    stores: ['Snippets', 'Tags'],
    controllers: ['Snippet', 'Tag'],

    launch: function() {
        // This is fired as soon as the page is ready
        //console.log("TEST");
    }
});