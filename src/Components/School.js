import React, {Component} from 'react';
import {SideMenu} from 'react-sidemenu';
import ReactDom from 'react-dom';
import Login from './Login';


const items = [
    {divider: true, label: 'Main navigation', value: 'main-nav'},
    {label: 'Time Table', value: 'timeTable', icon: 'fa-search'},
    {label: 'Attendance', value: 'attendance', icon: 'fa-automobile'},
    
];


class School extends Component{
    render(){
        return(
            <div>
                <Login />
                <h3 className="text-center"> Description of this product</h3>
                <hr />
                <SideMenu items={items} />
            </div>
        );
    }
}
export default School;