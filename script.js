var CSS = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bgclr");

// console.log("Hello Pratik..");
// console.log(CSS);
// console.log(color1);
// console.log(color2);



function setGradient()
{
    body.style.background = "linear-gradient(to right, " + color1.value +", " + color2.value + ")";
    CSS.textContent = body.style.background;
}


color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);


