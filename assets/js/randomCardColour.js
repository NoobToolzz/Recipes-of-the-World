const getCards = () => {
  const cardsWithLowerCase = Array.from(
    document.querySelectorAll('[id*="card"]')
  );
  const cardsWithUpperCase = Array.from(
    document.querySelectorAll('[id*="Card"]')
  );
  return [...cardsWithLowerCase, ...cardsWithUpperCase];
};

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const applyRandomColor = (element) => {
  let bgColor, afterColor;

  // Generate random colors until afterColor is different from bgColor
  do {
    bgColor = getRandomColor();
    afterColor = getRandomColor();
  } while (bgColor === afterColor);

  element.style.background = bgColor;
  element.style.boxShadow = `1px 5px 30px 0px ${bgColor}`;

  // Apply a different colour when you hover over the card
  element.style.setProperty("--card-after-background", afterColor);
};

getCards().forEach((card) => {
  applyRandomColor(card);
});
