var AppRouter = Backbone.Router.extend({

  initialize: function() {

    this.on('route:playSong', function(songName) {
      app.playSongFromRouter(songName);
    })

  },

  routes: {
    "song/:songName" : "playSong",
    "*actions" : "defaultRoute"
  }

});
