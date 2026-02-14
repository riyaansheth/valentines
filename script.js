const audio = document.getElementById("music")

if (audio) {
  audio.src = "assets/music/line_without_a_hook.mp3"
  audio.volume = 0.6

  const savedTime = localStorage.getItem("musicTime")
  const isPlaying = localStorage.getItem("musicState")

  if (savedTime) {
    audio.currentTime = parseFloat(savedTime)
  }

  if (isPlaying === "playing") {
    audio.play()
  }

  audio.addEventListener("timeupdate", () => {
    localStorage.setItem("musicTime", audio.currentTime)
  })

  audio.addEventListener("play", () => {
    localStorage.setItem("musicState", "playing")
  })

  audio.addEventListener("pause", () => {
    localStorage.setItem("musicState", "paused")
  })
}

function toggleMusic() {
  if (!audio) return

  if (audio.paused) {
    audio.play()
  } else {
    audio.pause()
  }
}

/* LOVE COUNTER */
const counter = document.getElementById("counter")
if (counter) {
  const loveDate = new Date("2023-11-26T00:00:00")
  const now = new Date()
  const days = Math.floor((now - loveDate) / (1000 * 60 * 60 * 24))
  counter.innerText = "Days since I fell in love with you " + days
}

/* FLOATING HEARTS BACKGROUND */
function spawnHearts() {
  const layer = document.querySelector(".floating-layer")
  if (!layer) return

  for (let i = 0; i < 35; i++) {
    const heart = document.createElement("div")
    heart.className = "floating-heart"
    heart.innerText = "❤️"
    heart.style.left = Math.random() * 100 + "%"
    heart.style.animationDuration = 10 + Math.random() * 8 + "s"
    heart.style.animationDelay = Math.random() * 5 + "s"
    heart.style.fontSize = 14 + Math.random() * 20 + "px"
    layer.appendChild(heart)
  }
}

spawnHearts()

/* SECRET NOTE */
function note() {
  alert("you are my home ❤️")
}

/* HEART GAME */
const zone = document.getElementById("heart-zone")
if (zone) {
  for (let i = 0; i < 15; i++) {
    const h = document.createElement("div")
    h.innerText = "❤️"
    h.style.position = "absolute"
    h.style.left = Math.random() * 85 + "%"
    h.style.top = Math.random() * 70 + "%"
    h.style.fontSize = "26px"
    h.style.cursor = "pointer"
    h.onclick = () => {
      document.getElementById("final").innerText =
        "no matter where we go it will always be YOU ❤️"
    }
    zone.appendChild(h)
  }
}
