'use strict';

//Sets up the border colors for the nav bar links
var borderMap = new Map();
borderMap.set('#about', 'var(--custom-red)');
borderMap.set('#projects', 'var(--custom-purple)');
borderMap.set('#contact', 'var(--custom-green)');

//Load all the Project images into memory so that they are displayed faster
var preloadImages = function preloadImages(imageSources) {
  var localImages = [];

  imageSources.forEach(function (imageSource) {
    var img = new Image();
    img.src = imageSource;
    localImages.push(img);
  });

  return localImages;
};

//All the sources of images we want to pre-load
var imgSrcs = ['/assets/images/r6tracker.png', '/assets/images/partyup.png', '/assets/images/spiphy.png', '/assets/images/audioviz.png', '/assets/images/aliensattack.png'];

//ALl of the Project images
var images = preloadImages(imgSrcs);

//Array for storing info about Projects
var projects = [{
  src: images[0].src,
  alt: 'Screenshot of the Rainbow Six Siege Cosmetics Tracker',
  projTitle: 'R6S Cosmetics Tracker',
  projDescription: 'A cosmetics tracker for the popular video game Rainbow Six Siege. Users can create their own accounts\n                      and log cosmetic items they receive in the game on a per-character basis. The "free" tier lets users only\n                      track weapon skins and a "paid" tier allows them to track all other cosmetics.',
  projTechnologies: 'Powered by a Node.js and MongoDB back-end with a React.js front-end.',
  projSiteLink: 'https://r6siegetracker.herokuapp.com',
  projGithub: 'https://github.com/nkellem/Rainbow6SiegeCosmeticsTracker'
}, {
  src: images[1].src,
  alt: 'Screenshot of the PartyUp Web App',
  projTitle: 'PartyUp',
  projDescription: 'PartyUp is a dynamic song/video playlist for use by you and your friends! One person creates an optionally\n                      password-protected playlist that everyone else connects to. Once connected, users can add songs/videos to\n                      a queue that is auto-played from the Host\'s device. Every connected user can restart or skip songs/videos.',
  projTechnologies: 'Powered by Node.js and Websockets utilizing the Socket.io npm library with a React.js front-end.',
  projSiteLink: 'https://partyupapp.herokuapp.com/',
  projGithub: 'https://github.com/nkellem/PartyUp'
}, {
  src: images[2].src,
  alt: 'Screenshot of the SPIPHY Web App',
  projTitle: 'SPIPHY',
  projDescription: 'SPIPHY is a Web App that interacts with the GIPHY and Flickr APIs and utilizes the Web Speech API to allows users to easily search for\n                      gifs and pictures using their voice and share them with their friends. Users have the option to save gifs and pictures,\n                      share them via direct links, send them in Facebook messages, or tweet them out to their followers.',
  projTechnologies: 'Built using HTML, CSS, JavaScript, and the Web Speech API.',
  projSiteLink: 'https://people.rit.edu/nmk2485/portfolio/SPIPHY/index.html',
  projGithub: 'https://github.com/nkellem/SPIPHY'
}, {
  src: images[3].src,
  alt: "Screenshot of Noah's Web Audio Visualizer",
  projTitle: 'Web Audio Visualizer',
  projDescription: 'An audio visualizer utilizing the Web Audio API and Canvas to provide the feeling of a user interacting\n                      with a stereo entirely through Canvas UI elements. The user can interact with a number of different elements\n                      including Volume, Bass, Treble, display color, type of data visualized, and color scheme of the stereo.\n                      The user also has 3 different songs they can play, pause, and skip through.',
  projTechnologies: 'Built using HTML, CSS, JavaScript, Canvas, and the Web Audio API.',
  projSiteLink: 'https://people.rit.edu/nmk2485/portfolio/AudioViz/index.html',
  projGithub: 'https://github.com/nkellem/WebAudioVisualizer'
}, {
  src: images[4].src,
  alt: 'Screenshot of Aliens Attack! web game',
  projTitle: 'Aliens Attack!',
  projDescription: 'Aliens Attack! is a Galaga inspired web game in which players must destroy enough alien ships\n                      in the time allotted and progress as far as they can.',
  projTechnologies: 'Built using HTML, CSS, JavaScript, Canvas, and the Web Audio API.',
  projSiteLink: 'https://people.rit.edu/nmk2485/portfolio/AliensAttack/',
  projGithub: 'https://github.com/nkellem/AliensAttack'
}];

