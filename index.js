const playBtn = document.querySelector(".play")
const nextBtn = document.querySelector(".next")
const prevBtn = document.querySelector(".previous")
const pauseBtn = document.querySelector(".pause")
const albumArt = document.querySelector(".albumArt")
const song = document.querySelector(".songs")
const songName = document.querySelector(".song-name")
const artist = document.querySelector(".artist")

const songList = [
  {
    song: "Lofi Mando",
    artist: "Closed on Sunday",
    img: "mando-lofi.jpeg",
    src: "lofi-mando.mp3"
  },
  {
    song: "Colors lofi",
    artist: "eirascheper",
    img: "colors-minial.jpeg",
    src: "colors-lofi.mp3"
  },
  {
    song: "Rude",
    artist: "Eternal Youth",
    img: "rude.jpeg",
    src: "Rude.mp3"
  },
  {
    song: "Before you go",
    artist: "jhove",
    img: "before-you-go.jpeg",
    src: "before-you-go.mp3"
  }

]

let indexNum = 1

window.addEventListener('load', () => {
  loadSong(indexNum)
})

function loadSong (indexNum){
  albumArt.src = `./music/img/${songList[indexNum - 1].img}`
}

function songPlayinng (){
  song.src = `./music/songs/${songList[indexNum - 1].src}`
  songName.innerText = `${songList[indexNum - 1].song}`
  artist.innerText = `${songList[indexNum - 1].artist}`
  song.play()
}

playBtn.addEventListener('click', function (event) {
  playBtn.className = "hidden"
  pauseBtn.className = "pause"
  songPlayinng()
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
  songPlayinng()
}

nextBtn.addEventListener("click", () => {
  console.log("next btn")
  nextTrack()
})

function prevTrack() {
  indexNum--
  indexNum < 1 ? indexNum = songList.length : indexNum = indexNum
  loadSong(indexNum)
  songPlayinng()
}

prevBtn.addEventListener("click", () => {
  console.log("next btn")
  prevTrack()
})

song.addEventListener("ended", function( ){
  nextTrack()
})
