/// SECTION: React components

//React component for the Nav bar
const NavBarComponent = props => {
  return (
    <span>
      <a href="#about" className="navLink" id="navAbout" onClick={handleNavClicks}>About Me</a>
      <a href="#projects" className="navLink" id="navProjects" onClick={handleNavClicks}>Projects</a>
      <a href="#contact" className="navLink" id="navContact" onClick={handleNavClicks}>Contact</a>
      <a href="/assets/documents/KellemNoah_Resume.pdf" target="_blank" className="navLink" id="navResume">Résumé</a>
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
        I am currently working as a Software Developer Intern over at Charles River Analytics.
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

//React component for displaying the projects image section
const ProjectsImgComponent = props => {
  return (
    <span id="projectsImg">
      <img src={props.imgSrc} alt={props.imgAlt} />
    </span>
  );
};

//React component for displaying the projects caption section
const ProjectsCaptionComponent = props => {
  return (
    <span id="projectsCaption">
      <span>
        <h3>{props.projectTitle}</h3>
        <p>{props.caption}</p>
        <p>{props.poweredBy}</p>
        <p><a href={props.liveSite} target="_blank">View This Project</a></p>
        <p><a href={props.github} target="_blank">Check Out The Code on GitHub</a></p>
      </span>
    </span>
  );
};

//React component for rendering the image and the caption together
const ProjectImgAndCaption = props => {
  return (
    <div className="animated">
      <ProjectsImgComponent imgSrc={props.imgSrc} imgAlt={props.imgAlt} />
      <ProjectsCaptionComponent projectTitle={props.projectTitle} caption={props.caption}
       poweredBy={props.poweredBy} liveSite={props.liveSite} github={props.github} />
    </div>
  );
};

//React component for displaying the project picker
const ProjectsPickerComponent = props => {
  let pickerParts = [];
  let index = 0;

  projects.forEach(project => {
    if (index === 0) {
      pickerParts.push(<span className='circle projActive' value={index} onClick={handleProjectClick}></span>);
    } else {
      pickerParts.push(<span className='circle' value={index} onClick={handleProjectClick}></span>);
    }

    index++;
  });

  return (
    <div id="projectsPicker">
      {pickerParts}
    </div>
  );
};

//React component for displaying the entire project section
const ProjectSectionComponent = props => {
  return (
    <div id="projectsSection">
      <div id="projectsContent">
      </div>
      <ProjectsPickerComponent />
    </div>
  )
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
        <div>
          <h3>Primitive Telepathy:</h3>
          <p>781-812-8389</p>
        </div>
        <div>
          <h3>Internet Mail:</h3>
          <p>noahkellem@gmail.com</p>
        </div>
        <div>
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

//Method for rendering just the img and caption
const renderProjectImgAndCaption = projIndex => {
  const project = projects[projIndex];

  ReactDOM.render(
    <ProjectImgAndCaption imgSrc={project.src} imgAlt={project.alt} projectTitle={project.projTitle} caption={project.projDescription}
     poweredBy={project.projTechnologies} liveSite={project.projSiteLink} github={project.projGithub} />,
    document.querySelector('#projectsContent')
  );
};

//Method for rendering the projects section
const renderProjectsSection = () => {
  ReactDOM.render(
    <ProjectSectionComponent />,
    document.querySelector('#projects')
  );

  renderProjectImgAndCaption(0);
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

/// SECTION: App logic
const setup = () => {
  renderNavBar();
  renderSplashSectionComponent();
  renderAboutSectionComponent();
  renderProjectsSection();
  renderContactSectionComponent();
  elementIsVisible();
};

setup();
