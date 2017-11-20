import React, {Component} from 'react';
import XLSX from 'xlsx';
import ReactFileReader from 'react-file-reader';
 
var allowedFileTypes = ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
 
function fileIsIncorrectFiletype(file){
  if (allowedFileTypes.indexOf(file.type) === -1) {
    return true;
  } else {
    return false;
  }
}
 
class FileImport extends Component {
  constructor() {
    super();
    this.handleFiles = this.handleFiles.bind(this);
    // this.state = {};
    this.state = {value: [], count: 1};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render(){
    return(
      <div>
      <ReactFileReader handleFiles={this.handleFiles}>
        <button className='btn'>Upload</button>
        <table>
          <tbody>
            { this.state.studentList && this.state.studentList.map(student => 
              <tr>
                <td>{student.Roll_Number}</td>
                <td>{student.Name}</td>
                <td>{student.Attendance}</td>
              </tr>
          )}
          </tbody>
        </table>
      </ReactFileReader>

      <form onSubmit={this.handleSubmit}>
                     {this.createUI()}         
                     <input className="button" type='button' value='Add Student' onClick={this.addClick.bind(this)}/> 
                     <input className="button" type="submit" value="Submit" /> 
      </form> 
      </div>
    );
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
  
  handleFiles(files) {
    var reader = new FileReader();
    const self = this;
    reader.onload = (e) => {
        var fileContents = e.target.result;
        var workbook = XLSX.read(fileContents, {
        type: 'binary'
      });
      workbook.SheetNames.forEach((sheetName) => {
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        let studentList = [];
        for(let i =0; i<XL_row_object.length; i++){
            studentList.push({
              Roll_Number: XL_row_object[i].Roll_Number,
              Name: XL_row_object[i].Name,
              Attendance: XL_row_object[i].Attendance
            })
        }
        self.setState({
          studentList
        })
      })
    };
    reader.onerror = function(ex) {
      console.log(ex);
    };
    reader.readAsBinaryString(files[0]);
  };
}

export default FileImport;