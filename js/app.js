/* =================================================
 * Init Variables
 * NOTE: should migrate to an actual DB someday...
 * FOLLOW UP NOTE: SHOULD DO A LOT OF THINGS SUCH AS MOVE EACH COMPONENT TO SEPARATE FILE. IF YOU'RE READING THIS, PLEASE DONT READ ANYMORE.
================================================== */
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var cs_courses = [
  {name: 'Reinforcement Learning', number: 'OMS CS 7642'},
  {name: 'Machine Learning', number: 'OMS CS 7641'},
  {name: 'HCI', number: 'OMS CS 6750'},
  {name: 'Big Data & Health Informatics', number: 'OMS CSE 6250'},
  {name: 'Database Systems', number: 'CS 4750'},
  {name: 'Cloud Computing', number: 'CS 4740'},
  {name: 'Mobile Application Development', number: 'CS 4720'},
  {name: 'Artificial Intelligence', number: 'CS 4710'},
  {name: 'Operating Systems', number: 'CS 4414'},
  {name: 'Big Data and Visual Search', number: 'CS 4501/5501'},
  {name: 'Information Retrieval', number: 'CS 4501/5501'},
  {name: 'Algorithms', number: 'CS 4102'},
  {name: 'Computer Architecture', number: 'CS 3330'},
  {name: 'Advanced Software Developerment', number: 'CS 3240'},
  {name: 'Theory of Computation', number: 'CS 3102'}
];

var online_courses = [
  {name: 'MongoDB University: M101P Course'},
  {name: 'IBM: Introduction to Hadoop'},
  {name: 'Udacity: Deep Learning'},
  {name: 'Udacity: Interactive 3D Graphics'},
  {name: 'Coursera: Programming Mobile Apps for Android Handheld Systems Part I'},
  {name: '<a href="https://www.codecademy.com/sticksword">Completed Codecademy Tracks</a>'}
];

var econ_math_courses = [
  {name: 'Econometric Methods'},
  {name: 'Empirical Finance'},
  {name: 'Theory of Financial Markets'},
  {name: 'Behavioral Finance'},
  {name: 'Intermediate Macro & Microeconomics'},
  {name: 'Probability'},
  {name: 'Statistics'},
  {name: 'Linear Algebra'},
  {name: 'Differential Equations'},
  {name: 'Multivariable Calculus'}
];

var backend = [
  {name: 'Ruby & Rails (my man main right now)'},
  {name: 'Python & Django, Django Rest Framework, Flask, pip, virtualenv, anaconda (second in command)'},
  {name: 'Node & Express, NPM & Yarn'},
  {name: 'Java & Spring, Hibernate, Maven or Pants'},
  {name: 'Databases: MySQL and other relational DBs (I want to try out Cassandra and see what the hype is about), MongoDB, Redis'},
  {name: 'Tools: AWS, Heroku, GCP & Firebase, Bash, Jenkins'},
];

var frontend = [
  {name: 'TypeScript'},
  {name: 'React & Redux/Flux & Webpack'},
  {name: 'Modular CSS l0l'},
  {name: 'Ember (my main man right now)'},
  {name: 'Yarn & NPM'},
  {name: 'fiddled with Three.js and D3'},
  {name: 'tried Bower, Grunt, and Gulp before they died off'},
];

var mobile = [
  {name: 'Swift & iOS & XCode'},
  {name: 'Java & Android & Android Studio'},
  {name: 'React Native'},
  {name: 'I have realized mobile is not for me though.'}
];

var machine_learning = [
  {name: 'Python & numpy, pandas, sklearn, tensorflow, keras, matplotlib'},
  {name: 'Java and Weka/ABIGAIL'},
];

