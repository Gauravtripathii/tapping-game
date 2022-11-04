var circle = document.querySelector(".circle");
var counter_var = document.querySelector(".score-counter");
var counter = 0;

circle.addEventListener("click", () => {
    counter_var.innerHTML = ++counter;
})