//Hits the API on the server side to send an email when someone completes the contact form
var handleContactSubmit = function handleContactSubmit(e) {
  e.preventDefault();

  var form = document.querySelector('#contactForm');
  var action = form.getAttribute('action');
  var type = form.getAttribute('method');
  var data = serialize(form);
  var name = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var body = document.querySelector('#body').value;

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
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    if (data.error) {
      renderToastComponent(data.message, 'toast error animated shake');
      return;
    }
    emailSuccess(data.message, name, email, body);
  });
};

//Animates a successful toast message and resets the form
var emailSuccess = function emailSuccess(message) {
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#body').value = '';

  renderToastComponent(message, 'toast success animated bounceIn');

  setTimeout(function () {
    renderToastComponent(message, 'toast success animated bounceOut');
    setTimeout(function () {
      document.querySelector('#toastSection').innerHTML = '';
    }, 750);
  }, 3000);
};

//Checks for where the user is on the page and makes the appropriate link active
var makeLinkActive = function makeLinkActive(divYPos) {
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
var elementIsVisible = function elementIsVisible() {
  var divYPos = [document.querySelector('#splash').offsetTop, document.querySelector('#about').offsetTop - 100, document.querySelector('#projects').offsetTop - 100, document.querySelector('#contact').offsetTop - 100];

  var standardHeight = document.querySelector('#splash').clientHeight;

  window.addEventListener('scroll', function (e) {
    makeLinkActive(divYPos);
  });
};

//Method for rendering the appropriate project in the projects section based on link click
var handleProjectClick = function handleProjectClick(e) {
  var projIndex = e.target.getAttribute('value');

  document.querySelector('span[class="circle projActive"]').classList.remove('projActive');
  e.target.classList.add('projActive');

  if (document.querySelector('#projectsContent div').classList.contains('fadeIn')) {
    document.querySelector('#projectsContent div').classList.replace('fadeIn', 'fadeOut');
  } else {
    document.querySelector('#projectsContent div').classList.add('fadeOut');
  }

  setTimeout(function () {
    renderProjectImgAndCaption(projIndex);
    document.querySelector('#projectsContent div').classList.replace('fadeOut', 'fadeIn');
  }, 1000);
};
"use strict";

/// SECTION: React components

//React component for the Nav bar
var NavBarComponent = function NavBarComponent(props) {
  return React.createElement(
    "span",
    null,
    React.createElement(
      "a",
      { href: "#about", className: "navLink", id: "navAbout" },
      "About Me"
    ),
    React.createElement(
      "a",
      { href: "#projects", className: "navLink", id: "navProjects" },
      "Projects"
    ),
    React.createElement(
      "a",
      { href: "#contact", className: "navLink", id: "navContact" },
      "Contact"
    ),
    React.createElement(
      "a",
      { href: "/assets/documents/KellemNoah_Resume.pdf", target: "_blank", className: "navLink", id: "navResume" },
      "R\xE9sum\xE9"
    )
  );
};

//React component for the left side of the first section
var SplashLeftComponent = function SplashLeftComponent(props) {
  return React.createElement(
    "div",
    { id: "splashLeft" },
    React.createElement(
      "span",
      null,
      React.createElement(
        "h1",
        { className: "animated fadeInUp" },
        "Noah Kellem"
      ),
      React.createElement(
        "h2",
        { className: "animated fadeInUp" },
        "Front-End Web and Node.js Developer."
      ),
      React.createElement(
        "h2",
        { className: "animated fadeInUp" },
        "Proud proponent of all things Breakfast."
      )
    )
  );
};

//React component for the right side of the first section
var SplashRightComponent = function SplashRightComponent(props) {
  return React.createElement(
    "div",
    { id: "splashRight" },
    React.createElement("img", { id: "portrait", src: "/assets/images/portrait.png", alt: "Picture of Noah Kelem" })
  );
};

//React component for displaying the whole first section
var SplashSectionComponent = function SplashSectionComponent(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(SplashLeftComponent, null),
    React.createElement(SplashRightComponent, null)
  );
};

//React component for displaying the left side of the about me section
var AboutLeftComponent = function AboutLeftComponent(props) {
  return React.createElement(
    "div",
    { id: "aboutLeft" },
    React.createElement("img", { id: "polaroid", src: "/assets/images/polaroid.png", alt: "polaroid picture" })
  );
};

