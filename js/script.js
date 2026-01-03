console.log("Vinayak Sharma");

const toCloseSlider = document.querySelector(".heading-btn");
const toOpenSlider = document.querySelector(".slider-btn");

const aside = document.querySelector(".aside");
const library = document.querySelector(".library");
const playlist = document.querySelector(".playlist");
const header = document.querySelector(".header-container");
const state2 = document.querySelector(".closed-btn-header-container");


function toggleLibrary() {

  toCloseSlider.addEventListener("click", () => {

    aside.style.width = "";

    aside.classList.add("closed-aside");
    library.classList.add("closed-library");
    playlist.classList.add("closed-playlist");
    header.classList.add("closed-header-container");
    state2.classList.remove("open-btn-header-container");

  })

  toOpenSlider.addEventListener("click", () => {

    aside.classList.remove("closed-aside");
    library.classList.remove("closed-library");
    playlist.classList.remove("closed-playlist");
    header.classList.remove("closed-header-container");
    state2.classList.add("open-btn-header-container");

    aside.style.width = "";
  })

}

toggleLibrary();



// Slider Button Ends 



const divider = document.querySelector(".scale-container");

let isdragging = false;

divider.addEventListener("mousedown", () => {
  isdragging = true;

  document.body.style.cursor = "grabbing";
})

document.addEventListener("mousemove", (e) => {
  if (!isdragging) return;
  let newWidth = e.clientX;

  if (newWidth < 250) newWidth = 250;
  if (newWidth > 420) newWidth = 420;

  // console.log(newWidth)
  aside.style.width = newWidth + "px";
})

document.addEventListener("mouseup", () => {
  isdragging = false;

  document.body.style.cursor = "default";
})


// tranding__album__content 

const trandingContent = document.querySelector(".tranding__album__content");

const trandingContentData = [
  // { image: "assets/Images/dhurandhar.jpeg", title: 'Gehra Hua (From "Dhurandhar")', artist1: "Shashwat Sachdev", artist2: "Arijit Singh", artist3: "Irshad Kamil", audio: "assets/Images/dhurandhar.jpeg" },
  { image: "assets/Images/Isha1 bawla.jpeg", title: "Ishq Bawla", artist1: "Dhanda Nyoliwala", audio: "assets/Music/Ishq -Bawla.mp3" },
  { image: "assets/Images/Knife-brows.jpeg", title: "Knife Brows", artist1: "Dhanda Nyoliwala", audio: "assets/Music/knife.mp3" },
  { image: "assets/Images/forever.jpeg", title: "Forever", artist1: "Dhanda Nyoliwala", audio: "assets/Music/Forever.mp3" },
  { image: "assets/Images/maruti.jpeg", title: "Maruti", artist1: "Dhanda Nyoliwala", audio: "assets/Music/maruti.mp3" },
  { image: "assets/Images/nobody came.jpeg", title: "NoBody Came", artist1: "Dhanda Nyoliwala", audio: "assets/Music/Nobody Came.mp3" },
  { image: "assets/Images/tension.jpeg", title: "Tension", artist1: "Dhanda Nyoliwala", audio: "assets/Music/Tension.mp3" },
  { image: "assets/Images/Black-Rider.jpeg", title: "Black Ride", artist1: "Dhanda Nyoliwala", audio: "assets/Music/black-ride.mp3" },
];


trandingContentData.forEach((card, index) => {

  trandingContent.insertAdjacentHTML("beforeend",

    `   <div class="tranding__card tranding__card--1">

                        <button class="tranding__card--button" data-index="${index}" data-type="trending" data-audio="${card.audio}" data-image="${card.image}" data-title="${card.title}" data-artist1="${card.artist1}"
>

                        <div class="tranding__card--button--img">
                            <img src="${card.image}" alt="Black-Rider-Music-image" width="153.72">

                              <div><svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path></svg></div>
                        </div>

                          <div class="tranding__card__about">
                            <span class="tranding__album--title">
                              <a  href="/">${card.title}</a>
                            </span>

                            <span class="tradning__card__auther">

                             
                              <a href="/">${card.artist1}</a>
                            </span>
                          </div>

                        </button>

                      </div>`

  );


});


// Artist Card content 

const artistContent = document.querySelector(".artist__section__content");

