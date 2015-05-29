var AppRouter = Backbone.Router.extend({

  initialize: function() {

    this.on('route:playSong', function(songID) {
      myTunes.app.playSongFromRouter(songID);
    });

  },

  routes: {
    "song/:songID" : "playSong",
  }

});
