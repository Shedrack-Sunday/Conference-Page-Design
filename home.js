// Menu selector

const menuBtn = document.querySelector('.menu-btn');
// mobile header selector

const headerNavMobile = document.querySelector('.header-nav-mobile');
// close button selector

const btnCloseNav = document.querySelector('.btn-close-nav');
const speakerContainerCard = document.querySelector('.speaker-container-card');
const featureSpeakerButton = document.querySelector('.Feature_speaker_button');
// line 10 to 13 selects the nav bar details to be clicked.

const linkAbout = document.querySelector('.link-about');
const linkProgram = document.querySelector('.link-program');
const linkJoin = document.querySelector('.link-join');
const linkSponsor = document.querySelector('.link-sponsor');

/* A media query selector to later adjust the display of speakers on the screen, at max-width of
768, which is a mobile version of the app */

const mediaQueryList = window.matchMedia('(max-width: 768px)');

// Line 19 to 47 shows the click function behaviour

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

linkAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkProgram.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkJoin.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

linkSponsor.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

const invitedSpeakers = [
  {
    id: 0,
    url: './images/Elon-Musk-2010.jpeg',
    name: 'Elon Musk',
    role: 'CEO  of  SpaceX and Tesla.',
    description:
      ' Elon is a Great Enterpreanure and richest man alive. his company has made gaint strides in space shuttle, and the electric car industry.',
  },
  {
    id: 1,
    url: './images/jeff-Bezos-2017.jpeg',
    name: 'Jeff Bezoz',
    role: 'Founder of Amazon',
    description:
      'Jeff was once the richest man on the planet, and that was as a result of his great company AWS which is  a subsidary of Amazon. Presently  a market leader in cloud computing',
  },
  {
    id: 2,
    url: './images/Microsoft-CEO.jpeg',
    name: 'Satya Nadella',
    role: 'CEO at MicroSoft inc',
    description:
      'Nadella signature achievement as CEO has seen Microsoft Wholesale adoption of cloud computing. Creating the Azure public cloud business, while sifting most of the company software applications to the cloud',
  },
  {
    id: 3,
    url: './Images/nvidia-ceo.jpg',
    name: 'Jensen Huang',
    role: 'CEO AT NVIDIA.',
    description:
      'Jensen helped bring life to te graphics chip industry, and has been the CEO since founding the company in 1993. Today, the company is a leader in the grraphics space',
  },
  {
    id: 4,
    url: './Images/circleCI.jpeg',
    name: 'Jim Rose',
    role: 'CEO at CircleCI',
    description:
      'Jim is the CEO of the continuous integration and delivery platform named CircleCI, which is a major market leader in the cloud space.',
  },
  {
    id: 5,
    url: './Images/Google_ceo.jpg',
    name: 'Sundar Pichai',
    role: 'CEO st Alphabet Inc.',
    description:
      'Sundar is the CEO if the biggest Tech comapny in the world. Google offers cloud computing at an accelerated rate through its google cloud services.',
  },
];

const cardForSpeakers = (index) => `
  <div class="speaker-card-img">
      <img src=${invitedSpeakers[index].url} alt="image of speaker ${invitedSpeakers[index].name}">
  </div>
  <div class="speaker-card-content">
      <div class="speaker-card-name">
          <p>
            ${invitedSpeakers[index].name}
          </p>
      </div>
      <div class="speaker-card-position">
          <p>
            ${invitedSpeakers[index].role}
          </p>
      </div>
      <div class="speaker-card-description">
          <p>
          ${invitedSpeakers[index].description}
          </p>
      </div>
  </div>
  `;

/*
This is the first of two functions that dispalys dynamic speaker array on the screen
depending on which element is on the screen at max width of 769px.
*/

const twoSpeakers = () => {
  speakerContainerCard.innerHTML = ' ';
  // enlist just two speakers when the 'MORE' Button is on screen

  for (let i = 0; i < 2; i += 1) {
    const speakerTag = document.createElement('div');
    speakerTag.classList.add('speaker-card');
    speakerTag.innerHTML = cardForSpeakers(i);
    speakerContainerCard.appendChild(speakerTag);
  }
};

// This function dynamically deploy the speaker cards created from the
// card_for_speaker function above.

const allSpeakers = () => {
  speakerContainerCard.innerHTML = ' ';
  for (let i = 0; i < invitedSpeakers.length; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = cardForSpeakers(i);
    speakerContainerCard.appendChild(speaker);
  }
};

/* This function dynamically list the speakers or lessens it, based on the LESSS or MORE Button */

featureSpeakerButton.addEventListener('click', () => {
  const regex = /MORE/;
  const flag = regex.test(featureSpeakerButton.textContent);
  if (flag) {
    featureSpeakerButton.innerHTML = 'LESS <i class="fas fa-chevron-up"></i>';
    allSpeakers();
  } else {
    featureSpeakerButton.innerHTML = 'MORE <i class="fas fa-chevron-down"></i>';
    twoSpeakers();
  }
});

/* function decalraton to test the size of the screen.
it displays two speakers from the InvitedSpeakers
array,if the mobile screen is shown with the 'MORE'
button, and shows all speakers if the 'LESS' is dispalyed.
*/

const testForScreenSize = (event) => {
  if (event.matches) {
    twoSpeakers();
  } else {
    allSpeakers();
  }
};

/* The Test_for _Screen_Size function is passed with the
mediaquery selector function, which
Actives only on mobile screens with max-width of 768px */

testForScreenSize(mediaQueryList);
