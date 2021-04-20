"use strict";
let upperText = document.querySelector(".upperText");
let lowerText = document.querySelector(".lowerText");
let frontText = document.querySelector(".frontText");
let upperInput = document.querySelector("#upperDoors");
let lowerInput = document.querySelector("#lowerDoors");
let frontInput = document.querySelector("#fronts");
let estimateButton = document.querySelector(".show-estimate-button");
let modalButton = document.querySelector(".open-modal");
let modalFooter = document.querySelector(".modal-footer");
const backButton = document.querySelector(".backButton");

// ------clicking "how much will it cost" button --------
document.querySelector("#estimate").addEventListener("click", () => {
  let upper = Number(document.querySelector("#upperDoors").value);
  let lower = Number(document.querySelector("#lowerDoors").value);
  let fronts = Number(document.querySelector("#fronts").value);

  let upperLowCost = 55 * upper;
  let upperHighCost = 275 * upper;
  let lowerLowCost = 45 * lower;
  let lowerHighCost = 220 * lower;
  let frontLowCost = 7 * fronts;
  let frontHighCost = 35 * fronts;

  // ---checks if input is number and applies appropriate text---
  if (isNaN(upperHighCost) || isNaN(upperLowCost)) {
    upperText.innerHTML = `Please use whole numbers.`;
  } else {
    if (Math.floor(upper) == upper) {
      upperText.innerHTML = `<b>Upper cabinets will range between $${upperLowCost} and $${upperHighCost}.</b>`;
    } else {
      upperText.innerHTML = `Please use whole numbers.`;
    }
  }

  if (isNaN(lowerHighCost) || isNaN(lowerLowCost)) {
    lowerText.innerHTML = `Please use whole numbers.`;
  } else {
    if (Math.floor(lower) == lower) {
      lowerText.innerHTML = `<b>Lower cabinets will range between $${lowerLowCost} and $${lowerHighCost}.</b>`;
    } else {
      lowerText.innerHTML = `Please use whole numbers.`;
    }
  }

  if (isNaN(frontHighCost) || isNaN(frontLowCost)) {
    frontText.innerHTML = `Please use whole numbers.`;
  } else {
    if (Math.floor(fronts) == fronts) {
      frontText.innerHTML = `<b>Drawer covers will range between $${frontLowCost} and $${frontHighCost}.</b>`;
    } else {
      frontText.innerHTML = `Please use whole numbers.`;
    }
  }

  //   --hides input fields and button after clicks
  upperInput.classList.add("textFieldHidden");
  lowerInput.classList.add("textFieldHidden");
  frontInput.classList.add("textFieldHidden");
  estimateButton.classList.remove("show-estimate-button");
  estimateButton.classList.add("textFieldHidden");
  modalFooter.classList.remove("textFieldHidden");
  backButton.classList.remove("textFieldHidden");
});

// ---Modal Logic----

// open
// ---resets initial modal params
const open = document.querySelectorAll("button.open-modal");
const isVisible = "is-visible";

for (const el of open) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    modalButton.classList.add("textFieldHidden");
    upperText.innerHTML = `How many upper cabinets need doors?:`;
    lowerText.innerHTML = `How many lower cabinets need doors?:`;
    frontText.innerHTML = "How many drawers need covers?:";
    upperInput.classList.remove("textFieldHidden");
    lowerInput.classList.remove("textFieldHidden");
    frontInput.classList.remove("textFieldHidden");
    estimateButton.classList.remove("textFieldHidden");
    modalButton.classList.remove("textFieldHidden");
    estimateButton.classList.add("show-estimate-button");
    estimateButton.classList.remove("textFieldHidden");
    modalFooter.classList.add("textFieldHidden");
    backButton.classList.add("textFieldHidden");
  });
}
// Back button

backButton.addEventListener("click", () => {
  upperText.innerHTML = `How many upper cabinets need doors?:`;
  lowerText.innerHTML = `How many lower cabinets need doors?:`;
  frontText.innerHTML = "How many drawers need covers?:";
  upperInput.classList.remove("textFieldHidden");
  lowerInput.classList.remove("textFieldHidden");
  frontInput.classList.remove("textFieldHidden");
  estimateButton.classList.remove("textFieldHidden");
  estimateButton.classList.add("show-estimate-button");
  estimateButton.classList.remove("textFieldHidden");
  modalFooter.classList.add("textFieldHidden");
  backButton.classList.add("textFieldHidden");
});
