const audio=document.getElementById("music")
if(audio){
audio.src="assets/music/line_without_a_hook.mp3"
if(localStorage.getItem("music")==="on"){
audio.play()
}
}

function toggleMusic(){
if(audio.paused){
audio.play()
localStorage.setItem("music","on")
}else{
audio.pause()
localStorage.setItem("music","off")
}
}

const counter=document.getElementById("counter")
if(counter){
const start=new Date("2023-11-26")
const now=new Date()
const days=Math.floor((now-start)/(1000*60*60*24))
counter.innerText="Days since I fell in love with you "+days
}

function spawnHearts(){
const layer=document.querySelector(".floating-layer")
for(let i=0;i<30;i++){
const h=document.createElement("div")
h.className="floating-heart"
h.innerText="❤️"
h.style.left=Math.random()*100+"%"
h.style.animationDuration=8+Math.random()*6+"s"
h.style.animationDelay=Math.random()*5+"s"
layer.appendChild(h)
}
}

spawnHearts()

function note(){
alert("you are my home ❤️")
}

const zone=document.getElementById("heart-zone")
if(zone){
for(let i=0;i<14;i++){
const h=document.createElement("div")
h.innerText="❤️"
h.style.fontSize="28px"
h.style.position="absolute"
h.style.left=Math.random()*85+"%"
h.style.top=Math.random()*75+"%"
h.onclick=()=>document.getElementById("final").innerText="no matter what it will always be YOU ❤️"
zone.appendChild(h)
}
}
