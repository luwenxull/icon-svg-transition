import BurgeClose from '../src/burge-close'
import PausePlay from '../src/pause-play'
const playPause = new PausePlay({
  active: 'PLAY',
  color: '#81af1a',
})
const burgeClose = new BurgeClose({
  active: 'BURGE',
  color: '#a14555',
})

playPause.apply(document.getElementById('app'))
burgeClose.apply(document.getElementById('app'))
