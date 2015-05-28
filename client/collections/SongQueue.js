// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },

  enqueue: function(song) {
    this.push(song);
  },

  dequeue: function(song) {
    this.remove(song);
  },

  endCurrentSong: function() {
    this.shift();
    this.at(0).play()
    // var nextSong = this.shift();
    // nextSong.play();
    // this.unshift(nextSong);
  }

});
