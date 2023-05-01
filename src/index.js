import makeHome from './home';

function screenController () {

  const switchTab = (btnID) => {
    const content = document.querySelector('.content');
    content.textContent = '';

    if (btnID === 'home') {
      makeHome();
      clickHandler();
    }
    else if (btnID === 'menu') {
      console.log('menu');
      clickHandler();
    }
    else {
      console.log('contact');
      clickHandler();
    }
    
  }

  const clickHandler = () => {
      const buttons = document.querySelectorAll('button');

      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          switchTab(button.id);
        });
      });
  }

  clickHandler();

}

// initial load of home and buttons
makeHome();

screenController();
