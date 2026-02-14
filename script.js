const loveDate = new Date("2023-11-26");
const now = new Date();
const days = Math.floor((now - loveDate) / (1000 * 60 * 60 * 24));
const counter = document.getElementById("counter");
if(counter){
counter.innerText = "Days since I fell in love with you: " + days;
}

function toggleMusic(){
const m = document.getElementById("music");
if(m.paused) m.play();
else m.pause();
}

function note(){
alert("you are my home ❤️");
}
