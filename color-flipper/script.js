const colors = ["green", "red", "orangered","#000000", "#f15025","#d896ff","#009999","#660066","#990000","#e9edf8",
"#ded7f1","#eb9196","#903c74","#49437f","#a73952","#39a78e","#da0b94","#0bda51","#ffff66","#ffffff"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}