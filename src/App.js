import React, {Component} from 'react'
import { FirebaseContext } from './components/Firebase';
import SignUpForm from './components/SignUp'
export default class App extends Component {
    render(){
        return(
            <FirebaseContext.Consumer>
                {firebase => <SignUpForm firebase = {firebase}/>}
            </FirebaseContext.Consumer>
        )
    }
}