//React component for displaying the right side of the about me section
var AboutRightComponent = function AboutRightComponent(props) {
  return React.createElement(
    "div",
    { id: "aboutRight" },
    React.createElement(
      "span",
      null,
      React.createElement(
        "h1",
        { id: "aboutFirstHeader" },
        "What do you do?"
      ),
      React.createElement(
        "p",
        null,
        "I specialize in Front-End Web Development in conjunction with a Node.js Back-End Environment."
      ),
      React.createElement(
        "h1",
        { id: "aboutSecondHeader" },
        "What about in your free time?"
      ),
      React.createElement(
        "p",
        null,
        "When I'm not coding you can find me at the local rock climbing gym or writing music in my basement. If you're at all curious, check out my ",
        React.createElement(
          "a",
          { href: "https://noahkellem.bandcamp.com/releases", target: "_blank" },
          "solo project"
        ),
        " or my old ",
        React.createElement(
          "a",
          { href: "https://apollo111.bandcamp.com/album/moon-landings-wild-things", target: "_blank" },
          "folk band"
        ),
        " on Bandcamp."
      ),
      React.createElement(
        "h1",
        { id: "aboutThirdHeader" },
        "What have you been up to recently?"
      ),
      React.createElement(
        "p",
        null,
        "I am currently working as a Software Developer Intern over at Charles River Analytics."
      )
    )
  );
};

//React component for displaying the whole about me section
var AboutSectionComponent = function AboutSectionComponent(props) {
  return React.createElement(
    "div",
    { className: "innerContent" },
    React.createElement(AboutLeftComponent, null),
    React.createElement(AboutRightComponent, null)
  );
};

//React component for displaying the projects image section
var ProjectsImgComponent = function ProjectsImgComponent(props) {
  return React.createElement(
    "span",
    { id: "projectsImg" },
    React.createElement("img", { src: props.imgSrc, alt: props.imgAlt })
  );
};

//React component for displaying the projects caption section
var ProjectsCaptionComponent = function ProjectsCaptionComponent(props) {
  return React.createElement(
    "span",
    { id: "projectsCaption" },
    React.createElement(
      "span",
      null,
      React.createElement(
        "h3",
        null,
        props.projectTitle
      ),
      React.createElement(
        "p",
        null,
        props.caption
      ),
      React.createElement(
        "p",
        null,
        props.poweredBy
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "a",
          { href: props.liveSite, target: "_blank" },
          "View This Project"
        )
      ),
      React.createElement(
        "p",
        null,
        React.createElement(
          "a",
          { href: props.github, target: "_blank" },
          "Check Out The Code on GitHub"
        )
      )
    )
  );
};

//React component for rendering the image and the caption together
var ProjectImgAndCaption = function ProjectImgAndCaption(props) {
  return React.createElement(
    "div",
    { className: "animated" },
    React.createElement(ProjectsImgComponent, { imgSrc: props.imgSrc, imgAlt: props.imgAlt }),
    React.createElement(ProjectsCaptionComponent, { projectTitle: props.projectTitle, caption: props.caption,
      poweredBy: props.poweredBy, liveSite: props.liveSite, github: props.github })
  );
};

//React component for displaying the project picker
var ProjectsPickerComponent = function ProjectsPickerComponent(props) {
  var pickerParts = [];
  var index = 0;

  projects.forEach(function (project) {
    if (index === 0) {
      pickerParts.push(React.createElement("span", { className: "circle projActive", value: index, onClick: handleProjectClick }));
    } else {
      pickerParts.push(React.createElement("span", { className: "circle", value: index, onClick: handleProjectClick }));
    }

    index++;
  });

  return React.createElement(
    "div",
    { id: "projectsPicker" },
    pickerParts
  );
};

//React component for displaying the entire project section
var ProjectSectionComponent = function ProjectSectionComponent(props) {
  return React.createElement(
    "div",
    { id: "projectsSection" },
    React.createElement("div", { id: "projectsContent" }),
    React.createElement(ProjectsPickerComponent, null)
  );
};

//React component for displaying a toast message
var ToastComponent = function ToastComponent(props) {
  return React.createElement(
    "h2",
    { className: props.classes },
    props.message
  );
};

