import React, {Component} from 'react';
import Login from './Login';


class Results extends Component{
    render(){
        return(
            <div>
                <Login />
                <h3 className="text-center"> Results of all the tests/exams</h3>
                <hr />
            </div>
        );
    }
}
export default Results;