import BurgeClose from '../src/burge-close'
import CheckCancel from '../src/check-cancel'
import PausePlay from '../src/pause-play'
const playPause = new PausePlay({
  active: 'PLAY',
  color: '#81af1a',
  size: [60, 60],
  strokeWidth: 2,
})
const burgeClose = new BurgeClose({
  active: 'BURGE',
  color: '#a14555',
  size: [60, 60],
  strokeWidth: 2,
})
const checkCancel = new CheckCancel({
  active: 'CHECK',
  color: '#a14555',
  size: [60, 60],
  strokeWidth: 2,
})
playPause.apply(document.getElementById('app'))
burgeClose.apply(document.getElementById('app'))
checkCancel.apply(document.getElementById('app'))
