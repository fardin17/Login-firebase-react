import React, {Component} from 'react';
import fire from "../Config/fire";
import "firebase/auth";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:"",
            password:""
        }
    }
    onChangeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  login=(event)=>{
      event.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
          console.log("Succesful")
      }).catch((err)=>{
          console.log("Error")
      })
  }
    signin=(event)=>{
        event.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log("Succesful")
        }).catch((err)=>{
            console.log("Error")
        })
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <form>
                    <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={this.onChangeHandler}
                    value={this.state.email}
                    /><br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={this.onChangeHandler}
                        value={this.state.password}
                    /><br/>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signin}>SignIn</button>
                </form>
            </div>
        );
    }
}

export default Login;