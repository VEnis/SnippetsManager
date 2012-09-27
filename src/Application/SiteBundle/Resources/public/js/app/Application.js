Ext.application({
    name: 'SnippetsManager',
    appFolder: "bundles/applicationsite/js/app",
    autoCreateViewport: true,

    models: ['Snippet', 'Tag'],
    stores: ['Snippets', 'Tags'],

    launch: function() {
        // This is fired as soon as the page is ready
        console.log("TEST");
    }
});