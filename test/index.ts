import PlayPause from '../src/pause-play'
const playPause = new PlayPause({
  active: 'PLAY',
  color: '#21afaa',
})
playPause.apply(document.getElementById('app'))
