let face = document.querySelector("img");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");
let dclicks = document.querySelector(".clicks");
let count = document.querySelector(".click");
let hagal = document.querySelector(".hagal");
let one = document.querySelector(".main");
let two = document.querySelector(".records");
let clicks = getData();
dclicks.innerText = clicks;
applystate();

const audio = new Audio("mouse-click-sound.wav");
const audio2 = new Audio("smile-dog-jumpscare-167171.wav");

one.classList.remove("main");
two.classList.remove("records");

face.addEventListener("click", () => {
  clicks += 1;
  saveData();
  dclicks.innerText = clicks;
  audio.pause();
  audio.currentTime = 0;
  audio.play();

  face.classList.remove("hovet");
  setTimeout(() =>{
    face.classList.add("hovet");
  }, 100)

  setTimeout(() => {
    face.classList.remove("pressed");
  }, 70)

  applystate();
});

  function applystate() {
  if (clicks >= 100 && clicks <= 199) {
    face.src = "2.svg";
    body.style.background = "url('b.svg')"
  } 
    else if (clicks >= 200 && clicks <= 299) {
    face.src = "3.svg";
    body.style.background = "url('c.svg')"
  } 
    else if (clicks >= 300 && clicks <= 399) {
    face.src = "4.svg";
    body.style.background = "url('d.svg')"
  } 
    else if (clicks >= 400 && clicks <= 499) {
    face.src = "5.svg";
    body.style.background = "url('e.svg')"
  } 
    else if (clicks >= 500 && clicks <= 599) {
    face.src = "6.svg";
    body.style.background = "url('f.svg')"
  } 
    else if (clicks >= 600 && clicks <= 699) {
    face.src = "7.svg";
    body.style.background = "url('g.svg')"
  } 
    else if (clicks >= 700 && clicks <= 799) {
    face.src = "8.svg";
    body.style.backgroundImage = "url('h.svg')";
    body.style.backgroundRepeat = "no-repeat";
    count.style.color = "#fff";
    h1.style.color = "#fff";
    body.style.backgroundSize = "cover";
  }
   else if (clicks >= 800 && clicks <= 899) {
    face.src = "9.svg";
    body.style.backgroundImage = "url('i.svg')";
    body.style.backgroundSize = "cover";
  }
   else if (clicks >= 900 && clicks <= 999) {
    face.src = "10.svg";
    body.style.background = "url('j.svg')";
    count.style.color = "#fff";
    h1.style.color = "#fff";
  }
  else if (clicks >= 1000) {
    count.style.color = "#000";
    h1.style.color = "#000";
    face.style.transform = "scale(3)";
    audio2.play();

    audio2.onended = () => {
      face.style.pointerEvents = "auto";
      resetGame();
    }
    
  }
}

function saveData() {
  localStorage.setItem("clicks", clicks);
}

function resetGame() {
  clicks = 0;
  localStorage.setItem("clicks", clicks);

  dclicks.innerText = clicks;

  face.src = "1.svg";
  face.style.transform = "scale(1)";

  body.style.background = "";
  body.style.backgroundImage = "";
  body.style.backgroundSize = "";
  body.style.backgroundRepeat = "";

  h1.style.webkitTextStroke = "2px #000";
  count.style.webkitTextStroke = "2px #000"

}


function getData() {
  return Number(localStorage.getItem("clicks")) || 0;
}
