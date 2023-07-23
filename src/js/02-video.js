import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const videoPlayer = document.querySelector('iframe');
const iframePlayer = new Player(videoPlayer);

iframePlayer.on('timeupdate', throttle(onPlay, 1000));

function onPlay (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
};

iframePlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'))