// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  playSongFromRouter: function(songName) {
    // this.each(function(song) {
      if (songName === 'test') {
        this.at(0).enqueue();
      }
    // })
  }

});
