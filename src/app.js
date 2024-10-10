const suits = ["heart", "diamond", "club", "spade"];
const symbols = ["♥", "♦", "♣", "♠"];

function createCard() {
  const existingCards = document.querySelectorAll(".card");
  existingCards.forEach(card => card.remove());

  const card = document.createElement("div");
  card.classList.add("card");

  const randomSuitIndex = Math.floor(Math.random() * 4);
  const randomSuit = suits[randomSuitIndex];
  let randomValue = Math.floor(Math.random() * 13) + 1;

  if (randomValue === 13) randomValue = "K";
  if (randomValue === 12) randomValue = "Q";
  if (randomValue === 11) randomValue = "J";

  card.classList.add(randomSuit);

  const top = document.createElement("div");
  top.classList.add("top");
  top.textContent = symbols[randomSuitIndex];

  const number = document.createElement("div");
  number.classList.add("number");
  number.textContent = randomValue;

  const bottom = document.createElement("div");
  bottom.classList.add("bottom");
  bottom.textContent = symbols[randomSuitIndex];

  card.appendChild(top);
  card.appendChild(number);
  card.appendChild(bottom);

  document.body.appendChild(card);
}

function delay() {
  setTimeout(createCard, 10000);
}

function changeSize() {
  const heightInput = document.getElementById("height");
  const widthInput = document.getElementById("width");
  const element = document.querySelector(".card");

  element.style.height = heightInput.value + "px";
  element.style.width = widthInput.value + "px";

  heightInput.value = "";
  widthInput.value = "";
}
