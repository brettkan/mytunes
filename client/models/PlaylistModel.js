var PlaylistModel = Backbone.Model.extend({
  initialize: function () {

  },

  addToQueue: function () {
    this.trigger('addToQueue', this);
  }

});
