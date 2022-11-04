var gaming_area = document.querySelector(".gaming-area");
var circle = document.querySelector(".circle");

console.log(Math.floor(Math.random() * 100));

const movement_interval = setInterval(move, 1000);

function move() {
  var right = Math.floor(Math.random() * 100);
  var left = Math.floor(Math.random() * 100);
  var circle_q = circle.style;
  circle_q.right = `${right}%`;
  circle_q.right = `${left}%`;
  console.log(left, right);
}

// clearInterval(movement_interval)
gaming_area.addEventListener("click", (event) => {
  if (event.srcElement.className === "gaming-area")
    clearInterval(movement_interval);
});
