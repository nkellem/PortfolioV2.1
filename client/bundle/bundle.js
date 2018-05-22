"use strict";

/// SECTION: React components

//React component for the Nav bar
var NavBarComponent = function NavBarComponent(props) {
  return React.createElement(
    "span",
    null,
    React.createElement(
      "a",
      { href: "#about", className: "navLink", id: "navAbout", onClick: handleNavClicks },
      "About Me"
    ),
    React.createElement(
      "a",
      { href: "#projects", className: "navLink", id: "navProjects", onClick: handleNavClicks },
      "Projects"
    ),
    React.createElement(
      "a",
      { href: "#contact", className: "navLink", id: "navContact", onClick: handleNavClicks },
      "Contact"
    ),
    React.createElement(
      "a",
      { href: "/assets/documents/KellemNoah_Resume.pdf", target: "_blank", className: "navLink", id: "navResume" },
      "Resume"
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
        "Currently working as a Software Developer Intern over at Charles River Analytics."
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
        "h3",
        null,
        "Primitive Telepathy:"
      ),
      React.createElement(
        "p",
        null,
        "781-812-8389"
      ),
      React.createElement(
        "h3",
        null,
        "Internet Mail:"
      ),
      React.createElement(
        "p",
        null,
        "noahkellem@gmail.com"
      ),
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

//Method for rendering the contact section
var renderContactSectionComponent = function renderContactSectionComponent() {
  ReactDOM.render(React.createElement(ContactSectionComponent, null), document.querySelector('#contact'));
};

//Method for rendering the toast message
var renderToastComponent = function renderToastComponent(message, classes) {
  ReactDOM.render(React.createElement(ToastComponent, { message: message, classes: classes }), document.querySelector('#toastSection'));
};

/// SECTION: Events and other app logic
var borderMap = new Map();
borderMap.set('#about', 'var(--custom-red)');
borderMap.set('#projects', 'var(--custom-purple)');
borderMap.set('#contact', 'var(--custom-green)');

var setup = function setup() {
  renderNavBar();
  renderSplashSectionComponent();
  renderAboutSectionComponent();
  renderContactSectionComponent();
  elementIsVisible();
};

// TODO:: Decide if I want to keep this or not
var handleNavClicks = function handleNavClicks(e) {};

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
      document.querySelector('.toast').style.display = 'none';
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

setup();
