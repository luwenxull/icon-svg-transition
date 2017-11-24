import BurgeClose from '../src/burge-close'
import CheckCancel from '../src/check-cancel'
import PausePlay from '../src/pause-play'
import UpDouble from '../src/up-double'
const playPause = new PausePlay({
  active: 'PLAY',
  color: '#81af1a',
  size: [60, 60],
  strokeWidth: 2,
  override: true,
  events: {
    click: icon => {
      icon.toggle()
    },
  },
})
const burgeClose = new BurgeClose({
  active: 'BURGE',
  color: '#a14555',
  size: [60, 60],
  strokeWidth: 2,
  events: {
    click: icon => {
      icon.toggle()
    },
  },
})
const checkCancel = new CheckCancel({
  active: 'CHECK',
  color: '#b1ed89',
  size: [60, 60],
  strokeWidth: 2,
  events: {
    click: icon => {
      icon.toggle()
    },
  },
})
const upDouble = new UpDouble({
  active: 'UP',
  color: '#f14aa5',
  size: [60, 60],
  strokeWidth: 2,
  duration: 200,
  events: {
    mouseenter: (e) => {
      e.to('DOUBLE')
    },
    mouseleave: icon => {
      icon.to('UP')
    },
  },
})
playPause.apply(document.getElementById('app'))
burgeClose.apply(document.getElementById('app'))
checkCancel.apply(document.getElementById('app'))
upDouble.apply(document.getElementById('app'))
