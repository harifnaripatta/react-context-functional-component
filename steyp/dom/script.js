/*
const heading = document.getElementById("root");
console.log(heading);

const heading1 = document.querySelectorAll("div.box h1");
console.log(heading1);

const btn = document.getElementsByClassName("btn");
console.log(btn);

const heading3 = document.getElementsByTagName("h3");
console.log(heading3);

const heading = document.getElementById("root");
heading.onclick = (event) => {
  console.log(event.target.textContent);
  event.target.textContent = "this is changed text Content";
};


const heading = document.createElement("h1");
heading.innerHTML = "Hai Dear";
document.body.appendChild(heading);

const box = document.getElementById("box");
const heading = document.getElementById("heading");
box.removeChild(heading);

const heading = document.getElementById("heading");
heading.style.backgroundColor = "yellow";
heading.style.color = "red";
heading.style.width = "200px";
heading.style.padding = "5px";
heading.style.textAlign = "center";
heading.style.border = "1px solid red";

const heading = document.getElementById("heading");
heading.style.cssText =
  "background-color : yellow; color: red; width: 400px; padding: 5px; text-align: center; border: 1px solid red ";


function changeColor() {
  let btn = document.querySelector(".btn");
  console.log(btn);
  btn.style.color = "green";
}


let btn = document.querySelector(".btn");
btn.onclick = () => {
  btn.style.color = "blue";
};


const changeColor = () => {
  const heading = document.getElementById("heading");
  heading.style.color = "red";
};

const hedaing = document.getElementById("heading");
hedaing.onmouseover = () => {
  hedaing.style.color = "green";
};

window.onload = () => {
  let heading = document.getElementById("heading");
  console.log(heading);
};


const heading = document.getElementById("heading");
heading.addEventListener("click", () => {
  console.log("Hello");
});
heading.addEventListener("mouseover", () => {
  console.log("hovered");
});

const box = document.querySelector(".box");
const button = document.getElementById("button");
const number = document.querySelector(".number");

const numberRender = () => {
  number.innerHTML = Math.random() * 10;
};

box.addEventListener("mouseover", numberRender);
button.addEventListener("click", () => {
  box.removeEventListener("mouseover", numberRender);
});

const link = document.getElementById("link");
link.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Link Not Working!!!");
});


document.addEventListener("keypress", (event) => {
  event.ctrlKey && event.code == "KeyS"
    ? console.log("Hello")
    : console.log("World");
});

x = 10;
y = 10;

console.log(x != y);

document.addEventListener("keypress", (event) => {
  if (event.code == "KeyE") {
    console.log("You clicked equal");
  } else if (event.code == "KeyQ") {
    console.log("You clicked equal");
  } else if (event.code == "KeyU") {
    console.log("You clicked equal");
  } else if (event.code == "KeyA") {
    console.log("You clicked equal");
  } else if (event.code == "KeyL") {
    console.log("You clicked equal");
  } else {
    console.log("not equal");
  }
});

const height = document.getElementById("height");
const width = document.getElementById("width");

calculate = () => {
  let h = window.innerHeight;
  let w = window.innerWidth;
  height.innerText = h;
  width.innerText = w;
};
window.onload = calculate();
window.onresize = calculate();
*/
var num = parseInt("123abc");
console.log(num);
