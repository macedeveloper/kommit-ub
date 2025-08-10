import Rain from './Rain.js'

const rain = new Rain()
let animationId = null
let isRaining = true

const audio = document.getElementById("rain");
audio.volume = 0.2;

function update(now) {
    if (isRaining) {
        rain.update(now)
    }
    animationId = window.requestAnimationFrame(update)
}

animationId = window.requestAnimationFrame(update)

document.getElementById('toggleRain').addEventListener('click', function() {
    isRaining = !isRaining
    this.textContent = isRaining ? 'stop rain' : 'start rain'
    audio.muted = !audio.muted;
  
    if (!isRaining && rain.clear) {
        rain.clear()
    }
})