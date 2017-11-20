import React ,{Component}from 'react';
import '../Styles/ProfilePage.css';
import Dropzone from 'react-dropzone';

class ImageUpload extends Component {
render() {
    return (
     <div className="set-width">
      <Dropzone className="image-upload">
               <button className="button">Choose File</button>
          </Dropzone>
          <button className="button">Upload</button>
     </div>
     )
 }
}
export default ImageUpload;