const artistContentData = [
  { name: "Masum Sharma", title: "Artist", img: "assets/Images/masum sharma.jpeg" },
  { name: "Dhanda Nyliwala", title: "Artist", img: "assets/Images/dhanda.jpeg" },
];

artistContentData.forEach((artist, index) => {

  artistContent.insertAdjacentHTML("beforeend", `
                    <div class="artist__card">

                      <button class="artist__card--button"  data-type="artist" data-index="${index}" >

                        <div class="artist__card--button--img">
                          <img src="${artist.img}" alt="Black-Rider-Music-image" width="153.72">

                          <div><svg data-encore-id="icon" role="img" aria-hidden="true"
                            class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24">
                            <path
                              d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606">
                            </path>
                          </svg></div>

                        </div>

                        <div class="artist__card--button--info">

                          <div class="artist__name">
                          <a href="/">${artist.name}</a>
                          </div>

                          <div class="artist__title">
                           ${artist.title}
                          </div>

                        </div>

                      </button>


                    </div>`
  )


});


// Popular__album__content

const popularContent = document.querySelector(".Popular__album__content");

const popularContentData = [
  { image: "assets/Images/dhurandhar.jpeg", title: 'Gehra Hua (From "Dhurandhar")', artist1: "Shashwat Sachdev", artist2: "Arijit Singh", audio: "assets/Music/Gehra Hua.mp3" },
  { image: "assets/Images/aashili.jpeg", title: "Aashiqui2", artist1: "Mithoon", artist2: "Ankit Tiwari", artist3: "Jeet Ganngali", audio: "assets/Music/Aashiqui 2.mp3" },
  { image: "assets/Images/yai jaeani.jpeg", title: "Yeh Jawaani Hai Dewani", artist1: "Pritam", artist2: "Arijit singh", artist3: "Shefali Alvares", audio: "assets/Music/Ye Jawani Hai Diwani.mp3" },
  { image: "assets/Images/sana.jpeg", title: "Sanam Teri Kasam (Original Motion Picture Sound Track", artist1: "Himesh Reshammiya", artist2: "sameer Anjaan", artist3: "Subrot Sinha", audio: "assets/Music/Sanam Teri Kasam.mp3" },
];

popularContentData.forEach((popular, index) => {

  popularContent.insertAdjacentHTML("beforeend",

    `      <div class="tranding__card tranding__card--1">

                          <button class="tranding__card--button" data-type="popular" data-index="${index}" data-audio="${popular.audio}" data-image="${popular.image}" data-title="${popular.title}" data-artist1="${popular.artist1}" data-artist2="${popular.artist2}" data-artist3="${popular.artist3}" >

                            <div class="tranding__card--button--img">
                              <img src="${popular.image}" alt="Music-image" width="153.72">

                              <div><svg data-encore-id="icon" role="img" aria-hidden="true"
                                  class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24">
                                  <path
                                    d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606">
                                  </path>
                                </svg></div>
                            </div>

                            <div class="tranding__card__about">
                              <span class="tranding__album--title">
                                <a href="/">${popular.title}</a>
                              </span>

                              <span class="tradning__card__auther">

                                <a href="/">${popular.artist1}</a>, <a href="/">${popular.artist2}</a>, <a href="/">${popular.artist3}</a>, <a href="/">hoho</a>
                              </span>
                            </div>

                          </button>

                        </div>`

  )

})


const AlbumContent = document.querySelector(".album__content");
const audio = document.getElementById("audio");

const toAppearImage = document.querySelector(".play__img--image--hidden");
const toAppearTitle = document.querySelector(".play__heading");
const playingSongTitle = document.querySelector(".play__title");
const playingSongArtist = document.querySelector(".play__sub--title");
const poss = document.querySelector(".play--poss button > svg:first-child");
const play = document.querySelector(".play--poss button > svg:last-child");
const audioThumb = document.querySelector("#range::-webkit-slider-thumb");



AlbumContent.addEventListener("click", (e) => {

  const button = e.target.closest("button");
  if (!button) return;

  const clickedType = button.dataset.type;
  if (!clickedType) return;

  playSong(button, clickedType)

})



let currentIndex = null;
let currentList = null;