var missions = [
  {name: 'Get to L5 @ Square [ ]'},
  {name: 'Get to L4 @ Square [✔]'},
  {name: 'Become superhuman - for future shooting star wife and kids [ ]'},
  {name: 'Pivot, deploy, and grow Buddy [✔]'},
  {name: 'Finish Masters in CS (still outstanding, ETA 2020) [ ]'},
  {name: 'Backflip (flopped, only did via trampoline) [✔]'},
  {name: 'Play a few piano songs [ ]'},
  {name: 'Sing a song [ ]'},
  {name: 'Have a win rate of 50% in basketball [✔]'},
  {name: 'Kick ass @ Square (half flopped, needed to focus)[✔]'},
  {name: 'Build gaming/dev rig [✔]'},
  {name: 'Explore and Absorb Bae Area [✔]'},
  {name: 'Deploy MVP API [✔]'},
  {name: 'Win a hackathon! [✔]'},
  {name: 'Deploy mini Dropbox product (flopped) [✔]'},
  {name: 'Deploy J, your own nightly journaling assistant (flopped) [✔]'},
];

var games = [
  {name: 'SMASH'},
  {name: 'Mario Kart!!'},
  {name: 'Breath of the Wild'},
  {name: 'Hearthstone'},
  {name: 'Undertale'},
  {name: 'Last of Us'},
  {name: 'Sm4sh'},
  {name: 'Heroes of Newerth'},
  {name: 'Starcraft 2'},
  {name: 'Talos Principle'},
  {name: 'POKEMON GO'},
];

var sports = [
  {name: 'Tennis'},
  {name: 'Basketball'},
  {name: 'eSports :)'},
  {name: 'Ski/Snowboard/Surf'},
  {name: 'ran a mother f**** half marathon (never again)'},
  {name: 'I wanna skydive one day!!'}
];

var movies = [
  {name: 'The Prestige, Cloud Atlas, Coherence'},
  {name: 'I Origins, Dark Knight Trilogy'},
  {name: 'La La Land, Inside Out, Arrival'},
  {name: 'Pulp Fiction, basically all Miyazaki movies'},
  {name: 'Back to the Future Trilogy'},
  {name: 'The Matrix, Ghost in the Shell (anime)'},
  {name: 'Interstellar, Memento'},
  {name: 'The Shining, Clockwork Orange'},
  {name: '3 Idiots, Blade Runner og & 2049'},
  {name: 'ROCKY...'},
  {name: 'probably forgot a bunch...'},
];

var music = [
  {name: 'Chillstep'},
  {name: 'Trance'},
  {name: 'House'},
  {name: 'Trap'},
  {name: 'Techno'},
  {name: 'Piano'},
  {name: 'Game and movie OST\'s'},
  {name: 'R & B'},
  {name: 'Canon in D'},
];

