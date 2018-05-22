/// SECTION: React components

//React component for the Nav bar
const NavBarComponent = props => {
  return (
    <span>
      <a href="#about" className="navLink" id="navAbout" onClick={handleNavClicks}>About Me</a>
      <a href="#projects" className="navLink" id="navProjects" onClick={handleNavClicks}>Projects</a>
      <a href="#contact" className="navLink" id="navContact" onClick={handleNavClicks}>Contact</a>
      <a href="/assets/documents/KellemNoah_Resume.pdf" target="_blank" className="navLink" id="navResume">Resume</a>
    </span>
  );
};

//React component for the left side of the first section
const SplashLeftComponent = props => {
  return (
    <div id="splashLeft">
      <span>
        <h1 className="animated fadeInUp">Noah Kellem</h1>
        <h2 className="animated fadeInUp">Front-End Web and Node.js Developer.</h2>
        <h2 className="animated fadeInUp">Proud proponent of all things Breakfast.</h2>
      </span>
    </div>
  );
};

//React component for the right side of the first section
const SplashRightComponent = props => {
  return (
    <div id="splashRight">
      <img id="portrait" src="/assets/images/portrait.png" alt="Picture of Noah Kelem" />
    </div>
  );
};

//React component for displaying the whole first section
const SplashSectionComponent = props => {
  return (
    <div>
      <SplashLeftComponent />
      <SplashRightComponent />
    </div>
  );
};

//React component for displaying the left side of the about me section
const AboutLeftComponent = props => {
  return (
    <div id="aboutLeft">
      <img id="polaroid" src="/assets/images/polaroid.png" alt="polaroid picture" />
    </div>
  );
};

//React component for displaying the right side of the about me section
const AboutRightComponent = props => {
  return (
    <div id="aboutRight">
      <span>
        <h1 id="aboutFirstHeader">What do you do?</h1>
        <p>
        I specialize in Front-End Web Development in conjunction with a Node.js Back-End Environment.
        </p>
        <h1 id="aboutSecondHeader">What about in your free time?</h1>
        <p>
        When I'm not coding you can find me at the local rock climbing gym or writing music in my basement.
        If you're at all curious, check out my <a href="https://noahkellem.bandcamp.com/releases" target="_blank">solo project</a> or
        my old <a href="https://apollo111.bandcamp.com/album/moon-landings-wild-things" target="_blank">folk band</a> on Bandcamp.
        </p>
        <h1 id="aboutThirdHeader">What have you been up to recently?</h1>
        <p>
        Currently working as a Software Developer Intern over at Charles River Analytics.
        </p>
      </span>
    </div>
  );
};

//React component for displaying the whole about me section
const AboutSectionComponent = props => {
  return (
    <div className="innerContent">
      <AboutLeftComponent />
      <AboutRightComponent />
    </div>
  );
};

//React component for displaying a toast message
const ToastComponent = props => {
  return (
    <h2 className={props.classes}>{props.message}</h2>
  );
};

//React component for displaying the left contact section
const ContactLeftComponent = props => {
  return (
    <div id="contactLeft">
      <span>
        <h1>Drop a line, let's talk.</h1>
        <form id="contactForm" name="contactForm" action="/submitContact" method="POST" onSubmit={handleContactSubmit}>
          <div id="toastSection"></div>
          <input type="text" id="name" class="contactInput" name="name" placeholder="What do people call you?" />
          <input type="text" id="email" class="contactInput" name="email" placeholder="Where can I email you back?" />
          <textarea id="body" class="contactInput" name="body" placeholder="What's goin' on?" />
          <input type="submit" id="submit" class="contactInput" value="Send it on over!" />
        </form>
      </span>
    </div>
  );
};

//React component for displaying the right contact section
const ContactRightComponent = props => {
  return (
    <div id="contactRight">
      <span>
        <h3>Primitive Telepathy:</h3>
        <p>781-812-8389</p>
        <h3>Internet Mail:</h3>
        <p>noahkellem@gmail.com</p>
        <h3>Social Media:</h3>
        <div id="socialMedia">
          <a href="https://www.facebook.com/noah.kellem" target="_blank">
          <img src="/assets/images/facebookIcon.png" alt="Facebook Icon" />
          </a>
          <a href="https://www.linkedin.com/in/noah-kellem-68511ba4/" target="_blank">
          <img src="/assets/images/linkedinIcon.png" alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/nkellem" target="_blank">
          <img src="/assets/images/githubIcon.png" alt="GitHub Icon" />
          </a>
        </div>
      </span>
    </div>
  );
};

//React component for displaying the entire contact section
const ContactSectionComponent = props => {
  return (
    <div className="innerContent" id="contactContent">
      <ContactLeftComponent />
      <ContactRightComponent />
    </div>
  );
};

/// SECTION: Methods to render the components

//Method for rendering the nav bar
const renderNavBar = () => {
  ReactDOM.render(
    <NavBarComponent />,
    document.querySelector('nav')
  );
};

//Method for rendering the first section of the site
const renderSplashSectionComponent = () => {
  ReactDOM.render(
    <SplashSectionComponent />,
    document.querySelector('#splash')
  );
};

//Method for rendering the about me section
const renderAboutSectionComponent = () => {
  ReactDOM.render(
    <AboutSectionComponent />,
    document.querySelector('#about')
  );
};

//Method for rendering the contact section
const renderContactSectionComponent = () => {
  ReactDOM.render(
    <ContactSectionComponent />,
    document.querySelector('#contact')
  );
};

//Method for rendering the toast message
const renderToastComponent = (message, classes) => {
  ReactDOM.render(
    <ToastComponent message={message} classes={classes} />,
    document.querySelector('#toastSection')
  );
};

/// SECTION: Events and other app logic
const borderMap = new Map();
borderMap.set('#about', 'var(--custom-red)');
borderMap.set('#projects', 'var(--custom-purple)');
borderMap.set('#contact', 'var(--custom-green)');

const setup = () => {
  renderNavBar();
  renderSplashSectionComponent();
  renderAboutSectionComponent();
  renderContactSectionComponent();
  elementIsVisible();
};

// TODO:: Decide if I want to keep this or not
const handleNavClicks = e => {
}

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
      document.querySelector('.toast').style.display = 'none';
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

setup();