function playSong(button, clickedType) {

  currentIndex = Number(button.dataset.index);
  currentList = clickedType;

  audio.src = button.dataset.audio;
  audio.play();

  toAppearImage.classList.add("play__img--image");
  toAppearImage.src = button.dataset.image;

  toAppearTitle.classList.remove("play__heading--hidden");
  playingSongTitle.textContent = button.dataset.title;

  const artists = [
    button.dataset.artist1,
    button.dataset.artist2,
    button.dataset.artist3
  ].filter(artist => artist && artist !== "undefined");

  playingSongArtist.textContent = artists.join(", ");


  poss.style.opacity = "0";
  play.style.opacity = "1";
  range.classList.add("show-thumb");

}


const playPauseBtn = document.querySelector(".play--poss button");

playPauseBtn.addEventListener("click", () => {
  if (!audio.src) return;

  if (audio.paused) {
    audio.play();
    poss.style.opacity = "0";
    play.style.opacity = "1";
  } else {
    audio.pause();
    poss.style.opacity = "1";
    play.style.opacity = "0";
  }
});


const playlists = {
  trending: trandingContentData,
  popular: popularContentData
}


const nextBtn = document.querySelector(".next button");

nextBtn.addEventListener("click", () => {
  if (currentIndex === null) return;

  const list = playlists[currentList];
  currentIndex = (currentIndex + 1) % list.length;

  playFromList(list[currentIndex]);
  poss.style.opacity = "0";
  play.style.opacity = "1";

});


const prevBtn = document.querySelector(".previous button");

prevBtn.addEventListener("click", () => {
  if (currentIndex === null) return;

  const list = playlists[currentList];

  currentIndex =
    (currentIndex - 1 + list.length) % list.length;

  playFromList(list[currentIndex]);
  poss.style.opacity = "0";
  play.style.opacity = "1";
});


function playFromList(song) {
  audio.src = song.audio;
  audio.play();

  toAppearImage.classList.add("play__img--image");
  toAppearImage.src = song.image;

  toAppearTitle.classList.remove("play__heading--hidden");
  playingSongTitle.textContent = song.title;

  const artists = [
    song.artist1,
    song.artist2,
    song.artist3
  ].filter(artist => artist && artist !== "undefined");

  playingSongArtist.textContent = artists.join(", ");
}


const range = document.getElementById("range");
const startTime = document.querySelector(".start");
const endTime = document.querySelector(".end");


audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;

  range.value = (audio.currentTime / audio.duration) * 100;
  startTime.textContent = formatTime(audio.currentTime);
  endTime.textContent = formatTime(audio.duration);
});

function formatTime(time) {
  const min = Math.floor(time / 60);
  const sec = Math.floor(time % 60);
  return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

range.addEventListener("input", () => {
  audio.currentTime = (range.value / 100) * audio.duration;
});

const mute = document.querySelector(".mute");
const notMuted = document.querySelector(".mute > svg:first-child");
const lessVolume = document.querySelector(".mute > svg:nth-child(2)");
const muted = document.querySelector(".mute > svg:last-child");

mute.addEventListener("click", () => {

  audio.muted = !audio.muted;

  if (audio.muted) {
    notMuted.style.opacity = "0";
    muted.style.opacity = "1";
  }
  else {
    notMuted.style.opacity = "1";
    muted.style.opacity = "0";
  }

});

const fullscreenBtn = document.querySelector(".fullscreen-btn");

fullscreenBtn.addEventListener("click", () => {

  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
  else {
    document.exitFullscreen();
  }

})

const slider = document.getElementById("volume-bar--input");

function updateSlider() {
  const value =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.setProperty("--value", `${value}%`);
}

slider.addEventListener("input", updateSlider);
updateSlider();


slider.value = audio.volume * 100;

slider.addEventListener("input", () => {
  audio.volume = slider.value / 100;

  if (audio.volume === 0) {
    notMuted.style.opacity = "0";
    lessVolume.style.opacity = "0";
    muted.style.opacity = "1";
  }
  else if (audio.volume <= 0.5 && audio.volume > 0) {
lessVolume.style.opacity = "1";

    notMuted.style.opacity = "0";
    muted.style.opacity = "0";
  } 
  else {
    notMuted.style.opacity = "1";
    lessVolume.style.opacity = "0";
    muted.style.opacity = "0";
  }
});

audio.addEventListener("volumechange", () => {
  slider.value = audio.volume * 100;
});
