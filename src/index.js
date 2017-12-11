import React from 'react';
import ReactDOM from 'react-dom';
import Callback from './Components/Callback';
import Home from './Views/Home';
import Login from './Views/Login';
import Schools from './Views/Schools';
import AboutUs from './Views/AboutUs';
import SchoolHome from './Views/SchoolHome';
import Myprofile from './Views/Myprofile';
import Results from './Views/Results';
import Timetable from './Views/Timetable';
import Attendance from './Views/Attendance';
import { Router, Route, browserHistory } from 'react-router';
import { requireAuth, logout } from './Utils/AuthService';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <div className="container">
    <Router history={browserHistory} >
            {/* <Route path="/" component={Login} /> */}
            <Route path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/schools" component={Schools} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/callback" component={Myprofile} />
            <Route path="/schoolhome" component={SchoolHome} />
            <Route path="/profile" component={Myprofile} />
            <Route path="/results" component={Results} />
            <Route path="/timetable" component={Timetable} />
            <Route path="/attendance" component={Attendance} />
    </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();