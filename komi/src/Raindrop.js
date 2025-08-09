import Splash from './Splash.js'
import {ctx} from './canvas.js'
import { randomInRange } from './helpers.js'

const minDropHeight = 25
const maxDropHeight = 50
const avgHeight = (minDropHeight + maxDropHeight) / 2
const avgSpeed = 14

let windDirection = 0


export default class Raindrop {
  constructor() {
    this.height = Math.random() * (maxDropHeight - minDropHeight) + minDropHeight
    const heightDiff = this.height - avgHeight
    this.speed = avgSpeed + heightDiff / 5
    this.reset()
  }

  reset() {
    this.x = randomInRange(-window.innerWidth / 2, window.innerWidth * 2)
    this.y = -10
  }

  update() {
    this.y += this.speed
    this.x += windDirection
    if (this.y > window.innerHeight) {
      this.prskanje = new Splash(this.x, this.y)
      this.reset()
    }
    if (this.prskanje) this.prskanje.update()
  }

  render() {
    const dropColor = Math.random > .5 ? 'rgba(200, 200, 255, 0.5)' : 'rgba(205, 190, 232, 0.9)'
    ctx.fillStyle = ctx.strokeStyle = dropColor
    ctx.fillRect(this.x, this.y, 1, this.height)
    if (this.prskanje) this.prskanje.render()
  }
}
