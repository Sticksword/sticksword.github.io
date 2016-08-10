/* =================================================
 * Landing
================================================== */

var PortalBox = React.createClass({
  render: function() {
    var result = this.props.portalType == 'dev' ?
      <div className='portalBox'>
        <h3>DEVELOPER JOURNEY</h3>
        <h5>cat /var/log/bugs4days.txt</h5>
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
        <h5>cat /var/log/life.txt</h5>
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
  render: function() {
    
    return (
      <div className='contentWindow'>
        <svg width='400' height='400'>
          <circle r='100' cx='200' cy='200'/>
        </svg>
        <button onClick={this.props.handleClick}>Back to Landing</button>
      </div>
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
        <div className='contentWindow'>
          <PortalBox portalType={'dev'} handleClick={this.changeToDev}/>
          <PortalBox portalType={'personal'} handleClick={this.changeToPersonal}/>
        </div>;
    } else if (this.state.window == 'dev-window') {
      var result = <DevWindow handleClick={this.changeToMain}/>;
    } else { // personal-window
      var result = <PersonalWindow handleClick={this.changeToMain}/>;
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

var brands = [
  'a developer', 'happy', 'a gamer', 'optimistic', 'a tennis player', 'jolly', 'an adventurer', 'unbound'
];

ReactDOM.render(
  <App brands={brands} />,
  document.getElementById('content')
);