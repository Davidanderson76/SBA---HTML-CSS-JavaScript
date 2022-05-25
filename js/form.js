function publish() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const error = document.getElementById("error");
  error.innerHTML = !name || !email ? "Both NAME & EMAIL are required" : "";
  if (name && email) {
    const tableElement = document.getElementById("table");
    const trElement = document.createElement("tr");
    const tbodyElement = document.createElement("tbody");
    const nameEle = document.createElement("td");
    const emailEle = document.createElement("td");
    nameEle.innerHTML = name;
    emailEle.innerHTML = email;
    trElement.appendChild(nameEle);
    trElement.appendChild(emailEle);
    tbodyElement.appendChild(trElement);
    tableElement.appendChild(tbodyElement);
  }
  let inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = ""));
}