var books = [
  {name: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future'},
  {name: 'Zero to One'},
  {name: 'The Hard Thing About Hard Things'},
  {name: 'The Upstarts'},
  {name: 'The Beginning of Infinity'},
  {name: 'Man\'s Search for Meaning'},
  {name: 'Sapiens, Homo Deus, and soon his third book'},
  {name: 'Tribe of Mentors'},
  {name: "<a href=\"https://www.goodreads.com/user/show/63338558-michael\">Goodreads</a>"}
];

var places = [
  {name: 'South Carolina'},
  {name: 'Georgia'},
  {name: 'Tri-state area'},
  {name: 'Massachusetts'},
  {name: 'Virginia & DC'},
  {name: 'California!!!'},
  {name: 'Seattle & Portland'},
  {name: 'Italy!'},
  {name: 'Hawaii'},
  {name: 'Xi`an, Shanghai, Hangzhou in China'},
  {name: 'Soon: Australia, Japan, South America!?'},
];

var quotes = [
  {name: 'Know your audience.'},
  {name: 'Life is about your slope, not your y-intercept.'},
  {name: 'It is not how hard you hit, but how hard you get hit and keep moving forward.'},
  {name: 'If you give people the opportunity to do the right thing, you will rarely be disappointed'},
  {name: 'If a stranger and I each get on a treadmill, either the stranger steps off first or I am going to die on the treadmill.'},
  {name: 'Sometimes it is the very people who no one imagines anything of who do the things no one can imagine.'},
  {name: 'My life amounts to no more than one drop in a limitless ocean. Yet what is any ocean, but a multitude of drops?'},
  {name: 'Change your thoughts and you change your world.'},
  {name: 'Our lives are not our own. We are bound to others, past and present, and by each crime and every kindness, we birth our future.'},
  {name: 'A longing fulfilled is sweet to the soul :)'},
  {name: 'How lucky I am to have something that makes saying goodbye so hard.'},
  {name: 'Fight.'},
  {name: 'The world you live in tomorrow hinges on what you do today. Every stroke, every dribble, every line of code you write, written into history as the foundation for the future.'},
  {name: 'I\'ll show you how great I am!!'},
  {name: 'Sometimes the people around you won\'t understand your journey. They don\'t need to, it\'s not for them.'}
];

var shows = [
  {name: 'TERRACE HOUSE (Boys & Girls in the City)'},
  {name: 'Game of Thrones'},
  {name: 'Gotham'},
  {name: 'Westworld'},
  {name: 'Ri *hic* Rick & Morty'},
  {name: 'Black Mirror'},
  {name: 'Dragon Ball Super'},
  {name: 'Samurai Jack!!!!'},
  {name: 'Batman'},
  {name: 'Justice League'},
  {name: 'YouTube!!'},
];

var brands = [
  'an explorer.', 'grateful.', 'resilient.', 'one with sadness.', 'a software engineer.', 'teeming with joy.', 'a Square.', 'excited.', 'a believer.', 'a gamer.', 'optimistic.', 'a tennis player.', 'filled with DETERMINATION.', 'an adventurer.', 'unbound.', 'a Musketeer.', 'consistent.', 'a code monkey!!', 'a level 32 Pokemon Go trainer.', 'happy', 'team Valor!'
];

/* =================================================
 * Landing
================================================== */

var PortalBox = React.createClass({
  openLink: function(url) {
    var win = window.open(url, '_blank');
    win.focus();
  },

  y_no_listen: function() {
    alert(`¯\\_(ツ)_/¯`);
  },

  render: function() {
    var result = this.props.portalType == 'dev' ?
      <div className='portalBox'>
        <div onClick={this.props.handleClick}>
          <h3>DEVELOPER JOURNEY</h3>
          <h4>cat /var/log/bugs4days.txt</h4>
          <div>Quick Links</div>
        </div>
        <hr/>
        <div>
          <div className='portalLink' onClick={() => this.openLink('https://www.github.com/sticksword')}>GitHub</div>
          <div className='portalLink' onClick={() => this.openLink('https://www.linkedin.com/in/stoicsleeper')}>LinkedIn</div>
          <div className='portalLink' onClick={() => this.openLink('https://sticksword.github.io/michael_chen_resume.pdf')}>Resume</div>
        </div>
      </div>:
      <div className='portalBox'>
        <div onClick={this.props.handleClick}>
          <h3>PERSONAL JOURNEY</h3>
          <h4>Dear Diary...</h4>
          <div>Quick Links</div>
        </div>
        <hr/>
        <div>
          <div className='portalLink' onClick={() => this.openLink('https://medium.com/@Stoic.Sleeper')}>Medium</div>
          <div className='portalLink' onClick={() => this.openLink('https://www.quora.com/profile/Michael-Chen-168')}>Quora</div>
          <div className='portalLink' onClick={this.y_no_listen}>Do not click!!</div>
        </div>
      </div>;
    return (
      <div>
        {result}
      </div>
    );
  }
});

/* =================================================
 * Dev Window
================================================== */

var DevWindow = React.createClass({
  getInitialState: function() {
    return { panel: 'dev-panel' };
  },

  changePanel: function(panelName) {
    this.setState({ panel: panelName });
  },

  render: function() {
    if (this.state.panel == 'dev-panel') {
      var result =
        <div>
          <div className='linkBox' onClick={() => this.changePanel('courses-taken-panel')}>
            Courses Taken
          </div>
          <div className='linkBox' onClick={() => this.changePanel('online-presence-panel')}>
            Online Interactions
          </div>
          <div className='linkBox' onClick={() => this.changePanel('hackathon-panel')}>
            Hackathons
          </div>
          <div className='linkBox' onClick={() => this.changePanel('skills-panel')}>
            Skills
          </div>
          <button onClick={this.props.handleClick}>Back to Landing</button>
        </div>
    } else if (this.state.panel == 'courses-taken-panel') {
      var result = <CoursesTakenPanel handleClick={this.changePanel}/>;
    } else if (this.state.panel == 'online-presence-panel') {
      var result = <OnlinePresencePanel handleClick={this.changePanel}/>;
    } else if (this.state.panel == 'hackathon-panel') {
      var result = <HackathonPanel handleClick={this.changePanel}/>;
    } else { // skills-panel
      var result = <SkillsPanel handleClick={this.changePanel}/>;
    }
    return (
      <div className='contentWindow'>{result}</div>
    );
  }
});

var CoursesTakenPanel = React.createClass({
  getInitialState: function() {
    return { focused: 0 };
  },

  clicked: function(index) {
    this.setState({focused: index});
  },

  handleChange: function() {
    this.props.handleClick('dev-panel');
  },

  render: function() {
    var self = this;
    var rows = [];

    var second_col = self.state.focused == 0 ? <th>Number</th> : null;
    var course_type = ['CS', 'Econ/Math', 'Online'];
    if (self.state.focused == 0) {
      var courses = cs_courses;
    } else if (self.state.focused == 1) {
      var courses = econ_math_courses;
    } else {
      var courses = online_courses;
    }
    courses.forEach(function(product) {
      rows.push(<CourseRow product={product} key={product.name}/>);
    }.bind(this));
    return (
      <div>
        <h3>Big thank you to the University of Virginia for my dual majors in CS and Finance!</h3>
        <ul>
          {
            course_type.map(function(m, index){
              var style = '';
              if(self.state.focused == index){
                style = 'focused';
              }
              // Notice the use of the bind() method. It makes the
              // index available to the clicked function:
              return <li className={style} key={m} onClick={self.clicked.bind(self, index)}>{m}</li>;
            })
          }
        </ul>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              {second_col}
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <button onClick={this.handleChange}>Back to Developer Window</button>
      </div>
    );
  }
});

var CourseRow = React.createClass({
  render: function() {
    var num = this.props.product.number ? <td>{this.props.product.number}</td> : null;
    return (
      <tr>
        <td>{this.props.product.name}</td>
        {num}
      </tr>
    );
  }
});

var OnlinePresencePanel = React.createClass({
  handleChange: function() {
    this.props.handleClick('dev-panel');
  },

  openLink: function(url) {
    var win = window.open(url, '_blank');
    win.focus();
  },

  render: function() {

    return (
      <div>
        <div className='linkBox' onClick={() => this.openLink('http://stackoverflow.com/users/3903274/sticky')}>
          <img src='http://stackoverflow.com/users/flair/3903274.png?theme=clean' alt='StackOverflow'/>
        </div>
        <div className='linkBox' onClick={() => this.openLink('https://projecteuler.net')}>
          <img src='https://projecteuler.net/profile/sticksword.png' alt='ProjectEuler'/>
        </div>
        <div className='linkBox' onClick={() => this.openLink('https://leetcode.com/sticksword/')}>
          <img alt='L33tCode'/>
        </div>
        <div className='linkBox' onClick={() => this.openLink('https://www.hackerrank.com/sticksword')}>
          <img src='https://editoreye-uploads.s3.amazonaws.com/1284272/hackerrank.png' alt='HackerRank'/>
        </div>
        <button onClick={this.handleChange}>Back to Developer Window</button>
      </div>
    );
  }
});

var HackathonPanel = React.createClass({
  handleChange: function() {
    this.props.handleClick('dev-panel');
  },

  render: function() {

    return (
      <div>
        <p>
          I am a hackathon enthusiast.
          You can find some of my past projects on <a href='http://devpost.com/leeroychenkins'>Devpost</a>.
          Below are some that I have participated in. You should check one out sometime. Swag on swag on swag!!
        </p>
        <ul>
          <li>Hack.UVA (past winner and mentor)</li>
          <li>Ramhacks (past winner)</li>
          <li>PennApps</li>
          <li>HackMIT</li>
          <li>JP Morgan Code for Good</li>
          <li>HackDuke (past finalist)</li>
          <li>HackPrinceton</li>
          <li><a href="http://www.hackathon.io/to-be3">Febreze AngelHacks (submission)</a></li>
          <li><a href="https://vimeo.com/271041279">Febreze AngelHack (winning demo)</a></li>
          <li>UVA Datafest</li>
          <li>HackVT</li>
          <li>Hack the North</li>
          <li><a href="https://2017.spaceappschallenge.org/challenges/our-ecological-neighborhood/our-planet-our-home/teams/far-east-farmers/project">SpaceApps Global Nominee</a></li>
          <li>TreeHacks</li>
        </ul>
        <button onClick={this.handleChange}>Back to Developer Window</button>
      </div>
    );
  }
});

var SkillsPanel = React.createClass({
  getInitialState: function() {
    return { focused: 0 };
  },

  clicked: function(index) {
    this.setState({focused: index});
  },

  handleChange: function() {
    this.props.handleClick('dev-panel');
  },

  render: function() {
    var self = this;
    var rows = [];

    var skill_type = ['Backend', 'Frontend', 'Mobile', 'Machine Learning'];
    if (self.state.focused == 0) {
      var skills = backend;
    } else if (self.state.focused == 1) {
      var skills = frontend;
    } else if (self.state.focused == 2) {
      var skills = mobile;
    } else {
      var skills = machine_learning;
    }
    skills.forEach(function(product) {
      rows.push(<SkillRow product={product} key={product.name}/>);
    }.bind(this));

    return (
      <div>
        <ul>
          {
            skill_type.map(function(m, index){
              var style = '';
              if(self.state.focused == index){
                style = 'focused';
              }
              // Notice the use of the bind() method. It makes the
              // index available to the clicked function:
              return <li className={style} key={m} onClick={self.clicked.bind(self, index)}>{m}</li>;
            })
          }
        </ul>
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <button onClick={this.handleChange}>Back to Developer Window</button>
      </div>
    );
  }
});

var SkillRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.product.name}</td>
      </tr>
    );
  }
});

