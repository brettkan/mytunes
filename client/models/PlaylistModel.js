var PlaylistModel = Backbone.Model.extend({
  initialize: function () {

  },

  playPlaylist: function () {
    this.trigger('playPlaylist', this);
  },

});
