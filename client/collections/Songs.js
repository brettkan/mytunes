// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  playSongFromRouter: function(songID) {
    this.each(function(song) {
      if (songID === song.cid) {
        song.enqueue();
      }
    })
  }

});
