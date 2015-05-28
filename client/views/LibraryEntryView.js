// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  initialize: function() {

    this.model.on('change', function() {
      this.render()
    }, this);

  },

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>Play count: <%= playCount %></td>'),

  events: {
    'click': 'clickHandler'
  },

  clickHandler : function() {
    this.model.enqueue();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