/* =================================================
 * Personal Window
================================================== */

var PersonalWindow = React.createClass({
  getInitialState: function() {
    return { panel: 'main-panel' };
  },

  changePanel: function(panelName) {
    this.setState({ panel: panelName });
  },

  render: function() {
    switch (this.state.panel) {
      case 'mission-panel':
        var result = <CategoryListPanel handleClick={this.changePanel} categoryList={missions}/>;
        break;
      case 'gaming-panel':
        var result = <CategoryListPanel handleClick={this.changePanel} categoryList={games} link={''}/>;
        break;
      case 'sports-panel':
        var result = <CategoryListPanel handleClick={this.changePanel} categoryList={sports}/>;
        break;
      case 'movies-panel':
        var result = <CategoryListPanel handleClick={this.changePanel} categoryList={movies}/>;
        break;
      case 'music-panel':
        var result = <CategoryListPanel handleClick={this.changePanel} categoryList={music}/>;
        break;
      case 'books-panel':
        var result = <CategoryListPanel handleClick={this.changePanel} categoryList={books}/>;
        break;
      case 'places-panel':
        var result = <CategoryListPanel handleClick={this.changePanel} categoryList={places}/>;
        break;
      case 'quotes-panel':
        var result = <CategoryListPanel handleClick={this.changePanel} categoryList={quotes}/>;
        break;
      case 'shows-panel':
        var result = <CategoryListPanel handleClick={this.changePanel} categoryList={shows}/>;
        break;
      default:
        var result =
          <div>
            <div className='personalLinkBox' onClick={() => this.changePanel('mission-panel')}>
              Missions & Goals
            </div>
            <div className='personalLinkBox' onClick={() => this.changePanel('gaming-panel')}>
              Gaming
            </div>
            <div className='personalLinkBox' onClick={() => this.changePanel('sports-panel')}>
              Sports
            </div>
            <div className='personalLinkBox' onClick={() => this.changePanel('movies-panel')}>
              Movies
            </div>
            <div className='personalLinkBox' onClick={() => this.changePanel('music-panel')}>
              Music
            </div>
            <div className='personalLinkBox' onClick={() => this.changePanel('books-panel')}>
              Books
            </div>
            <div className='personalLinkBox' onClick={() => this.changePanel('places-panel')}>
              Places
            </div>
            <div className='personalLinkBox' onClick={() => this.changePanel('quotes-panel')}>
              Quotes
            </div>
            <div className='personalLinkBox' onClick={() => this.changePanel('shows-panel')}>
              Shows
            </div>
            <button onClick={this.props.handleClick}>Back to Landing</button>
          </div>;
    }
    return (
      <div className='contentWindow'>
        {result}
      </div>
    );
  }
});

