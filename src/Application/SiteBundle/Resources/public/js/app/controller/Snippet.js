Ext.define("SnippetsManager.controller.Snippet", {
    extend: 'Ext.app.Controller',
    stores: ['Snippets'],

    refs: [{
        selector: 'snippetslist',
        ref: 'snippetsList'
    },{
        selector: 'snippetinfo',
        ref: 'snippetInfo'
    }],

    init: function(){
        this.control({
            'snippetslist' : {
                selectionchange: this.onSnippetSelect
            }
        });
    },

    onLaunch: function(){
        var snippetsStore = this.getSnippetsStore();
        snippetsStore.load({
            callback: this.onSnippetsLoadLoad,
            scope: this
        });
    },

    onSnippetsLoadLoad: function(){
        var snippetsList = this.getSnippetsList();
        snippetsList.getSelectionModel().select(0);
    },

    onSnippetSelect: function(selModel, selection){
        var snippet = selection[0].data;
        this.getSnippetInfo().update(snippet);
        this.getSnippetInfo().setTitle(snippet.title);

        window.snippet = snippet;

    }
});