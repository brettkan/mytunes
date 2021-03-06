// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('add', function (song) {
      this.render();
      //this.playQueue(song);
    }, this);

    this.collection.on('remove', function (song) {
      this.render();
    }, this);
  },

  events: {
    'click button': 'savePlaylistHandler'
  },

  savePlaylistHandler: function () {
    this.collection.savePlaylist();
  },

  // playQueue: function(song) {
  //   if (this.collection.length === 1) {
  //     song.play();
  //   }
  // },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Play Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    ).append('<button class="savePlaylist">Save Playlist</button>');

    return this.$el;
  }

});