var CategoryListPanel = React.createClass({
  handleChange: function() {
    this.props.handleClick('main-panel');
  },

  render: function() {
    var rows = [];
    this.props.categoryList.forEach(function(product) {
      rows.push(<CategoryListRow product={product} key={product.name} />);
    }.bind(this));
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <button onClick={this.handleChange}>Back to Personal Journey Overview</button>
      </div>
    );
  }
});

var CategoryListRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.product.name}</td>
      </tr>
    );
  }
});

/* =================================================
 * Greetings
================================================== */

var Greetings = React.createClass({
  getInitialState: function() {
    return { selection: 0 };
  },

  componentDidMount: function() { // called by React when component is rendered
    this.timer = setInterval(this.tick, 1500);
  },

  componentWillUnmount: function() { // called by React when component is removed
    clearInterval(this.timer);
  },

  tick: function() {
    // this.setState({selection: Math.floor(Math.random() * (this.props.brands.length))});
    if (this.state.selection + 1 < this.props.brands.length) {
      this.setState({selection: this.state.selection + 1});
    } else {
      this.setState({selection: 0});
    }
  },

  render: function() {

    return (
      <div>
        <h2>Hi, my name is Michael.</h2>
        <h5>I am {this.props.brands[this.state.selection]}</h5>
      </div>
    );
  }
});

