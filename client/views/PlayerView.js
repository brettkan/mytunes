// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio id="audioPlayer" controls autoplay />',

  initialize: function() {
    this.model.on('change:currentSong', function(){
      this.setSong(this.model.get('currentSong'));
    }, this);
  },

  events: {
    'ended' : 'handleSongEnd'
  },

  handleSongEnd : function() {
    this.model.ended();
  },

  setSong: function(song){
    this.render();
  },

  render: function(){
    var currentSong = this.model.get('currentSong');
    return this.$el.attr('src', currentSong ? currentSong.get('url') : '');
  }

});
