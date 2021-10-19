const b1 = document.querySelector("#btn1");

b1.addEventListener("click", function () {
  console.log("click");
  const h1 = document.querySelector("#h1id");
  const h2 = document.querySelector("#h2id");
  h1.style.fontSize = "x-large";
  h2.style.fontSize = "large";
});

///////////////////////////////////////////////////////

const b2 = document.querySelector("#btn2");
b2.addEventListener("click", function () {
  const p1 = document.querySelector("#p1");
  const p2 = document.querySelector("#p2");
  p1.style.fontFamily = "Impact,Charcoal,sans-serif";
  p2.style.fontFamily = "Impact,Charcoal,sans-serif";
});

//////////////////////////////////////////////////////////

const b3 = document.querySelector("#btn3");
b3.addEventListener("click", function () {
  const p1 = document.querySelector("#p1");
  const p2 = document.querySelector("#p2");
  p1.style.backgroundColor = "red";
  p2.style.backgroundColor = "yellow";
});

/////////////////////////////////////////////////////////////

const b4 = document.querySelector("#btn4");
b4.addEventListener("click", function () {
  const img = document.querySelector("#img1");
  img.style.visibility = "hidden";
});

//////////////////////////////////////////////////////////

const b5 = document.querySelector("#btn5");
b5.addEventListener("click", function () {
  const img = document.querySelector("#img2");
  const src1 =
    "https://st2.depositphotos.com/1004377/7981/i/600/depositphotos_79811732-stock-photo-alien-landscape.jpg";
  const src2 =
    "https://happywall-img-gallery.imgix.net/1116/alien_landscape_display.jpg";

  if (img.src === src1) img.src = src2;
  else img.src = src1;
});

////////////////////////////////////////////////////////////

const img1 = document.querySelector("#img2");
img1.addEventListener("mousemove", function () {
  const img = document.querySelector("#img2");
  img.src =
    "https://happywall-img-gallery.imgix.net/1116/alien_landscape_display.jpg";
});

const img2 = document.querySelector("#img2");
img2.addEventListener("mouseleave", function () {
  const img = document.querySelector("#img2");
  img.src =
    "https://st2.depositphotos.com/1004377/7981/i/600/depositphotos_79811732-stock-photo-alien-landscape.jpg";
});

///////////////////////////////////////////////////////////////

const rc1 = document.querySelector("#img1");
rc1.addEventListener("contextmenu", function () {
  alert("Right Click Performed!");
});

const rc2 = document.querySelector("#img2");
rc2.addEventListener("contextmenu", function () {
  alert("Right Click Performed!");
});

////////////////////////////////////////////////////////////////

const input1 = document.querySelector("#input1");
input1.addEventListener("input", function () {
  alert("a user enters data into a input");
});

//////////////////////////////////////////////////////////////

window.addEventListener("load", (event) => {
  alert("The page has loaded");
});

///////////////////////////////////////////////////////////////

const p1 = document.querySelector("#p1");
p1.addEventListener("mousemove", function () {
  const p1 = document.querySelector("#p1");
  const p2 = document.querySelector("#p2");
  p1.style.backgroundColor = "red";
  p2.style.backgroundColor = "yellow";
});

const p2 = document.querySelector("#p2");
p2.addEventListener("mouseleave", function () {
  const p1 = document.querySelector("#p1");
  const p2 = document.querySelector("#p2");
  p1.style.backgroundColor = null;
  p2.style.backgroundColor = null;
});
