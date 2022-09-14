//Menu selector
const menuBtn = document.querySelector('.menu-btn');
//mobile header selector
const headerNavMobile = document.querySelector('.header-nav-mobile');
//close button selector
const btnCloseNav = document.querySelector('.btn-close-nav');
const speakerContainerCard = document.querySelector('.speaker-container-card');
const Feature_speaker_button = document.querySelector('.Feature_speaker_button');
//line 10 to 13 selects the nav bar details to be clicked.
const linkAbout = document.querySelector('.link-about');
const linkProgram = document.querySelector('.link-program');
const linkJoin = document.querySelector('.link-join');
const linkSponsor = document.querySelector('.link-sponsor');

/*A media query selector to later adjust the display of speakers on the screen, at max-width of
768, which is a mobile version of the app*/
const mediaqueryList = window.matchMedia('(max-width: 768px)');


//Line 19 to 47 shows the click function behaviour
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

const InvitedSpeakers = [
  {
    id: 0,
    url: './images/Elon-Musk-2010.jpeg',
    name: 'Elon Musk',
    Role:
      'CEO  of  SpaceX and Tesla.',
    description:
      ' Elon is a Great Enterpreanure and richest man alive. his company has made gaint strides in space shuttle, and electric car industry.',
  },
  {
    id: 1,
    url: './images/jeff-Bezos-2017.jpeg',
    name: 'Jeff Bezoz',
    Role: 'Founder of Amazon',
    description:
      'Jeff was once the richest man in the planet, and that was as a result of his great company. AWS, a subsidary of Amazon, is a market leader in cloud computing',
  },
  {
    id: 2,
    url: './images/Microsoft-CEO.jpeg',
    name: 'Satya Nadella',
    Role: 'CEO at MicroSoft inc',
    description:
      'Nadella signature achievement as CEO has been Microsoft Wholesale aoption of cloud computing. creating the Azure public cloud business, while sifting most of te company software applications to the cloud',
  },
  {
    id: 3,
    url: './Images/nvidia-ceo.jpg',
    name: 'Jensen Huang',
    Role:'CEO AT NVIDIA.',
    description:
      "Jensen helped bring life to te graphics chip industry, and has been the CEO since founding the company in 1993. Today, the company is a leader in the grraphics space",
  },
  {
    id: 4,
    url: './Images/circleCI.jpeg',
    name: 'Jim Rose',
    Role: 'CEO at CircleCI',
    description:
      "Jim is the CEO of te continuous integration and delivery platform named CircleCI, which is a major market leader in the cloud space. ",
  },
  {
    id: 5,
    url: './Images/Google_ceo.jpg',
    name: 'Sundar Pichai',
    Role: 'CEO st Alphabet Inc.',
    description:
      'Sundar is the CEO if the biggest Tech comapny in the world. Google offers cloud computing at an accelerated rate hrough its google cloud services.',
  },
];

const Card_for_speakers = (index) => `
  <div class="speaker-card-img">
      <img src=${InvitedSpeakers[index].url} alt="image of speaker ${InvitedSpeakers[index].name}">
  </div>
  <div class="speaker-card-content">
      <div class="speaker-card-name">
          <p>
              ${InvitedSpeakers[index].name}
          </p>
      </div>
      <div class="speaker-card-position">
          <p>
              ${InvitedSpeakers[index].position}
          </p>
      </div>
      <div class="speaker-card-description">
          <p>${InvitedSpeakers[index].description}</p>
      </div>
  </div>
  `;


/*
This is the first of two functions that dispalys dynamic speaker array on the screen
depending on which element is on the screen at max width of 769px.
*/

const TwoSpeakers = () => {
  speakerContainerCard.innerHTML = ' ';
  //enlist just two speakers when the 'MORE' Button is on screen
  for (let i = 0; i < 2; i += 1) {
    const speaker_tag = document.createElement('div');
    speaker_tag.classList.add('speaker-card');
    speaker_tag.innerHTML = Card_for_speakers(i);
    speakerContainerCard.appendChild(speaker_tag);
  }
};

//This function dynamically deploy the speaker cards created frpm the 
//card_for_speaker function above.
const AllSpeakers = () => {
  speakerContainerCard.innerHTML = ' ';
  for (let i = 0; i < InvitedSpeakers.length; i += 1) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = Card_for_speakers(i);
    speakerContainerCard.appendChild(speaker);
  }
};


//This function dynamically list the speakers or lessens it, based on the LESSS or MORE Button
Feature_speaker_button.addEventListener('click', () => {
  const regex = /MORE/;
  const flag = regex.test(Feature_speaker_button.textContent);
  if (flag) {
    Feature_speaker_button.innerHTML = 'LESS <i class="fas fa-chevron-up"></i>';
    AllSpeakers();
  } 
  else {
    Feature_speaker_button.innerHTML = 'MORE <i class="fas fa-chevron-down"></i>';
    TwoSpeakers();
  }
});

/*function decalraton to test the size of the screen.  
it displays two speakers from the InvitedSpeakers array, if the mobile screen is shown 
with the 'MORE' button, and shows all speakers if the 'LESS' is dispalyed.
*/
const Test_for_screen_size = (event) => {
  if (event.matches) {
    TwoSpeakers();
  }
  else {
    AllSpeakers();
  }
};

/* The Test_for _Screen_Size function is passed with the mediaquery selector function, which 
   Actives only on mobile screens with max-width of 768px*/
Test_for_screen_size(mediaqueryList);
