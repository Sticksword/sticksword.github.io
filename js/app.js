/* =================================================
 * Init Variables
 * NOTE: should migrate to an actual DB someday...
================================================== */
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var cs_courses = [
  {name: 'Database Systems', number: 'CS 4750'},
  {name: 'Cloud Computing', number: 'CS 4740'},
  {name: 'Mobile Application Development', number: 'CS 4720'},
  {name: 'Artificial Intelligence', number: 'CS 4710'},
  {name: 'Operating Systems', number: 'CS 4414'},
  {name: 'Big Data and Visual Search', number: '4501/5501'},
  {name: 'Information Retrieval', number: '4501/5501'},
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
  {name: 'Codecademy.com/sticksword'}
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

var missions = [
  {name: 'Build gaming/dev rig'},
  {name: 'Get Masters in CS'},
  {name: 'Explore and Absorb Bae Area'},
  {name: 'Wrap up front-end explorations'},
  {name: 'Deploy MVP Django API'},
  {name: 'Learn more Spring!'},
];

var games = [
  {name: 'Hearthstone'},
  {name: 'Undertale'},
  {name: 'HoN'},
  {name: 'Starcraft 2'},
  {name: 'Talos Principle'},
  {name: ''},
];

var sports = [
  {name: 'Tennis'},
  {name: 'Basketball'},
  {name: ''},
];

var movies = [
  {name: 'The Prestige'},
  {name: 'Cloud Atlas'},
  {name: ''},
];

var music = [
  {name: 'Chillstep'},
  {name: 'Trance'},
  {name: 'House'},
  {name: 'Trap'},
  {name: 'R & B'},
];

var books = [
  {name: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future'},
  {name: 'How Google Works'},
  {name: 'Zero to One'},
  {name: 'The Startup of You'},
  {name: ''},
];

var places = [
  {name: 'South Carolina'},
  {name: 'Georgia'},
  {name: 'New York'},
  {name: 'Massachusetts'},
  {name: 'Virginia'},
  {name: 'California'},
  {name: 'China'},
];

var quotes = [
  {name: 'Life is about your slope, not your y-intercept.'},
  {name: 'It is not how hard you hit, but how hard you get hit and keep moving forward.'},
  {name: 'If you give people the opportunity to do the right thing, you will rarely be disappointed'},
  {name: ''},
];

var shows = [
  {name: 'Game of Thrones'},
  {name: 'Batman'},
  {name: 'Justice League'},
  {name: ''},
];

var brands = [
  'a developer', 'happy', 'a gamer', 'optimistic', 'a tennis player', 'jolly', 'an adventurer', 'unbound'
];

/* =================================================
 * Landing
================================================== */

var PortalBox = React.createClass({
  render: function() {
    var result = this.props.portalType == 'dev' ?
      <div className='portalBox'>
        <h3>DEVELOPER JOURNEY</h3>
        <h4>cat /var/log/bugs4days.txt</h4>
        <div>Quick Links</div>
        <br/>
        <div>
          <div className='portalLink'>GitHub</div>
          <div className='portalLink'>LinkedIn</div>
          <div className='portalLink'>Resume</div>
        </div>
      </div>:
      <div className='portalBox'>
        <h3>PERSONAL JOURNEY</h3>
        <h4>cat /var/log/life.txt</h4>
        <div>Quick Links</div>
        <br/>
        <div>
          <div className='portalLink'>Medium</div>
          <div className='portalLink'>Quora</div>
        </div>
      </div>;
    return (
      <div onClick={this.props.handleClick}>
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
            <br/>Courses Taken
          </div>
          <div className='linkBox' onClick={() => this.changePanel('online-presence-panel')}>
            <br/>Online Interactions
          </div>
          <div className='linkBox' onClick={() => this.changePanel('hackathon-panel')}>
            <br/>Hackathons
          </div>
          <div className='linkBox' onClick={() => this.changePanel('skills-panel')}>
            <br/>Skills
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
  handleChange: function() {
    this.props.handleClick('dev-panel');
  },

  render: function() {
    var cs_rows = [];
    cs_courses.forEach(function(product) {
      cs_rows.push(<CourseRow product={product} key={product.name}/>);
    }.bind(this));
    return (
      <div>
        <h3>Big thank you to the University of Virginia for my dual majors in CS and Finance!</h3>
        <table>
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>{cs_rows}</tbody>
        </table>
        <button onClick={this.handleChange}>Back to Developer Window</button>
      </div>
    );
  }
});

var CourseRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.number}</td>
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
          I have participated in many, ranging from HackMIT to BitCamp to a hackathon hosted by JP Morgan.
          You should check one out sometime. Swag on swag on swag!!
        </p>
        <button onClick={this.handleChange}>Back to Developer Window</button>
      </div>
    );
  }
});

var SkillsPanel = React.createClass({
  handleChange: function() {
    this.props.handleClick('dev-panel');
  },

  render: function() {
    
    return (
      <div>
        <div>
          TODO: set up frontend, backend, mobile, data science tabs
        </div>
        <button onClick={this.handleChange}>Back to Developer Window</button>
      </div>
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
        var result = <CategoryListPanel handleClick={this.changePanel} categoryList={games}/>;
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
        <h5>I am {this.props.brands[this.state.selection]}.</h5>
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
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
          {result}
        </ReactCSSTransitionGroup>
        <Footer/>
      </div>
    );
  }
});

ReactDOM.render(<App brands={brands} />, document.getElementById('content'));
