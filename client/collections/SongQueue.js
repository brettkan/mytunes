// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function () {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function (song) {
      if (song.get('cid') === this.at(0).get('cid')){
        song.ended();
      } else {
        this.remove(song);
      }
    }, this);
  },

  playFirst: function() {
    this.at(0).play();
  },

  enqueue: function(song) {
    var newSong = new SongModel(song.attributes);
    this.push(newSong);
  },

  endCurrentSong: function() {
    this.shift();
    this.at(0).play()
    // var nextSong = this.shift();
    // nextSong.play();
    // this.unshift(nextSong);
  }

});
