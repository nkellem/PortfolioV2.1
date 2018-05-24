//Sets up the border colors for the nav bar links
const borderMap = new Map();
borderMap.set('#about', 'var(--custom-red)');
borderMap.set('#projects', 'var(--custom-purple)');
borderMap.set('#contact', 'var(--custom-green)');

//Array for storing info about Projects
const projects = [
  {
    src: '/assets/images/r6tracker.png',
    alt: 'Screenshot of the Rainbow Six Siege Cosmetics Tracker',
    projTitle: 'R6S Cosmetics Tracker',
    projDescription: `A cosmetics tracker for the popular video game Rainbow Six Siege. Users can create their own accounts
                      and log cosmetic items they receive in the game on a per-character basis. The "free" tier lets users only
                      track weapon skins and a "paid" tier allows them to track all other cosmetics.`,
    projTechnologies: `Powered by a Node.js and MongoDB back-end with a React.js front-end.`,
    projSiteLink: 'https://r6siegetracker.herokuapp.com',
    projGithub: 'https://github.com/nkellem/Rainbow6SiegeCosmeticsTracker'
  },

  {
    src: '/assets/images/partyup.png',
    alt: 'Screenshot of the PartyUp Web App',
    projTitle: 'PartyUp',
    projDescription: `PartyUp is a dynamic song/video playlist for use by you and your friends! One person creates an optionally
                      password-protected playlist that everyone else connects to. Once connected, users can add songs/videos to
                      a queue that is auto-played from the Host's device. Every connected user can restart or skip songs/videos.`,
    projTechnologies: 'Powered by Node.js and Websockets utilizing the Socket.io npm library with a React.js front-end.',
    projSiteLink: 'https://partyupapp.herokuapp.com/',
    projGithub: 'https://github.com/nkellem/PartyUp'
  },

  {
    src: '/assets/images/spiphy.png',
    alt: 'Screenshot of the SPIPHY Web App',
    projTitle: 'SPIPHY',
    projDescription: `SPIPHY is a Web App that interacts with the GIPHY and Flickr APIs and utilizes the Web Speech API to allows users to easily search for
                      gifs and pictures using their voice and share them with their friends. Users have the option to save gifs and pictures,
                      share them via direct links, send them in Facebook messages, or tweet them out to their followers.`,
    projTechnologies: 'Built using HTML, CSS, JavaScript, and the Web Speech API.',
    projSiteLink: 'https://people.rit.edu/nmk2485/portfolio/SPIPHY/index.html',
    projGithub: 'https://github.com/nkellem/SPIPHY'
  },

  {
    src: '/assets/images/audioviz.png',
    alt: "Screenshot of Noah's Web Audio Visualizer",
    projTitle: 'Web Audio Visualizer',
    projDescription: `An audio visualizer utilizing the Web Audio API and Canvas to provide the feeling of a user interacting
                      with a stereo entirely through Canvas UI elements. The user can interact with a number of different elements
                      including Volume, Bass, Treble, display color, type of data visualized, and color scheme of the stereo.
                      The user also has 3 different songs they can play, pause, and skip through.`,
    projTechnologies: 'Built using HTML, CSS, JavaScript, Canvas, and the Web Audio API.',
    projSiteLink: 'https://people.rit.edu/nmk2485/portfolio/AudioViz/index.html',
    projGithub: 'https://github.com/nkellem/WebAudioVisualizer'
  },

  {
    src: '/assets/images/aliensattack.png',
    alt: 'Screenshot of Aliens Attack! web game',
    projTitle: 'Aliens Attack!',
    projDescription: `Aliens Attack! is a Galaga inspired web game in which players must destroy enough alien ships
                      in the time allotted and progress as far as they can.`,
    projTechnologies: 'Built using HTML, CSS, JavaScript, Canvas, and the Web Audio API.',
    projSiteLink: 'https://people.rit.edu/nmk2485/portfolio/AliensAttack/',
    projGithub: 'https://github.com/nkellem/AliensAttack'
  }
];

// TODO:: Decide if I want to keep this or not
const handleNavClicks = e => {
}

//Hits the API on the server side to send an email when someone completes the contact form
const handleContactSubmit = e => {
  e.preventDefault();

  const form = document.querySelector('#contactForm');
  const action = form.getAttribute('action');
  const type = form.getAttribute('method');
  const data = serialize(form);
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const body = document.querySelector('#body').value;

  if (!name || !email || !body) {
    renderToastComponent('*All fields are required.', 'toast error animated shake');
    return;
  }

  fetch(action, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    credentials: 'include',
    method: type,
    body: data
  }).then(response => {
    return response.json();
  }).then(data => {
    if (data.error) {
      renderToastComponent(data.message, 'toast error animated shake');
      return;
    }
    emailSuccess(data.message, name, email, body);
  });
};

