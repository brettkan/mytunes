var Playlists = Backbone.Collection.extend({

  model: PlaylistModel,

  addPlaylist: function (songCollection) {
    var copyPlaylist = new Songs();
    songCollection.each(function (song) {
      copyPlaylist.add(new SongModel(song.attributes));
    });
    this.add(new PlaylistModel({playlist: copyPlaylist}));
  }

});
