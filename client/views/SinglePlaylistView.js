var SinglePlaylistView = Backbone.View.extend({

  initialize: function () {

  },

  tagName: "table",

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Play List</th>').append(
      this.model.get('playlist').map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );

    return this.$el;
  }


});
