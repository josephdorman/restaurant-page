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

  const content = document.querySelector('.content');
  const menuBody = document.createElement('div');
  const cardWrapper = document.createElement('div');

  menuBody.classList.add('body-menu');
  cardWrapper.classList.add('card-wrapper');

  const makeDrinks = () => {



    /*
    const card1 = document.createElement('div');

    card1.classList.add('card');
    card1.classList.add('custom-border');

    const card1Name = document.createElement('h2');
    card1Name.textContent = 'Johnny Silverhand';

    const card1Image = document.createElement('img');
    card1Image.setAttribute('src', './assets/alchohol1.png');

    const card1Description = document.createElement('div');
    card1Description.classList.add('drink-description');

    const card1Par = document.createElement('p');
    const card1Em = document.createElement('em');
    const card1Em2 = document.createElement('em');

    const card1Highlight = document.createElement('span');
    const card1HighlightEm = document.createElement('em');
    card1Highlight.setAttribute('id', 'highlight');
    card1HighlightEm.textContent = 'rockerboy';
    card1Highlight.appendChild(card1HighlightEm);

    card1Em.textContent = 'A tequila old fashioned with a splash of beer and a chili garnish. For the ';
    card1Em2.textContent = ' who never gave up';

    card1Par.appendChild(card1Em);
    card1Par.appendChild(card1Highlight);
    card1Par.appendChild(card1Em2);

    card1Description.appendChild(card1Par);

    card1.appendChild(card1Name);
    card1.appendChild(card1Image);
    card1.appendChild(card1Description);

    cardWrapper.appendChild(card1);
    */
  }

  makeDrinks();

  menuBody.appendChild(cardWrapper);
  content.appendChild(menuBody);

}

function makeMenu () {
  makeHeader();
  makeBody();
  makeFooter();
}

export default makeMenu;