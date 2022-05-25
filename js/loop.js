function addElement() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("generatedDiv");
  const textContent = document.createTextNode("WELCOME");
  newDiv.appendChild(textContent);

  const currentDiv = document.getElementById("theDiv");
  document.body.insertBefore(newDiv, currentDiv);
}

function addAnotherElement() {
  const newDiv = document.createElement("div");
  newDiv.classList.add("generatedDiv");
  const textContent = document.createTextNode("Hello and greetings!");
  newDiv.appendChild(textContent);

  const currentDiv = document.getElementById("theDiv");
  document.body.insertBefore(newDiv, currentDiv);
}

function runLoops() {
  for (i = 0; i < 5; i++) {
    addElement();
    for (j = 0; j < 5; j++) {
      addAnotherElement();
    }
  }
}
