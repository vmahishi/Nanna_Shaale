import React, {Component} from 'react';
import '../Styles/ProfilePage.css'
class StudentInfo extends Component{
    render()
    {
        return(
            <div className="table">
                <table>
                    <label id="student-name-label"> Student Name <br/>
                        <input id="student-name-input" type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/> *<br/>
                    </label>
                    <label id="student-name-label"> Parent/Gaurdian Name <br/>
                        <input id="student-name-input" type="text" placeholder="First Name"/>
                        <input id="student-name-input" type="text" placeholder="Last Name"/> *<br/>
                    </label>
                    <label id="student-name-label"> Sibling Studying in the school <br/>
                        <input id="student-name-input" type="text" placeholder="Name"/>
                        <input id="student-name-input" type="text" placeholder="Class"/><br/>
                    </label>
                    <label id="student-name-label"> Date of Birth <br/>
                        <input id="student-name-input" type="date" /> *<br/>
                    </label>
                    <label id="student-name-label"> Class <br/>
                        <input id="student-name-input" type="text" placeholder="ex: 5th Standard"/> *<br/>
                    </label>
                    <label id="student-name-label"> Blood Group<br/>
                        <input id="student-name-input" type="text" placeholder="ex: B+"/> *<br/>
                    </label>
                    <label id="student-name-label"> Postal Address<br/>
                        <input id="student-name-input" type="text" placeholder="House number"/><br/>
                        <input id="student-name-input" type="text" placeholder="Street"/><br/>
                        <input id="student-name-input" type="text" placeholder="Area"/><br/>
                        <input id="student-name-input" type="text" placeholder="Pin Code"/><br/>
                    </label>
                    <label id="student-name-label"> Emergency Contact Number<br/>
                        <input id="student-name-input" type="text" placeholder="1234567890"/> *
                    </label>
                </table>
            <button className="button">Save</button>
            <label id="mandatory-fields"> Fields marked with * are mandatory</label> 
        </div>
        )
    }
}

export default StudentInfo;