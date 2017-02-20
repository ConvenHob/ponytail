
Ember.Application.reopen({
    templates: [],

    init: function() {
        this._super();

        this.loadTemplates();
    },

    loadTemplates: function() {
        var app = this,
        templates = this.get('templates');

        app.deferReadiness();

        var promises = templates.map(function(name) {
            return Ember.$.get('app/template/'+name+'.hbs').then(function(data) {
                Ember.TEMPLATES[name] = Ember.Handlebars.compile(data);
            });
        });

        Ember.RSVP.all(promises).then(function() {
            app.advanceReadiness();
        });
    }
});



appName = Ember.Application.create({

    templates: [
        /* 填入,模版的路径(注册模版)) 例如: 'mainPage','mainPage/homePage/homePage'  */
		'homePage','components/blog-header','components/carousel-figures','components/valentine-day'
    ]
});

appName.ApplicationRoute = Ember.Route.extend({
   
});
