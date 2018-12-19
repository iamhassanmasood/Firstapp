import React,{Component} from "react";
import * as firebase from 'firebase';
import './App.css';
import {Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });
class Signin extends Component {
  constructor() {
    super();
    this.state = {
        email: '',
        password: ''
    }

    this.ref = firebase.database().ref();}
handleRegister = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((success) => {
            console.log('success', success);
            this.props.history.push('/dashboard');
        }).catch(function (error) {
            console.log('error', error);
        })
}

handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
}
render() {
    return (
        <div>
            <div
            style={{
                border: '60px',
                boxSizing: '30px',
                paddingRight: '100px',
                float: "right",
            }}>
            <form
                 onSubmit={this.handleRegister}>
                <center><h1>LogIn</h1><br /></center>
                <br />
                <b>Email</b><br />

                <input
                    type="text"
                    id='email'
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    style={{
                        width: '100%',
                        padding: '12px 20px',
                        margin: '8px 0',
                        display: 'inline-block',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        boxSizing: 'border-box'
                    }}
                />
                <br />

                <b>Password</b><br />

                <input
                    type="password"
                    id='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    style={{
                        width: '100%',
                        padding: '12px 20px',
                        margin: '8px 0',
                        display: 'inline-block',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        boxSizing: 'border-box'
                    }}
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
                    Login
                    </Button>
            </form>
            </div>

        </div>
    );
}
}
export default withStyles(styles) (Signin);