var div = document.querySelector(".message-display");

var data = {
  title: "",
  para: "",
};

function hideMessage() {
  div.style.height = "0";
  div.style.width = "0";
  title.style.fontSize = "0";
  para.style.fontSize = "0";
}

function showMessage() {
  div.style.height = "0";
  div.style.width = "0";
  title.style.fontSize = "0";
  para.style.fontSize = "0";
}

setTimeout(hideMessage, 5000);

var title = document.querySelector(".title");
var para = document.querySelector(".para");

title.innerHTML = data.title;
para.innerHTML = data.para;
