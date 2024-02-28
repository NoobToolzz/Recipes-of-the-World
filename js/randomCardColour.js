const getCards = () => Array.from(document.querySelectorAll('[id*="card"]'));

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const boxShadowColor = "#100a886b";

getCards().forEach((card) => {
  card.style.background = getRandomColor();
  card.style.boxShadow = `1px 5px 60px 0px ${boxShadowColor}`;
});
