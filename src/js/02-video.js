import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const currentTimeKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(function(event) {
  const currentTime = event.seconds;
  localStorage.setItem(currentTimeKey, currentTime);
}, 1000));

const savedTime = localStorage.getItem(currentTimeKey);
if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime));
}
