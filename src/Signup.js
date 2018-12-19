import React, { Component } from "react";
import * as firebase from "firebase";
import {Button} from '@material-ui/core';
import "./App.css";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      newemail: "iamhassanmasood@gmail.com",
      npassword: "12345678",
      reppassword: "12345678",
      uname: "iamhassanmasood",
      firstname: "Hassan",
      lastname: "Masood",
      mobileno: "03127700833"
    };
    this.db = firebase.firestore();
    // Disable deprecated features
    this.db.settings({
      timestampsInSnapshots: true
    });
  }
  handleRegister = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.newemail, this.state.npassword)
      .then((success)=> {
          const userId = success.user.uid;
          const { newemail,
            // npassword,
            // reppassword,
            uname,
            firstname,
            lastname,
            mobileno
        } = this.state;
                    console.log("success", success);
        this.db.collection("users").doc(userId)
          .set({
              uuid:userId,
            newemail,
            uname,
            firstname,
            lastname,
            mobileno, 
          })
          .then((docRef) =>{
            console.log("Document written with ID: ", docRef);
            this.props.history.push('/signin');
          })
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
      })
      .catch(function(error) {
        console.log("error", error);
      });
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    return (
      <div className="SU">
          <div
            style={{
                border: '60px',
                boxSizing: '30px',
                paddingRight: '100px',
                float: "right",
            }}>    
            <h1>SignUp</h1>
            <br />
            <form onSubmit={this.handleRegister}>

              <label><b>Firstname: </b></label>
              <input
                type="text"
                id="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
                style={{
                width: '100%',
                padding: '12px 20px',
                margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box'
                }}
                required
              />
              <br />

              <label><b>Lastname: </b></label>
              <input
                type="text"
                id="lastname"
                value={this.state.lastname}
                onChange={this.handleChange}
                style={{
                width: '100%',
                padding: '12px 20px',
                margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box'
                }}
                required
              />
              <br />

              <label><b>Mobile No: </b></label>
              <input
                type="text"
                id="mobileno"
                value={this.state.mobileno}
                onChange={this.handleChange}
                style={{
                width: '100%',
                padding: '12px 20px',
                margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box'
                }}
                required
              />
              <br />

              <label><b>Email: </b></label>
              <input
                type="text"
                id="newemail"
                value={this.state.newemail}
                onChange={this.handleChange}
                style={{
                width: '100%',
                padding: '12px 20px',
                margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box'
                }}
                required
              />
              <br />

              <label><b>Password: </b></label>

              <input
                type="password"
                id="npassword"
                value={this.state.npassword}
                onChange={this.handleChange}
                style={{
                width: '100%',
                padding: '12px 20px',
                margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box'
                }}
                required
              />
              <br />

              <label><b>Retype Password: </b></label>

              <input
                type="password"
                id="reppassword"
                value={this.state.reppassword}
                onChange={this.handleChange}
                style={{
                width: '100%',
                padding: '12px 20px',
                margin: '8px 0',
                display: 'inline-block',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box'
                }}
                required
              />
              <br />

              <br />
              <Button 
              type="submit" 
              className="registerbtn"
              variant="contained"
              color="secondary" 
              className={this.props.classes.button}
              >
                Signup
              </Button>
            </form>
          </div>
      </div>
    );
  }
}
export default withStyles(styles)(Signup);
