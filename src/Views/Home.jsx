import React, { Component } from 'react';
import logo from '../Images/logo.png';
import { Link } from 'react-router';
import '../Styles/Home.css'


class Home extends Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <img src={logo} className="brand-logo"/>
                    <Link className="navbar-brand" href="/home">Home</Link>
                    <Link className="navbar-brand" href="/schools">Schools</Link>
                    <Link className="navbar-brand" href="/aboutus">About Us</Link>
                </nav>
                <div className="welcome">
                            <h2>Welcome to the Home of School Communications</h2> 
                </div>

                <form className="search-field">
                    <input class="form-control" type="text" placeholder="Search" />
                    <button class="btn btn-secondary" type="submit">Search</button>
                </form>
            </div>
        );
    }
}
// my-2 my-lg-0
// mr-sm-2
// my-2 my-sm-0

export default Home;