import React, {Component} from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router';


class Schools extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="/home">Home</Link>
            <Link className="navbar-brand" href="/schools">Schools</Link>
            <Link className="navbar-brand" href="/aboutus">About Us</Link>
        </nav>
        );
    }
}

export default Schools;