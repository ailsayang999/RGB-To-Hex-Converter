let container = document.querySelector(".container");
let colorRed = document.querySelector(".colorRed");
let colorGreen = document.querySelector(".colorGreen");
let colorBlue = document.querySelector(".colorBlue");

let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");

//change background RGB value and color
container.addEventListener("mousemove", function (event) {
  let target = event.target;
  if (target.classList.contains("colorRed")) {
    let redValue = colorRed.value;
    red.innerText = redValue;
  } else if (target.classList.contains("colorGreen")) {
    let greenValue = colorGreen.value;
    green.innerText = greenValue;
  } else if (target.classList.contains("colorBlue")) {
    let blueValue = colorBlue.value;
    blue.innerText = blueValue;
  }
  document.body.style.backgroundColor =
    "rgb(" + red.innerText + "," + green.innerText + "," + blue.innerText + ")";

  //feat: turn RGB to Hex
  function RGBToHex(r, g, b) {
    r = Number(r).toString(16);
    g = Number(g).toString(16);
    b = Number(b).toString(16);

    if(r.length === 1){
      r = "0" + r
    } else if (g.length === 1 ){
      g = "0" + g
    } else if (b.length === 1){
      b = "0" + b
    }

    return "#" + r + g + b;
  }

  let HexContent = RGBToHex(red.innerText, green.innerText, blue.innerText);
  let Hex = document.querySelector(".Hex");
  Hex.innerText = HexContent;
});




