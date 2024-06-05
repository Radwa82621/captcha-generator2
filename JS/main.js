var captchaText = document.getElementById("captchaText");
var tryAgain = document.getElementById("try");
var input = document.getElementById("input");
var checkBtn = document.getElementById("check");
var correctAnswer;
generateCAPTCHA();
function generateCAPTCHA() {
  var result = ``;
  var chars = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];
  for (let i = 0; i < 6; i++) {
    result += chars[Math.round(Math.random() * chars.length)];
  }
  correctAnswer = result;
  captchaText.innerHTML = result;
}

tryAgain.onclick = generateCAPTCHA;

function CheckAnswer() {
  if (input.value == correctAnswer) {
    window.alert("welcome 🎉🎉🎉");
  } else {
    window.alert("try again 😅😅😅");
    generateCAPTCHA();
    input.value = "";
  }
}
checkBtn.onclick = CheckAnswer;
