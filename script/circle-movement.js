var circle = document.querySelector(".circle");

console.log(Math.floor(Math.random() * 100));

const movement_interval = setInterval(move, 500);

function move() {
  var right = Math.floor(Math.random() * 100);
  var left = Math.floor(Math.random() * 100);
  var circle_q = circle.style;
  circle_q.right = `${right}%`;
  circle_q.right = `${left}%`;
  console.log(left, right);
}

setTimeout(() => clearInterval(movement_interval), 10000);
