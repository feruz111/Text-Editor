let bold = document.getElementById("bold");
let italic = document.getElementById("italic");
let underline = document.getElementById("underline");
let output = document.getElementById("text-output");
let center = document.getElementById("center-align");
let right = document.getElementById("right-align");
let left = document.getElementById("left-align");
let textInput = document.getElementById("text-input")

function updateText() {
  let text = document.getElementById("text-input").value;
  output.innerText = text;
}

function makeBold(elem) {
  bold.classList.toggle("active");
  output.classList.toggle("bold");
}

function makeItalic() {
  italic.classList.toggle("active");
  output.classList.toggle("italic");
}

function makeUnderline() {
  underline.classList.toggle("active");
  if (output.classList.contains("underline")) {
    output.classList.remove("underline");
  } else {
    output.classList.add("underline");
  }
}

function alignCenter() {
  center.classList.toggle("active");
  if (output.style.textAlign === "center") {
    output.style.textAlign = null;
  } else {
    output.style.textAlign = "center";
  }

  if (right.classList.contains("active")) {
    right.classList.remove("active");
  }
  if (left.classList.contains("active")) {
    left.classList.remove("active");
  }
}

function alignRight() {
  right.classList.toggle("active");
  if (output.style.textAlign === "right") {
    output.style.textAlign = null;
  } else {
    output.style.textAlign = "right";
  }

  if (center.classList.contains("active")) {
    center.classList.remove("active");
  }
  if (left.classList.contains("active")) {
    left.classList.remove("active");
  }
}

function alignLeft() {
  left.classList.toggle("active");
  if (output.style.textAlign === "left") {
    output.style.textAlign = null;
  } else {
    output.style.textAlign = "left";
  }

  if (center.classList.contains("active")) {
    center.classList.remove("active");
  }
  if (right.classList.contains("active")) {
    right.classList.remove("active");
  }
}

bold.addEventListener("click", makeBold);
italic.addEventListener("click",makeItalic)
underline.addEventListener("click",makeUnderline)
center.addEventListener("click",alignCenter)
right.addEventListener("click",alignRight)
left.addEventListener("click",alignLeft)
textInput.addEventListener("keydown",updateText)


