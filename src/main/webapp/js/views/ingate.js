window.InGateView = Backbone.View.extend({

    initialize:function () {
        console.log('Initializing InGate View');
        this.render();
        //this.template = _.template(directory.utils.templateLoader.get('home'));
        //this.template = templates['Home'];
    },

    events:{
        "click #showMeBtn":"showMeBtnClick",                	
    },

    render:function () {
        $(this.el).html(this.template());
        return this;
    },

    showMeBtnClick:function () {
    	alert("Button sulla home");
        //app.headerView.search();
    },
    
});