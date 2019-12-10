import React from 'react';
import './App.css';
import 'tachyons'; 
import Navigation from './components/navigation/Navigation';
import Logo from './components/Logo/Logo';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Bg from './components/bg/bg';
import ImageForm from './components/ImageForm/ImageForm';
import FaceDe from './components/Face/Face';
import Clarifai from 'clarifai';

const appClarifai = new Clarifai.App({ apiKey: '616e6781b3e543b7b0e2a98f8b7e25c2'});

class  App extends React.Component { 
constructor(){
    super();
    this.state = {
      inputText : '' ,
      imageUrl : '',
      faceBox :{} ,
      route : 'signin',
      isSingedIn : false,
      user : {id:'' , 
            name:'',
            email:'',
            password:'',
            enteries:'' ,
            joined: ''
            }
    }}
          
  calculateFaceLocation= (data)=>{
    //  console.log('response', data.outputs[0].data.regions[0].region_info.bounding_box);
      const clar  = data.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('inputImage')
      const width = Number(image.width);
      const height = Number(image.height);
      this.setState({faceBox : {
            left_col: clar.left_col * width ,
            top_row: clar.top_row * height ,
            right_col: width - (clar.right_col * width) ,
            bottom_row: height -(clar.bottom_row * height) 
      }}
  )}

setFaceBox = (box) =>{
  this.setState({faceBox : box})
}
onChangeInputText = (event) => {
  this.setState({inputText: event.target.value});
}
onClickLogin=()=>{
  this.setState({route:'home'})
}
onClickDetect = () => {
  if (this.state.inputText)
   this.setState({imageUrl : this.state.inputText});
   else 
   this.setState({inputText : this.state.imageUrl});
    appClarifai.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.inputText)
    .then( response =>{
        if (response){
        this.calculateFaceLocation(response);
        fetch('https://mysterious-eyrie-08602.herokuapp.com/rank', {
          method:'put',
          headers : {'Content-Type': 'application/json'},
          body : JSON.stringify({ id : this.state.user.id})
        })
          .then(res => res.json())
          .then(data => {
          this.setState(Object.assign(this.state.user , { enteries : data[0].enteries }))
          })
        }
      })
    .catch(err => {
        console.log('err',err); });
}

onChangeRoute = (routeP) => {
  this.setState({route: routeP});

  if( routeP === 'home')
    this.setState({route: routeP, isSingedIn : true})
  else if( routeP === 'signout'){
    const init= {
        inputText : '' ,
        imageUrl : '',
        faceBox :{} ,
        route : 'signin',
        isSingedIn : false,
        user :  {id:'' ,   name:'',  email:'',  password:'', enteries:'' , joined: '' }
      };
    this.setState(init);
    }
 }

onLoadUser = (user_props) => {
  this.setState({user: user_props[0]});
}

render(){
  const {isSingedIn} = this.state;
    return (
     <div className="App">
        <Navigation onChangeRoute = {this.onChangeRoute}  isSingedIn= {isSingedIn} />
      { (this.state.route === 'home' && isSingedIn)?
          <div>
            <Logo />
            <ImageForm 
                onClickDetect_ImageForm     = {this.onClickDetect}
                onChangeInputText_ImageForm = {this.onChangeInputText}
                user ={this.state.user} />
            <FaceDe image={this.state.imageUrl} faceBox={this.state.faceBox} />
          </div>
        :   (this.state.route === 'signin'?
              <Login  isSingedIn={isSingedIn} onChangeRoute = {this.onChangeRoute}  onLoadUser={this.onLoadUser} /> 
            : <Register  onChangeRoute = {this.onChangeRoute} onLoadUser={this.onLoadUser} /> 
        )
        }
      <Bg /> 
    </div>
  );
}}

export default App; 