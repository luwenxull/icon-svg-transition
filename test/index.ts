import BurgeClose from '../src/burge-close'
import PausePlay from '../src/pause-play'
const playPause = new PausePlay({
  active: 'PLAY',
  color: '#81af1a',
  strokeWidth: 2,
})
const burgeClose = new BurgeClose({
  active: 'BURGE',
  color: '#a14555',
  size: [24, 24],
  strokeWidth: 2,
})

playPause.apply(document.getElementById('app'))
burgeClose.apply(document.getElementById('app'))
