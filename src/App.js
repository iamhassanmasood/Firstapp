import React, { Component } from 'react';
import * as firebase from "firebase";
import './App.css';
import Appbar from  './Appbar'
var config = {
  apiKey: "AIzaSyDKaDmi6q1_GDswJ7vU_kDU8fbX-UY21FM",
  authDomain: "my-react-app-672a9.firebaseapp.com",
  databaseURL: "https://my-react-app-672a9.firebaseio.com",
  projectId: "my-react-app-672a9",
  storageBucket: "my-react-app-672a9.appspot.com",
  messagingSenderId: "924924428166"
};
firebase.initializeApp(config);
class App extends Component {

  constructor(){
    super();
    this.state = {
        currentForm:''
    }
}
changeForm(v){
  this.setState({
      currentForm: v
  })

}
  render() {
    return (
      <div>
          <div>
          
              <Appbar changeForm={this.changeForm} currentForm={this.state.currentForm}/>
              <h1 
                className='firstHeading' 
                style={{
                background: '#747bab',
                border:'solid',
                borderWidth:"10px",
                borderColor:"white",
                color: 'white',
                textAlign: 'center',
                fontSize: '36px',
                padding:'10px'
                }}
              >
                  React App
              </h1>
          </div>

      </div>

    );
  }
}

export default App;
