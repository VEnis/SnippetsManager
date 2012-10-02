Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'SnippetsManager': 'bundles/applicationsite/js/app',
        'Ext.ux': 'bundles/applicationsite/js/ux',
        'Ext': 'bundles/applicationsite/js/extjs/src'
    }
});

// Splash screen initialization
var splashscreen;

Ext.onReady(function() {
    // Start the mask on the body and get a reference to the mask
    splashscreen = Ext.getBody().mask('Loading application', 'splashscreen');
    // Add a new class to this mask as we want it to look different from the default.
    splashscreen.addCls('splashscreen');

    // Insert a new div before the loading icon where we can place our logo.
    Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
        cls: 'x-splash-icon'
    });
});

// Application initialization
Ext.application({
    name: 'SnippetsManager',
    appFolder: "bundles/applicationsite/js/app",
    autoCreateViewport: true,

    models: ['Snippet', 'Tag'],
    stores: ['Snippets', 'Tags'],
    controllers: ['Snippet', 'Tag'],

    launch: function() {
        // This is fired as soon as the page is ready
        this.hideSplashScreen();
    },
    
    hideSplashScreen: function() {
        // Setup a task to fadeOut the splashscreen
        var task = new Ext.util.DelayedTask(function() {
            // Fade out the body mask
            splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });
            // Fade out the icon and message
            splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: {
                    afteranimate: function() {
                        // Set the body as unmasked after the animation
                        Ext.getBody().unmask();
                    }
                }
            });
        });
        // Run the fade 500 milliseconds after launch.
        task.delay(500);
    }
});