import React from "react";
// import Slider from '@material-ui/core/Slider'
// import Cropper from 'react-easy-crop'
import "./Skills.css";

class Skills extends React.Component {
  // state = {
  //   imageSrc:
  //     'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000',
  //   crop: { x: 0, y: 0 },
  //   zoom: 1,
  //   aspect: 4 / 3,
  // }

  // onCropChange = (crop) => {
  //   this.setState({ crop })
  // }

  // onCropComplete = (croppedArea, croppedAreaPixels) => {
  //   console.log(croppedArea, croppedAreaPixels)
  // }

  // onZoomChange = (zoom) => {
  //   this.setState({ zoom })
  // }

  render() {
    return (
      <div className="App">
        {/* <div className="crop-container">
          <Cropper
            image={this.state.imageSrc}
            crop={this.state.crop}
            zoom={this.state.zoom}
            aspect={this.state.aspect}
            onCropChange={this.onCropChange}
            onCropComplete={this.onCropComplete}
            onZoomChange={this.onZoomChange}
          />
        </div>
        <div className="controls">
          <Slider
            value={this.state.zoom}
            min={1}
            max={3}
            step={0.1}
            aria-labelledby="Zoom"
            onChange={(e, zoom) => this.onZoomChange(zoom)}
            classes={{ container: 'slider' }}
          />
        </div> */}
      </div>
    );
  }
}
export default Skills;