//Animates a successful toast message and resets the form
const emailSuccess = (message) => {
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#body').value = '';

  renderToastComponent(message, 'toast success animated bounceIn');

  setTimeout(() => {
    renderToastComponent(message, 'toast success animated bounceOut');
    setTimeout(() => {
      document.querySelector('#toastSection').innerHTML = '';
    }, 750);
  }, 3000);
};

//Checks for where the user is on the page and makes the appropriate link active
const makeLinkActive = divYPos => {
  if (window.pageYOffset >= divYPos[0] && window.pageYOffset < divYPos[1]) {
    if (document.querySelector('a[class="navLink active"]')) {
      document.querySelector('a[class="navLink active"]').style.borderBottom = '';
      document.querySelector('a[class="navLink active"]').classList.remove('active');
    }
  }

  if (window.pageYOffset >= divYPos[1] && window.pageYOffset < divYPos[2]) {
    if (!document.querySelector('a[class="navLink active"]')) {
      document.querySelector('#navAbout').classList.add('active');
      document.querySelector('a[class="navLink active"]').style.borderBottom = '2px solid var(--custom-red)';
    } else if (document.querySelector('a[class="navLink active"]').href !== '#about') {
      document.querySelector('a[class="navLink active"]').style.borderBottom = '';
      document.querySelector('a[class="navLink active"]').classList.remove('active');
      document.querySelector('#navAbout').classList.add('active');
      document.querySelector('a[class="navLink active"]').style.borderBottom = '2px solid var(--custom-red)';
    }
  }

  if (window.pageYOffset >= divYPos[2] && window.pageYOffset < divYPos[3]) {
    if (!document.querySelector('a[class="navLink active"]')) {
      document.querySelector('#navProjects').classList.add('active');
      document.querySelector('a[class="navLink active"]').style.borderBottom = '2px solid var(--custom-purple)';
    } else if (document.querySelector('a[class="navLink active"]').href !== '#projects') {
      document.querySelector('a[class="navLink active"]').style.borderBottom = '';
      document.querySelector('a[class="navLink active"]').classList.remove('active');
      document.querySelector('#navProjects').classList.add('active');
      document.querySelector('a[class="navLink active"]').style.borderBottom = '2px solid var(--custom-purple)';
    }
  }

  if (window.pageYOffset >= divYPos[3]) {
    if (!document.querySelector('a[class="navLink active"]')) {
      document.querySelector('#navContact').classList.add('active');
      document.querySelector('a[class="navLink active"]').style.borderBottom = '2px solid var(--custom-green)';
    } else if (document.querySelector('a[class="navLink active"]').href !== '#contact') {
      document.querySelector('a[class="navLink active"]').style.borderBottom = '';
      document.querySelector('a[class="navLink active"]').classList.remove('active');
      document.querySelector('#navContact').classList.add('active');
      document.querySelector('a[class="navLink active"]').style.borderBottom = '2px solid var(--custom-green)';
    }
  }
};

//Detects which element is in the viewport as a scroll event
const elementIsVisible = () => {
  const divYPos = [
    document.querySelector('#splash').offsetTop,
    document.querySelector('#about').offsetTop - 100,
    document.querySelector('#projects').offsetTop - 100,
    document.querySelector('#contact').offsetTop - 100
  ];

  const standardHeight = document.querySelector('#splash').clientHeight;

  window.addEventListener('scroll', e => {
    makeLinkActive(divYPos);
  });
};

//Method for rendering the appropriate project in the projects section based on link click
const handleProjectClick = e => {
  const projIndex = e.target.getAttribute('value');

  document.querySelector('span[class="circle projActive"]').classList.remove('projActive');
  e.target.classList.add('projActive');

  if (document.querySelector('#projectsContent div').classList.contains('fadeIn')) {
    document.querySelector('#projectsContent div').classList.replace('fadeIn', 'fadeOut');
  } else {
    document.querySelector('#projectsContent div').classList.add('fadeOut');
  }

  setTimeout(() => {
    renderProjectImgAndCaption(projIndex);
    document.querySelector('#projectsContent div').classList.replace('fadeOut', 'fadeIn');
  }, 1000);

};
