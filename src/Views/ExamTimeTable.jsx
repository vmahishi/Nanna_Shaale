import React, {Component} from 'react';
import '../Styles/ExamTimeTable.css';

  class ExamTimeTable extends Component{
      constructor(props){
          super(props)
          this.createCells = this.createCells.bind(this);
      }

    createCells(){
        let inputFields = [];
        for(var i =0; i< 5; i++){
            inputFields.push(
                <div id="exam-timetable-label-input">
                <input type="Date" placeholder="Date" />
                <input type="text" placeholder="Subject"/>
                </div>
            )
        }
        return inputFields;
    }

      render(){
          return(
            <div>
            <form id="exam-timetable-label">
                <label>
                     I Monthly Test
                    {this.createCells()}  
                </label>
                <label> 
                    II Monthly Test
                    {this.createCells()}
                </label>
                <label>
                    I Unit Test
                    {this.createCells()}
                </label>
                <label>
                    Terminal Exam
                    {this.createCells()}
                </label>
                <label>
                    III Monthly Test
                    {this.createCells()}
                </label>
                <label>
                    IV Monthly Test
                    {this.createCells()}
                </label>
                <label>
                    II Unit Test
                    {this.createCells()}
                </label>
                <label>
                    Final Exam
                    {this.createCells()}
                </label>
            </form> 
         <button className="button">Save</button>
        </div>
          );
      }
  }

  export default ExamTimeTable;
  