//React component for displaying the left contact section
var ContactLeftComponent = function ContactLeftComponent(props) {
  return React.createElement(
    "div",
    { id: "contactLeft" },
    React.createElement(
      "span",
      null,
      React.createElement(
        "h1",
        null,
        "Drop a line, let's talk."
      ),
      React.createElement(
        "form",
        { id: "contactForm", name: "contactForm", action: "/submitContact", method: "POST", onSubmit: handleContactSubmit },
        React.createElement("div", { id: "toastSection" }),
        React.createElement("input", { type: "text", id: "name", "class": "contactInput", name: "name", placeholder: "What do people call you?" }),
        React.createElement("input", { type: "text", id: "email", "class": "contactInput", name: "email", placeholder: "Where can I email you back?" }),
        React.createElement("textarea", { id: "body", "class": "contactInput", name: "body", placeholder: "What's goin' on?" }),
        React.createElement("input", { type: "submit", id: "submit", "class": "contactInput", value: "Send it on over!" })
      )
    )
  );
};

//React component for displaying the right contact section
var ContactRightComponent = function ContactRightComponent(props) {
  return React.createElement(
    "div",
    { id: "contactRight" },
    React.createElement(
      "span",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Primitive Telepathy:"
        ),
        React.createElement(
          "p",
          null,
          "781-812-8389"
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Internet Mail:"
        ),
        React.createElement(
          "p",
          null,
          "noahkellem@gmail.com"
        )
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Social Media:"
        ),
        React.createElement(
          "div",
          { id: "socialMedia" },
          React.createElement(
            "a",
            { href: "https://www.facebook.com/noah.kellem", target: "_blank" },
            React.createElement("img", { src: "/assets/images/facebookIcon.png", alt: "Facebook Icon" })
          ),
          React.createElement(
            "a",
            { href: "https://www.linkedin.com/in/noah-kellem-68511ba4/", target: "_blank" },
            React.createElement("img", { src: "/assets/images/linkedinIcon.png", alt: "LinkedIn Icon" })
          ),
          React.createElement(
            "a",
            { href: "https://github.com/nkellem", target: "_blank" },
            React.createElement("img", { src: "/assets/images/githubIcon.png", alt: "GitHub Icon" })
          )
        )
      )
    )
  );
};

//React component for displaying the entire contact section
var ContactSectionComponent = function ContactSectionComponent(props) {
  return React.createElement(
    "div",
    { className: "innerContent", id: "contactContent" },
    React.createElement(ContactLeftComponent, null),
    React.createElement(ContactRightComponent, null)
  );
};

/// SECTION: Methods to render the components

//Method for rendering the nav bar
var renderNavBar = function renderNavBar() {
  ReactDOM.render(React.createElement(NavBarComponent, null), document.querySelector('nav'));
};

//Method for rendering the first section of the site
var renderSplashSectionComponent = function renderSplashSectionComponent() {
  ReactDOM.render(React.createElement(SplashSectionComponent, null), document.querySelector('#splash'));
};

//Method for rendering the about me section
var renderAboutSectionComponent = function renderAboutSectionComponent() {
  ReactDOM.render(React.createElement(AboutSectionComponent, null), document.querySelector('#about'));
};

//Method for rendering just the img and caption
var renderProjectImgAndCaption = function renderProjectImgAndCaption(projIndex) {
  var project = projects[projIndex];

  ReactDOM.render(React.createElement(ProjectImgAndCaption, { imgSrc: project.src, imgAlt: project.alt, projectTitle: project.projTitle, caption: project.projDescription,
    poweredBy: project.projTechnologies, liveSite: project.projSiteLink, github: project.projGithub }), document.querySelector('#projectsContent'));
};

//Method for rendering the projects section
var renderProjectsSection = function renderProjectsSection() {
  ReactDOM.render(React.createElement(ProjectSectionComponent, null), document.querySelector('#projects'));

  renderProjectImgAndCaption(0);
};

//Method for rendering the contact section
var renderContactSectionComponent = function renderContactSectionComponent() {
  ReactDOM.render(React.createElement(ContactSectionComponent, null), document.querySelector('#contact'));
};

//Method for rendering the toast message
var renderToastComponent = function renderToastComponent(message, classes) {
  ReactDOM.render(React.createElement(ToastComponent, { message: message, classes: classes }), document.querySelector('#toastSection'));
};

/// SECTION: App logic
var setup = function setup() {
  renderNavBar();
  renderSplashSectionComponent();
  renderAboutSectionComponent();
  renderProjectsSection();
  renderContactSectionComponent();
  elementIsVisible();
};

setup();
