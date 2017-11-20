import React, {Component} from 'react';
import Login from './Login';
import FileImport from './FileImport'
import '../Styles/Attendance.css'

class Attendance extends Component{
    render(){
        var checked = null;
        return(
            <div>
                <Login />
                <h3 className="text-center"> Attendance sheet for the student</h3>
                <span className="heading">
                <label id="heading-font"> Roll Number</label>
                    <label id="heading-font"> Name of the Student</label>
                    <label id="heading-font"> Attendance </label>
                    <input type="date" />
                </span>
                <FileImport />
                
            </div>
        );
    }
}
export default Attendance;