import React, {Component} from 'react';
import '../Styles/DailyTimeTable.css';

  class DailyTimeTable extends Component{
      constructor(props){
          super(props)
          this.createCells = this.createCells.bind(this);
      }

      createCells(type){  
          let inputFields = [];
            for (var i = 0; i < 8; i++){
                inputFields.push(
                    <div key={i}>
                    <input type={type} />
                    </div>
                );
            }
            return inputFields;
    }

      render(){
          return(
            <div>
            <form id="daily-timetable-label">
                <label>
                     MONDAY
                     <div id="daily-timetable-label-input">
                    {this.createCells('text')}
                    </div>
                </label>
                <label> 
                    TUESDAY
                    <div id="daily-timetable-label-input">
                    {this.createCells('text')}
                    </div>
                </label>
                <label>
                    WEDNESDAY
                    <div id="daily-timetable-label-input">
                    {this.createCells('text')}
                    </div>
                </label>
                <label>
                    THURSDAY
                    <div id="daily-timetable-label-input">
                    {this.createCells('text')}
                    </div>
                </label>
                <label>
                    FRIDAY
                    <div id="daily-timetable-label-input">
                    {this.createCells('text')}
                    </div>
                </label>
                <label>
                    SATURDAY
                    <div id="daily-timetable-label-input">
                    {this.createCells('text')}
                    </div>
                </label>
            </form> 
        <button className="button">Save</button>
        </div>
          );
      }
  }

  export default DailyTimeTable;