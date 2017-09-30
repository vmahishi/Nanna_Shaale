import React, {Component} from 'react';
import '../Styles/DailyTimeTable.css';

  class DailyTimeTable extends Component{
      constructor(props){
          super(props)
          this.createCells = this.createCells.bind(this);
      }

      createCells(){  
        return(
        <div id="daily-timetable-label-input">
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
        </div>
        );
    }

      render(){
          return(
            <div>
            <form id="daily-timetable-label">
                <label>
                     MONDAY
                    {this.createCells()}
                </label>
                <label> 
                    TUESDAY
                    {this.createCells()}
                </label>
                <label>
                    WEDNESDAY
                    {this.createCells()}
                </label>
                <label>
                    THURSDAY
                    {this.createCells()}
                </label>
                <label>
                    FRIDAY
                    {this.createCells()}
                </label>
                <label>
                    SATURDAY
                    {this.createCells()}
                </label>
            </form> 
        <button className="button">Save</button>
        </div>
          );
      }
  }

  export default DailyTimeTable;