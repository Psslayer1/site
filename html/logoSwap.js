const logo = document.getElementById("logo");

const images = [
  "images/profile pic/steam.png",
  "images/logoooo.png",
  "images/profile pic/steam2.png",
  "images/simple4.png",
  "images/profile pic/discord.png",
];

let index = 0;

logo.addEventListener("click", () => {
  index = (index + 1) % images.length; 
  logo.src = images[index];
});