/* =================================================
 * Footer
================================================== */

var Footer = React.createClass({
  render: function() {

    return (
      <div>
        <h5>Crafted with &hearts;</h5>
        <h6>Built with React</h6>
      </div>
    );
  }
});

/* =================================================
 * Main app
================================================== */

var App = React.createClass({
  getInitialState: function() {
    return {
      window: 'main-window',
      herp: '',
      derp: false
    };
  },

  handleUserInput: function(herp, derp) {
    this.setState({
      herp: herp,
      derp: derp
    });
  },

  changeToMain: function() {
    this.setState({
      window: 'main-window'
    });
  },

  changeToDev: function() {
    this.setState({
      window: 'dev-window'
    });
  },

  changeToPersonal: function() {
    this.setState({
      window: 'personal-window'
    });
  },

  render: function() {
    if (this.state.window == 'main-window') {
      var result =
        <div key={'main'} className='contentWindow'>
          <PortalBox portalType={'dev'} handleClick={this.changeToDev}/>
          <PortalBox portalType={'personal'} handleClick={this.changeToPersonal}/>
        </div>;
    } else if (this.state.window == 'dev-window') {
      var result = <DevWindow key={'dev'} handleClick={this.changeToMain}/>;
    } else {
      var result = <PersonalWindow key={'personal'} handleClick={this.changeToMain}/>;
    }
    return (
      <div>
        <Greetings brands={this.props.brands}/>
          {result}
        <Footer/>
      </div>
    );
  }
});

ReactDOM.render(<App brands={brands} />, document.getElementById('content'));
