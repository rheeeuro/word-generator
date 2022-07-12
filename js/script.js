import data from "./data.js";

const title = document.getElementById("word");
const description = document.getElementById("definition");
const buttonContainer = document.getElementById("buttonContainer");

const getRandomWord = (length) =>
  data[length][Math.floor(Math.random() * data[length].length)];

const handleClick = (event) => {
  const { word, definition } = getRandomWord(event.target.className);
  title.innerText = word;
  description.innerText = definition;
};

const init = () => {
  buttonContainer.addEventListener("click", handleClick, false);
};

if (title) {
  init();
}
