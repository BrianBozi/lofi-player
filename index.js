const playBtn = document.querySelector(".play")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".previous")
const pauseBtn = document.querySelector(".pause")
const albumArt = document.querySelector(".albumArt")
const song = document.querySelector(".songs")

const songList = [
  {
    song: "Lofi Mando",
    img: "./music/img/mando-lofi.jpeg",
    src: "./music/songs/lofi-mando.mp3"
  },
  {
    song: "color-lofi",
    img: "./music/img/colors-minial.jpeg",
    src: "./music/songs/colors-lofi.mp3"
  },
  {
    song: "Rude",
    img: "./music/img/rude.jpeg",
    src: "./music/songs/Rude.mp3"
  }
]

let indexNum = 1

window.addEventListener('load', () => {
  loadSong(indexNum)
})

function loadSong (indexNum){
  albumArt.src = `${songList[indexNum - 1].img}`
}


playBtn.addEventListener('click', function (event) {
  playBtn.className = "hidden"
  pauseBtn.className = "pause"
  song.src = `${songList[indexNum - 1].src}`
  song.play()
})

pauseBtn.addEventListener('click', function (event) {
  playBtn.className = "play"
  pauseBtn.className = "hidden"
  song.pause()
})

function nextTrack () {
  indexNum++
  indexNum > songList.length ? indexNum = 1 : indexNum = indexNum
  loadSong(indexNum)
  // if (indexNum)
}

nextBtn.addEventListener("click", () => {
  console.log("next btn")
  nextTrack()
})

function prevTrack() {
  indexNum--
  indexNum < 1 ? indexNum = songList.length : indexNum = indexNum
  loadSong(indexNum)
  // have to increment by 1
  if( indexNum < 1) {
    indexNum === songList.length
  } else {
    indexNum === indexNum
  }
}

prevBtn.addEventListener("click", () => {
  console.log("next btn")
  prevTrack()
})
