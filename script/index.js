var div = document.querySelector(".message-display");

var data = {
  title: "Tap The Circle!",
  para: "a game inspired by asian parents!",
};

var author = document.querySelector(".author");
author.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/gaurav-kumar-tripathii/", "_blank");
});

function hideMessage() {
  div.style.height = "0";
  div.style.width = "0";
  title.style.fontSize = "0";
  para.style.fontSize = "0";
  author.style.fontSize = "0";
}

function showMessage(t, p) {
  div.style.height = "100vh";
  div.style.width = "100vw";
  title.style.fontSize = "100px";
  para.style.fontSize = "40px";
  author.style.fontSize = "20px";
  title.innerHTML = t;
  para.innerHTML = p;
  console.log(title);
}

setTimeout(hideMessage, 3500);

var title = document.querySelector(".title");
var para = document.querySelector(".para");

title.innerHTML = data.title;
para.innerHTML = data.para;

// circle movement

var gaming_area = document.querySelector(".gaming-area");
var circle = document.querySelector(".circle");

var time = 1000;

var settings = document.querySelector(".settings");
settings.addEventListener("click", (event) => {
  if (event.srcElement.className === "easy") time = 1500;
  else if (event.srcElement.className === "medium") time = 1000;
  else if (event.srcElement.className === "hard") time = 300;
  clearInterval(movement_interval);
  movement_interval = setInterval(move, time);
});

var movement_interval = setInterval(move, time);

function move() {
  var right = Math.floor(Math.random() * 100);
  var bottom = Math.floor(Math.random() * 100);
  var circle_q = circle.style;
  circle_q.right = `${right}%`;
  circle_q.bottom = `${bottom}%`;
  console.log(left, right);
}

// clearInterval(movement_interval)
gaming_area.addEventListener("click", (event) => {
  if (event.srcElement.className === "gaming-area") {
    clearInterval(movement_interval);
    showMessage("You have failed, again!", "you are a disgrace!");
  }
});
