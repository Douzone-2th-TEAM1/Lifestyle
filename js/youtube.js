var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  new YT.Player('player', {
    videoId: '9d70hZnFA_E',
    playerVars: {
      autoplay: false,
      loop: false,
      playlist: '9d70hZnFA_E',
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
