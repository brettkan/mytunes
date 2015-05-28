// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function (song) {
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
    var nextSong = this.at(0);
    var songSource = nextSong.get('source');
    nextSong.play();
    // songSource.set('playCount', songSource.get('playCount') + 1);
  },

  enqueue: function(song) {
    var newSong = new SongModel(song.attributes);
    newSong.set('source', song);
    this.push(newSong);
  },

  savePlaylist: function() {
    this.trigger('savePlaylist', this);
  },

  newQueue: function(songCollection) {
    this.reset();
    songCollection.each(function(song) {
      this.enqueue(song);
    }, this)
  }

});








