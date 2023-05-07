import { makeHeader, makeFooter } from "./home";

function makeAboutSection () {
  const aboutContainer = document.createElement('div');
  const bodyContact = document.createElement('div');

  aboutContainer.classList.add('about-container');
  bodyContact.classList.add('body-contact');

  const makeAboutUs = () => {
    const aboutUs = document.createElement('div');
    aboutUs.classList.add('about-us');

    const title = document.createElement('h2');
    const info = document.createElement('p');

    title.textContent = 'About Us';
    info.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    aboutUs.appendChild(title);
    aboutUs.appendChild(info);

    aboutContainer.appendChild(aboutUs);
  }

  const makeAboutImage = () => {
    const aboutImage = document.createElement('div');
    const image = document.createElement('img');
    aboutImage.classList.add('about-image');

    image.classList.add('custom-border');
    image.setAttribute('src', './assets/afterlife-about-us.jpg');

    aboutImage.appendChild(image);

    aboutContainer.appendChild(aboutImage);

  }

  makeAboutUs();
  makeAboutImage();

  bodyContact.appendChild(aboutContainer);

  return {bodyContact};

}

function makeSeperator () {
  const bodyCont = makeAboutSection().bodyContact;
  const seperator = document.createElement('div');

  seperator.classList.add('seperator');

  bodyCont.appendChild(seperator);

  return {bodyContact: bodyCont};
}

function makeSignup () {
  const bodyCont = makeSeperator().bodyContact;
  const signup = document.createElement('div');
  signup.classList.add('sign-up');

  const makeMap = () => {
    const mapDiv = document.createElement('div');
    mapDiv.classList.add('map');

    const map = document.createElement('iframe');
    map.setAttribute('width', '600px');
    map.setAttribute('height', '600px');
    map.setAttribute('src', 'https://maps.piggyback.com/cyberpunk-2077/maps/night-city');
    map.setAttribute('title', 'Night City');
    map.setAttribute('frameborder', '0');

    mapDiv.appendChild(map);
    signup.appendChild(mapDiv);

  }

  const makeSignupForm = () => {
    const formContainer = document.createElement('div');
    const form = document.createElement('form');

    formContainer.classList.add('sign-up-container');
    formContainer.classList.add('custom-border');

    form.classList.add('sign-up-form');

    const title = document.createElement('h2');
    title.textContent = 'Sign Up';

    form.appendChild(title);

    // make name and email fields
    const fullName = document.createElement('input');
    const email = document.createElement('input');

    fullName.setAttribute('type', 'text');
    fullName.setAttribute('id', 'full-name');
    fullName.setAttribute('placeholder', 'Full Name');

    email.setAttribute('type', 'email');
    email.setAttribute('id', 'email');
    email.setAttribute('placeholder', 'Email');

    form.appendChild(fullName);
    form.appendChild(email);

    // make DOB field
    const dobDiv = document.createElement('div');

    const dobLabel = document.createElement('label');
    const dobInput = document.createElement('input');

    dobLabel.setAttribute('for', 'dob');
    dobLabel.textContent = 'Date of Birth: ';

    dobInput.setAttribute('type', 'date');
    dobInput.setAttribute('id', 'dob');
    dobInput.setAttribute('name', 'dob');

    dobDiv.appendChild(dobLabel);
    dobDiv.appendChild(dobInput);

    form.appendChild(dobDiv);

    // make ID Upload
    const uploadDiv = document.createElement('div');

    const uploadLabel = document.createElement('p');
    const uploadInput = document.createElement('input');

    uploadLabel.textContent = 'Upload ID to Verify age';

    uploadInput.setAttribute('type', 'file');
    uploadInput.setAttribute('id', 'myFile');
    uploadInput.setAttribute('name', 'filename');

    uploadDiv.appendChild(uploadLabel);
    uploadDiv.appendChild(uploadInput);

    form.appendChild(uploadDiv);

    // make newsletter
    const newsDiv = document.createElement('div');

    const newsLabel = document.createElement('label');
    const newsInput = document.createElement('input');

    newsLabel.setAttribute('for', 'newsletter');
    newsLabel.textContent = 'Keep updated with menu changes?';

    newsInput.setAttribute('type', 'checkbox');
    newsInput.setAttribute('id', 'newsletter');
    newsInput.setAttribute('name', 'news_letter');

    newsDiv.appendChild(newsInput);
    newsDiv.appendChild(newsLabel);

    form.appendChild(newsDiv);

    // make submit button
    const submit = document.createElement('input');

    submit.setAttribute('type', 'submit');

    form.appendChild(submit);

    formContainer.appendChild(form);
    signup.appendChild(formContainer);

  }


  makeMap();
  makeSignupForm();

  bodyCont.appendChild(signup);

  return {bodyContact: bodyCont};
}

function makeContactDetails () {
  const bodyCont = makeSignup().bodyContact;
  const contactUs = document.createElement('div');
  const detailContainer = document.createElement('div');

  contactUs.classList.add('contact-us');
  detailContainer.classList.add('detail-container');

  const contacts = [];

  const detailInfo = (title, p1, p2, p3) => {
    const getTitle = () => title;
    const getP1 = () => p1;
    const getP2 = () => p2;
    const getP3 = () => p3;

    return {getTitle, getP1, getP2, getP3};
  }

  const details = () => {
    const location = detailInfo('Location', 'Night City', 'Watson District', 'Ellison ST');
    const hours = detailInfo('Hours', 'Mon-Thurs: 6PM - 6AM', 'Fri-Sat: 8PM - 6AM', 'Sunday: 24/7');
    const contact = detailInfo('Location', '714-555-5555', 'afterlife@nightcity.biz', 'Rouge Ameriates');

    contacts.push(location);
    contacts.push(hours);
    contacts.push(contact);

  }

  const makeDetails = () => {
    const title = document.createElement('h2');
    title.textContent = 'Contact Us'

    detailContainer.appendChild(title);

    for (let i = 0; i < contacts.length; i++) {
      const detailDiv = document.createElement('div');
      detailDiv.classList.add('legend');

      const legend = document.createElement('h3');
      const part1 = document.createElement('p');
      const part2 = document.createElement('p');
      const part3 = document.createElement('p');

      legend.textContent = contacts[i].getTitle();
      part1.textContent = contacts[i].getP1();
      part2.textContent = contacts[i].getP2();
      part3.textContent = contacts[i].getP3();

      detailDiv.appendChild(legend);
      detailDiv.appendChild(part1);
      detailDiv.appendChild(part2);
      detailDiv.appendChild(part3);

      detailContainer.appendChild(detailDiv);

    }

  }

  details();
  makeDetails();


  contactUs.appendChild(detailContainer);
  bodyCont.appendChild(contactUs);

  return {bodyContact: bodyCont};
}

function makeBody () {
  const content = document.querySelector('.content');
  content.style.height = '100%';

  const bodyCont = makeContactDetails().bodyContact;

  makeAboutSection();

  content.appendChild(bodyCont);
}

function makeContact () {
  makeHeader();
  makeBody();
  makeFooter();
}

export default makeContact;