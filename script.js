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

function note(){
alert("you are my home ❤️")
}

const zone=document.getElementById("heart-zone")
if(zone){
for(let i=0;i<12;i++){
const h=document.createElement("div")
h.innerText="❤️"
h.style.fontSize="30px"
h.style.position="absolute"
h.style.left=Math.random()*90+"%"
h.style.top=Math.random()*80+"%"
h.onclick=()=>document.getElementById("final").innerText="it will always be YOU ❤️"
zone.appendChild(h)
}
}
