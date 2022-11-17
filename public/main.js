/* function changeText() {
  let inputValue = document.querySelector('input#inputText').value
  document.querySelector('h1#change').innerText = inputValue
} */

const COLORS = [
  "aliceblue",
  "antiquewhite",
  "aqua",
  "aquamarine",
  "azure",
  "beige",
  "bisque",
  "black",
  "blanchedalmond",
  "blue",
  "blueviolet",
  "brown",
  "burlywood",
  "cadetblue",
  "chartreuse",
  "chocolate",
  "coral",
  "cornflowerblue",
  "cornsilk",
  "crimson",
  "cyan",
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgrey",
  "darkgreen",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "fuchsia",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "grey",
  "green",
  "greenyellow",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
  "lightgoldenrodyellow",
  "lightgray",
  "lightgrey",
  "lightgreen",
  "lightpink",
  "lightsalmon",
  "lightseagreen",
  "lightskyblue",
  "lightslategray",
  "lightslategrey",
  "lightsteelblue",
  "lightyellow",
  "lime",
  "limegreen",
  "linen",
  "magenta",
  "maroon",
  "mediumaquamarine",
  "mediumblue",
  "mediumorchid",
  "mediumpurple",
  "mediumseagreen",
  "mediumslateblue",
  "mediumspringgreen",
  "mediumturquoise",
  "mediumvioletred",
  "midnightblue",
  "mintcream",
  "mistyrose",
  "moccasin",
  "navajowhite",
  "navy",
  "oldlace",
  "olive",
  "olivedrab",
  "orange",
  "orangered",
  "orchid",
  "palegoldenrod",
  "palegreen",
  "paleturquoise",
  "palevioletred",
  "papayawhip",
  "peachpuff",
  "peru",
  "pink",
  "plum",
  "powderblue",
  "purple",
  "red",
  "rosybrown",
  "royalblue",
  "saddlebrown",
  "salmon",
  "sandybrown",
  "seagreen",
  "seashell",
  "sienna",
  "silver",
  "skyblue",
  "slateblue",
  "slategray",
  "slategrey",
  "snow",
  "springgreen",
  "steelblue",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "wheat",
  "white",
  "whitesmoke",
  "yellow",
  "yellowgreen",
];

const STYLES = [
  "Copperplate",
  "Heiti SC",
  "Iowan Old Style",
  "Kohinoor Telugu",
  "Thonburi",
  "Heiti TC",
  "Courier New",
  "Gill Sans",
  "Apple SD Gothic Neo",
  "Marker Felt",
  "Avenir Next Condensed",
  "Tamil Sangam MN",
  "Helvetica Neue",
  "Gurmukhi MN",
  "Times New Roman",
  "Georgia",
  "Apple Color Emoji",
  "Arial Rounded MT Bold",
  "Kailasa",
  "Kohinoor Devanagari",
  "Kohinoor Bangla",
  "Chalkboard SE",
  "Sinhala Sangam MN",
  "PingFang TC",
  "Gujarati Sangam MN",
  "Damascus",
  "Noteworthy",
  "Geeza Pro",
  "Avenir",
  "Academy Engraved LET",
  "Mishafi",
  "Futura",
  "Farah",
  "Kannada Sangam MN",
  "Arial Hebrew",
  "Arial",
  "Party LET",
  "Chalkduster",
  "Hoefler Text",
  "Optima",
  "Palatino",
  "Lao Sangam MN",
  "Malayalam Sangam MN",
  "Al Nile",
  "Bradley Hand",
  "PingFang HK",
  "Trebuchet MS",
  "Helvetica",
  "Courier",
  "Cochin",
  "Hiragino Mincho ProN",
  "Devanagari Sangam MN",
  "Oriya Sangam MN",
  "Snell Roundhand",
  "Zapf Dingbats",
  "Bodoni 72",
  "Verdana",
  "American Typewriter",
  "Avenir Next",
  "Baskerville",
  "Khmer Sangam MN",
  "Didot",
  "Savoye LET",
  "Bodoni Ornaments",
  "Symbol",
  "Menlo",
  "Bodoni 72 Smallcaps",
  "Papyrus",
  "Hiragino Sans",
  "PingFang SC",
  "Euphemia UCAS",
  "Telugu Sangam MN",
  "Bangla Sangam MN",
  "Zapfino",
  "Bodoni 72 Oldstyle",
];

const positions = ["right", "bottom", "top"];

var text = document.querySelector("#change");
var btn2 = document.querySelector("#btn2");
var btn3 = document.querySelector("#btn3");
var container = document.querySelector(".container");
var inputText = document.querySelector("input#inputText");
var stupidText = document.querySelector("#stupid");
var yesBtn = document.querySelector("#btnYes");
var noBtn = document.querySelector("#btnNo");
var contactForm = document.querySelector("#contact-form");
var contactBtn = document.querySelector("#contact-btn");
var contactSuccess = document.querySelector("#contact-success");
var subject = document.querySelector("#contact-input");
var message = document.querySelector("#contact-body");

var index = 0;
var index2 = 0;
var index3 = 0;
var index4 = 0;

function onMouseover() {
  this.style.backgroundColor = COLORS[index2];
  //console.log(COLORS[index2])
  //console.log(index2)
  index2 = index2 == COLORS.length - 1 ? 0 : index2 + 1;
}

function onClickColor() {
  //text.style.backgroundColor = colors[index];
  text.style.color = COLORS[index];
  //console.log(COLORS[index])
  //console.log(index)

  index = index >= COLORS.length - 1 ? 0 : index + 1;
}

function onClickFont() {
  //text.style.backgroundColor = colors[index];
  text.style.fontFamily = STYLES[index3];
  //console.log(STYLES[index3])
  //console.log(index3)

  index3 = index3 >= STYLES.length - 1 ? 0 : index3 + 1;
}

function changeText() {
  text.innerText = inputText.value;
  inputText.value = "";
}

function changePosition() {
  console.log(positions[index4]);
  noBtn.style[positions[index4]] = "65px";
  if (positions[index4] == "top") {
    noBtn.style.bottom = "";
    noBtn.style.right = "";
  } else if (positions[index4] == "bottom") {
    noBtn.style.top = "";
    noBtn.style.right = "";
  } else {
    noBtn.style.bottom = "";
    noBtn.style.top = "";
  }

  index4 = index4 == positions.length - 1 ? 0 : index4 + 1;
}

document.querySelector("input#btn").addEventListener("click", changeText);

btn2.addEventListener("click", onClickColor);

btn3.addEventListener("click", onClickFont);

container.addEventListener("mouseover", onMouseover);

inputText.addEventListener("mouseover", onMouseover);


yesBtn.addEventListener("click", () => {
  yesBtn.style.display = "none";
  stupidText.innerText = "Give me your number!";
  setTimeout(() => {
    yesBtn.style.display = "block";
    stupidText.innerText = "Are you single?";
  }, 5000);
});

noBtn.addEventListener("click", changePosition);

contactBtn.addEventListener("click", async () => {
  const data = { nick: subject.value, msgTxt: message.value };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch("/api", options);
  const responseJson = await response.json();
  console.log(responseJson);
  // reset form for another sending operation
  contactForm.style.display = "none";
  contactSuccess.style.display = "block";
});
