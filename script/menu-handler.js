var menu = document.querySelector(".menu");
var open_menu = document.querySelector(".icon");
var close_menu = document.querySelector(".icon-close");

close_menu.addEventListener("click", () => {
  menu.style.width = "0";
  open_menu.style.fontSize = "40px";
  close_menu.style.fontSize = "0";
});

open_menu.addEventListener("click", () => {
  menu.style.width = "40%";
  open_menu.style.fontSize = "0";
  close_menu.style.fontSize = "40px";
});
