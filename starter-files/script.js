let button = document.querySelectorAll(".letter-btn");
let typedText = document.querySelector(".typing-text");
let spaceBtn = document.querySelector(".space-btn");
let backspaceBtn = document.querySelector(".delete-btn");
let array = [];


function spaceButtonPressed() {
    let content = typedText.textContent;
    let newContent = content + "\u00A0";
    typedText.textContent = newContent;
}


function backspaceButtonPressed() {
    array.pop();
    typedText.textContent = array.join("");
}

//Click event
button.forEach((button) => {
  button.addEventListener("click", (event) => {
    let letter = event.target.innerText;
    typedText.textContent += letter;

    array = typedText.textContent.split("");
  });
});

spaceBtn.addEventListener("click", () => {
 spaceButtonPressed();
   
});

backspaceBtn.addEventListener("click", () => {
 backspaceButtonPressed()
});

// Keyup event
document.addEventListener("keyup", (event) => {
  if (event.key === "Backspace") {
backspaceButtonPressed();
  } else if (event.code === "Space") {
 spaceButtonPressed();
  } else {
    typedText.textContent += event.key;
    array = typedText.textContent.split("");
  }
});

// Keydown event-holding the backspace ans space buttons
document.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
      backspaceButtonPressed()
    }else if (event.code === "Space") {
        spaceButtonPressed();
    }
})
