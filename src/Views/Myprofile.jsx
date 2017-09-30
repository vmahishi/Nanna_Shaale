import React, {Component} from 'react';
import Login from './Login';
import ImageUpload from './ImageUpload';
import StudentInfo from './StudentInfo';
import ProfileImage from '../Images/placeholder.png'


class Myprofile extends Component{
    render(){
        return(
            <div>
                <Login />
                <img src={ProfileImage} className="profile-image" />
                <ImageUpload />
                <StudentInfo />
            </div>
        );
    }
}
export default Myprofile;
 
