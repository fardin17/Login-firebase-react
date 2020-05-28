import React, {Component} from 'react';
import Login from "./Pages/Login";
import './App.css';
import fire from "./Config/fire";
import Home from "./Pages/Home";
import "firebase/auth";
class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:""
        }
    }
    authListener=()=>{
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user})
            }
            else{
                this.setState({user:null})
            }

        })
    }
    componentDidMount=()=> {
        this.authListener()
    }

    render() {
        return (
            <div className="App">
                {this.state.user?<Home/>:<Login/>}
            </div>
        );
    }
}

export default App;
