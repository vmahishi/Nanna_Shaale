import React, {Component} from 'react';
import Checkbox from 'react-checkbox';
import Login from './Login';
import '../Styles/Attendance.css'


class Attendance extends Component{
    constructor(props) {
        super(props);
        this.state = {value: [], count: 1};
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(i, event) {
         let value = this.state.value.slice();
         value[i] = event.target.value;
         this.setState({value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
      
      addClick(){
        this.setState({count: this.state.count+1})
      }
      
      removeClick(i){
         let value = this.state.value.slice();
         value.splice(i,1);
         this.setState({
            count: this.state.count - 1,
            value
         })
      }
      
      createUI(){
         let uiItems = [];
         for(let i = 0; i < this.state.count; i++){
               uiItems.push(
                   <div key={i}>
                       <input type="text" value={this.state.value[i] || ''} onChange={this.handleChange.bind(this,i)} />
                       <input className="button" type='button' value='Remove Student' onClick={this.removeClick.bind(this,i)}/>
                       <input id="checkbox" type="checkbox" />
                   </div>
                )
         }
         return uiItems || null;
      }
    render(){
        var checked = null;
        return(
            <div>
                <Login />
                <h3 className="text-center"> Attendance sheet for the student</h3>
                <span className="heading">
                    <label id="heading-font"> Name of the Student</label>
                    <label id="heading-font"> Attendance </label>
                    <input type="date" />
                </span>
                <form onSubmit={this.handleSubmit}>
                    {this.createUI()}        
                    <input className="button" type='button' value='Add Student' onClick={this.addClick.bind(this)}/>
                    <input className="button" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
export default Attendance;