import React, {Component} from 'react';
import fire from "../Config/fire";
import "firebase/auth";
class Home extends Component {

    logout(){
        fire.auth().signOut()
    }
    render() {

        return (
            <div>
                <h1>Atlast you're Logged in</h1>
                <button onClick={this.logout}>Log Out</button>
            </div>
        );
    }
}

export default Home;