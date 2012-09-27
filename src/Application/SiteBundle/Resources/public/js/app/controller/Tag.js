Ext.define("SnippetsManager.controller.Tag", {
    extend: 'Ext.app.Controller',
    stores: ['Tags'],

    refs: [{
        selector: 'tagslist',
        ref: 'tagsList'
    }],

    init: function(){
        this.control({
            'tagslist' : {
                //selectionchange: this.onTagSelect
            }
        });
    },

    onLaunch: function(){
        var tagsStore = this.getTagsStore();
        tagsStore.load({
            callback: this.onTagsLoad,
            scope: this
        });
    },

    onTagsLoad: function(){
        console.log('Tags loaded');
    }
});