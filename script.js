const buttons = document.querySelectorAll("button");
const orderSummary = document.createElement("p");

for (const button of buttons) {
  button.addEventListener("click", () => {
    const menuOption = button.parentElement.parentElement;
    const optionName = menuOption.querySelector("td:first-child").textContent;
    const optionPrice = menuOption.querySelector("td:nth-child(3)").textContent;

    orderSummary.textContent += `${optionName} - ${optionPrice}\n`;
  });
}

document.body.appendChild(orderSummary);
