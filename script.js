let img_src = [
  "images/f1.jpg",
  "images/f2.jpg",
  "images/f3.jpg",
  "images/f4.jpg",
  "images/f5.jpg",
  "images/f6.jpg",
  "images/f7.jpg",
  "images/f8.jpg",
  "images/f9.jpg",
  "images/f10.jpg",
  "images/f11.jpg",
  "images/f12.jpg",
];
i = 0;
function next() {
  i++;
  if (i >= img_src.length) i = 0;
  addeffect();
  setTimeout(change, 1000);
}
function back() {
  i--;
  if (i < 0) i = img_src.length - 1;
  addeffect();
  setTimeout(change, 1000);
}
let timer;
let effect = "go";
function start() {
  stop();
  timer = setInterval(function () {
    next();
  }, 3000);
}
function stop() {
  clearInterval(timer);
}
let j = 0;
window.onload = function () {
  let miniimages = document.getElementsByClassName("mini");
  for (let j = 0; j < miniimages.length; j++) {
    miniimages[j].onclick = show;
  }
};
function show(event) {
  i = j;
  let image = event.target;
  slider.src = image.src;

  // addeffect();
  // setTimeout(change, 1000);
}
function addeffect() {
  slider.classList.add(effect);
}
function change() {
  slider.src = img_src[i];
  slider.classList.remove(effect);
}
function getEffect() {
  let ef = document.forms["effects"];
  for (let y = 0; y < ef.length; y++) {
    if (ef[y].checked) {
      effect = ef[y].value;
    }
  }
}
