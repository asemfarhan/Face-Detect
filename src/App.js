import React from 'react';
import './App.css';
import 'tachyons'; 
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import Bg from './components/bg/bg';
import ImageForm from './components/ImageForm/ImageForm';
import FaceDe from './components/Face/Face';
import Clarifai from 'clarifai';
import { log } from 'util';

const app = new Clarifai.App({ apiKey: '616e6781b3e543b7b0e2a98f8b7e25c2'});
 
class  App extends React.Component { 
constructor(){
    super();
    this.state = {
      inputText : '' ,
      imageUrl : 'http://www.akidslearningexperience.com/image/116218912.png',
      faceBox :{}
      // 
    }}

calculateFaceLocation= (data)=>{
  console.log('response', data.outputs[0].data.regions[0].region_info.bounding_box);
  const clar  = data.outputs[0].data.regions[0].region_info.bounding_box;
  const image = document.getElementById('inputImage')
  const width = Number(image.width);
  const height = Number(image.height);
  this.setState({faceBox : {
        left_col: clar.left_col * width ,
        top_row: clar.top_row * height ,
        right_col: width - (clar.right_col * width) ,
        bottom_row: height -(clar.bottom_row * height) 
  }})}

setFaceBox = (box) =>{
  this.setState({faceBox : box})
}
onChangeInputText = (event) => {
  this.setState({inputText: event.target.value});
}

onClickDetect = () => {
  if (this.state.inputText){
   this.setState({imageUrl : this.state.inputText});
    console.log("if-inputText",this.state.inputText);
  }
   else {    this.setState({inputText : this.state.imageUrl});
     console.log("else-inputText",this.state.inputText);}

  app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.inputText)
    .then(response => 
        this.calculateFaceLocation(response))
    .catch(err => {
      console.log('err',err); });
}

render(){
    return (
    <div className="App">
      {/* <Navigation /> */}
        <Bg />
        <Logo />
        <ImageForm 
            onClickDetect_ImageForm     = {this.onClickDetect}
            onChangeInputText_ImageForm = {this.onChangeInputText} />
        <FaceDe image={this.state.imageUrl} faceBox={this.state.faceBox} />
    </div>
  );
}}

export default App; 