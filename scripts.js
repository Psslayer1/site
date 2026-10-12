// ================= STARS =================
const starContainer = document.getElementById("star-container");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = Math.random() * 100 + "vw"; // random horizontal position
  star.style.width = star.style.height = (1 + Math.random() * 2) + "px"; // random size
  star.style.animationDuration = 3 + Math.random() * 3 + "s"; // random speed
  starContainer.appendChild(star);
  setTimeout(() => star.remove(), 6000); // remove after animation
}

setInterval(createStar, 100); // generate stars continuously

// ================= LETTER MODAL =================
const letterModal = document.getElementById("letterModal");
document.getElementById("openBtn").addEventListener("click", () => {
  letterModal.style.display = "flex";
});
document.getElementById("closeLetter").addEventListener("click", () => {
  letterModal.style.display = "none";
});

// =============== TIMERS ===============
// SET YOUR DATES HERE
const birthDate = new Date("2009-10-12"); // birthday
const metDate   = new Date("2026-03-20"); // day you met

function calcAge(from, to) {
  let years = to.getFullYear() - from.getFullYear();
  let months = to.getMonth() - from.getMonth();
  let days = to.getDate() - from.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

function daysBetween(from, to) {
  return Math.floor((to - from) / (1000 * 60 * 60 * 24));
}

function updateTimers() {
  const now = new Date();

  // AGE
  const age = calcAge(birthDate, now);
  document.getElementById("ageTimer").textContent =
    `Age: ${age.years} years, ${age.months} months, ${age.days} days`;

  // DAYS SINCE MET
  const days = daysBetween(metDate, now);
  document.getElementById("metTimer").textContent =
    `We met: ${days} days ago`;
}

// ================= MUSIC PLAYER =================
const songImage = document.getElementById("song-image");
const songName = document.getElementById("song-name");
const songArtist = document.getElementById("song-artist");
const songSlider = document.getElementById("slider-song");
const playpauseButton = document.getElementById("playpause-song");
const prevSongButton = document.getElementById("prev-song");
const nextSongButton = document.getElementById("next-song");

const songs = [
  {
    image: "https://i.ytimg.com/vi/ChukpOHfAI8/maxresdefault.jpg",
    name: "nobody",
    artist: "This song actually reminds me of you , cuz nobody got you the way i do ;)",
    audio: "NoBody.mp3"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NuaDDfGCk-BKpXn9gnXhFbaZ9JJl3S02CRg6Zog8nQ&s=10",
    name: "انت السبب",
    artist: "i added this because 'you are the reason' that sometimes i smile randomly",
    audio: "إنتي السبب.mp3"
  },
  {
    image: "https://i.ytimg.com/vi/Zy5isDXVCvs/maxresdefault.jpg",
    name: "once again",
    artist: "i picked 3 songs ,from different languages that we both like ",
    audio: "Once Again.mp3"
  }
];

const audio = new Audio();
let currentSongIndex = 0;

function updateSong() {
  const song = songs[currentSongIndex];
  songImage.src = song.image;
  songName.innerText = song.name;
  songArtist.innerText = song.artist;
  audio.src = song.audio;

  audio.onloadedmetadata = function() {
    songSlider.value = 0;
    songSlider.max = audio.duration || 100;
  };
}

// Play / Pause Toggle
playpauseButton.addEventListener("click", function() {
  if (!audio.paused) {
    audio.pause();
    playpauseButton.classList.replace("fa-circle-pause", "fa-circle-play");
  } else {
    audio.play();
    playpauseButton.classList.replace("fa-circle-play", "fa-circle-pause");
  }
});

// Previous Song
prevSongButton.addEventListener("click", function() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSong();
  if (playpauseButton.classList.contains("fa-circle-pause")) {
    audio.play();
  }
});

// Next Song
nextSongButton.addEventListener("click", function() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSong();
  if (playpauseButton.classList.contains("fa-circle-pause")) {
    audio.play();
  }
});

// Seek Track Position
songSlider.addEventListener("input", function() {
  audio.currentTime = songSlider.value;
});

// Update Slider with Playhead
audio.addEventListener("timeupdate", function() {
  if (!isNaN(audio.duration)) {
    songSlider.value = audio.currentTime;
  }
});

// Reset Controls when Track Ends
audio.addEventListener("ended", function() {
  playpauseButton.classList.replace("fa-circle-pause", "fa-circle-play");
  songSlider.value = 0;
});

// Initialize on Load
updateSong();
setInterval(updateTimers, 1000);
updateTimers();