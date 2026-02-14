const audio=document.getElementById("music")

if(audio){
audio.src="assets/music/line_without_a_hook.mp3"
audio.volume=.6

const t=localStorage.getItem("musicTime")
const s=localStorage.getItem("musicState")

if(t) audio.currentTime=parseFloat(t)
if(s==="playing") audio.play()

audio.addEventListener("timeupdate",()=>localStorage.setItem("musicTime",audio.currentTime))
audio.addEventListener("play",()=>localStorage.setItem("musicState","playing"))
audio.addEventListener("pause",()=>localStorage.setItem("musicState","paused"))
}

function toggleMusic(){
if(!audio) return
audio.paused?audio.play():audio.pause()
}

const counter=document.getElementById("counter")
if(counter){
const d=new Date("2023-11-26T00:00:00")
const n=new Date()
counter.innerText="Days since I fell in love with you "+Math.floor((n-d)/(1000*60*60*24))
}

function spawnPhotos(){
const imgs=[
"assets/images/photo1.jpg",
"assets/images/photo2.jpg",
"assets/images/photo3.jpg",
"assets/images/photo4.jpg"
]
const layer=document.querySelector(".photo-layer")
if(!layer) return
imgs.forEach((src,i)=>{
const img=document.createElement("img")
img.src=src
img.className="floating-photo"
img.style.left=Math.random()*80+"%"
img.style.animationDuration=25+Math.random()*15+"s"
img.style.animationDelay=i*6+"s"
layer.appendChild(img)
})
}

function spawnHearts(){
const layer=document.querySelector(".floating-layer")
if(!layer) return
for(let i=0;i<35;i++){
const h=document.createElement("div")
h.className="floating-heart"
h.innerText="❤️"
h.style.left=Math.random()*100+"%"
h.style.fontSize=14+Math.random()*20+"px"
h.style.animationDuration=10+Math.random()*8+"s"
h.style.animationDelay=Math.random()*5+"s"
layer.appendChild(h)
}
}

spawnPhotos()
spawnHearts()

function note(){
alert("you are my home ❤️")
}

const zone=document.getElementById("heart-zone")
if(zone){
for(let i=0;i<15;i++){
const h=document.createElement("div")
h.innerText="❤️"
h.style.position="absolute"
h.style.left=Math.random()*85+"%"
h.style.top=Math.random()*70+"%"
h.style.fontSize="26px"
h.style.cursor="pointer"
h.onclick=()=>document.getElementById("final").innerText="no matter where we go it will always be YOU ❤️"
zone.appendChild(h)
}
}
