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
    song: "",
    img: "./music/img/colors-minial.jpeg",
    src: "./music/songs/colors-lofi.mp3"
  }
]

indexNum = 1

window.addEventListener('load', () => {
  loadSong(indexNum)
})

function loadSong (songIndex){
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
  songList++
  // have to increment by 1
}

nextBtn.addEventListener("click", () => {

})
