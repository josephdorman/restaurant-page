function makeHeader() {
  const content = document.querySelector('.content');
  const header = document.createElement('div');

  header.classList.add('header');

  const makeNav = () => {
    const nav = document.createElement('ul');
    nav.classList.add('nav');
    header.appendChild(nav);

    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    homeBtn.textContent = 'Home';
    menuBtn.textContent = 'Menu';
    contactBtn.textContent = 'Contact';

    homeBtn.setAttribute('id', 'home');
    menuBtn.setAttribute('id', 'menu');
    contactBtn.setAttribute('id', 'contact');

    home.appendChild(homeBtn);
    menu.appendChild(menuBtn);
    contact.appendChild(contactBtn);

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

  }

  makeNav();

  content.appendChild(header);
}

function makeBody() {
  const content = document.querySelector('.content');

  content.style.height = '100vh';

  const body = document.createElement('div');

  body.classList.add('body');

  const topGradient = document.createElement('div');
  const bottomGradient = document.createElement('div');

  topGradient.classList.add('gradient');
  bottomGradient.classList.add('gradient-bottom');

  const image = document.createElement('img');

  image.setAttribute('id', 'logo');
  image.setAttribute('src', './assets/afterlife-logo.png');

  body.appendChild(topGradient);
  body.appendChild(image);
  body.appendChild(bottomGradient);

  content.appendChild(body);
}

function makeFooter() {
  const content = document.querySelector('.content');
  const footer = document.createElement('div');

  footer.classList.add('footer');

  content.appendChild(footer);
}

function makeHome() {
  makeHeader();
  makeBody();
  makeFooter();
}

export default makeHome;
export {makeHeader, makeFooter};