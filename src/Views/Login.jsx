import React, {Component} from 'react';
import '../Styles/App.css';
import logo from '../Images/logo.png';
import {login, logout, isLoggedIn} from '../Utils/AuthService';
import { Link } from 'react-router';
class Login extends Component{
    render(){
        return(
            <nav className="nav">
                <div className="nav-tabs">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2 className="title">Name of the School</h2> 
                </div>
            
                <ul className="nav nav-tabs">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">My Profile</Link>
                    </li>
                    <li>
                        <Link to="/attendance">Attendance</Link>
                    </li>
                    <li>
                        <Link to="/timetable">Time Table</Link>
                    </li>
                    <li>
                        <Link to="/results">Results</Link>
                    </li>
                    <li className="arrange-right">
                {
                    (isLoggedIn()) ? ( <button className="btn-styling" onClick={() => logout()}>Log out </button> ) 
                    : ( <span><button className="btn-styling" onClick={() => login()}>Sign In As School
                        </button><button className="btn-styling" onClick={() => login()}>Sign In As Parent</button> </span>)
                    
                }
            </li>
            </ul>            
        </nav>
        );
    }
}

export default Login;

