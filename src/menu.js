import { makeHeader, makeFooter } from "./home";

function getDrink () {
  const drinkMenu = [];

  const getMenu = () => drinkMenu;

  const drink = (name, image, firstPart, highlight, lastPart) => {
    const getName = () => name;
    const getImage = () => image;
    const getFirstPart = () => firstPart;
    const getHightlight = () => highlight;
    const getLastPart = () => lastPart;
   
    return {getName, getImage, getFirstPart, getHightlight, getLastPart}
  }

  const drinkList = () => {
    const drink1 = drink('Johnny Silverhand', './assets/alchohol1.png', '"A tequila old fashioned with a splash of beer and a chili garnish. For the ', 'rockerboy', ' who never gave up."');
    const drink2 = drink('David Martinez', './assets/alchohol2.png', '"A shot of vodka on the rocks, topped with ', 'NiCola', '. Aim high and go out with a bang."');

    drinkMenu.push(drink1);
    drinkMenu.push(drink2);
  }

  drinkList();

  return {getMenu};
}

function makeBody () {
  const menu = getDrink();

  console.table(menu.getMenu()[0].getName());
  console.log(menu.getMenu().length);

  const content = document.querySelector('.content');
  const menuBody = document.createElement('div');
  const cardWrapper = document.createElement('div');

  menuBody.classList.add('body-menu');
  cardWrapper.classList.add('card-wrapper');

  content.appendChild(menuBody);
  menuBody.appendChild(cardWrapper);

  const makeDrinks = () => {

    for (let i = 0; i < menu.getMenu().length; i++) {
      // create card
      const card = document.createElement('div');

      card.classList.add('card');
      card.classList.add('custom-border');

      // create title/name
      const cardName = document.createElement('h2');
      cardName.textContent = menu.getMenu()[i].getName();

      // create drink image
      const cardImage = document.createElement('img');
      cardImage.setAttribute('src', `${menu.getMenu()[i].getImage()}`);

      // create drink description element
      const cardDescription = document.createElement('div');
      cardDescription.classList.add('drink-description');

      // create drink description child
      const cardPar = document.createElement('p');

      // em child for first and last part
      const cardEm = document.createElement('em');
      const cardEm2 = document.createElement('em');

      // create first and last elements
      cardEm.textContent = menu.getMenu()[i].getFirstPart();
      cardEm2.textContent = menu.getMenu()[i].getLastPart();

      // elements for highlighted blue text
      const cardHighlightEm = document.createElement('em');
      const cardHighlight = document.createElement('span');

      // make highlighted element
      cardHighlight.setAttribute('id', 'highlight');
      cardHighlightEm.textContent = menu.getMenu()[i].getHightlight();
      cardHighlight.appendChild(cardHighlightEm);

      // append first part, highlighted text, last part in order to p element
      cardPar.appendChild(cardEm);
      cardPar.appendChild(cardHighlight);
      cardPar.appendChild(cardEm2);

      // append to finish making description
      cardDescription.appendChild(cardPar);

      // append name, image, and description to actual card
      card.appendChild(cardName);
      card.appendChild(cardImage);
      card.appendChild(cardDescription);

      // finally append the actual finished card to the wrapper
      cardWrapper.appendChild(card);
    

    }
    
  }

  makeDrinks();

}

function makeMenu () {
  makeHeader();
  makeBody();
  makeFooter();
}

export default makeMenu;