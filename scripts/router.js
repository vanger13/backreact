define(function(require) {
        var Backbone = require('backbone');
        
        var AppRouter = Backbone.Router.extend({
            routes: {
                '': 'MainCtrl',
                'hello/:name': 'HelloCtrl'
            },

            MainCtrl: require('controllers/main'),

            HelloCtrl: require('controllers/hello')
        });

        return new AppRouter;
    });