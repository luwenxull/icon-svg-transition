import BurgeClose from '../src/burge-close'
import CheckCancel from '../src/check-cancel'
import PausePlay from '../src/pause-play'
import UpDouble from '../src/up-double'
import UpDown from '../src/up-down'
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
  color: '#a1ec89',
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
const upDown = new UpDown({
  active: 'UP',
  color: '#98da01',
  size: [60, 60],
  strokeWidth: 2,
  duration: 200,
  events: {
    mouseenter: (e) => {
      e.to('DOWN')
    },
    mouseleave: icon => {
      icon.to('UP')
    },
  },
})
const app = document.getElementById('app')
playPause.apply(app)
burgeClose.apply(app)
checkCancel.apply(app)
upDouble.apply(app)
upDown.apply(app)
