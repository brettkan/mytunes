var PlaylistsView = Backbone.View.extend({
  initialize: function () {
    this.collection.on('add', function() {
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<h2>Play List</h2>').append(
      this.collection.map(function(playlistItem){
        return new SinglePlaylistView({model: playlistItem}).render();
      })
    );

    return this.$el;
  }

});
