import React, { Component } from 'react';
import Login  from './Login';


class Home extends Component{
    render(){
        return(
            <div>
                <Login />
                <h3 className="text-center"> Description of the school and how this portal will be used</h3>
                <hr/>
            </div>
        );
    }
}

export default Home;