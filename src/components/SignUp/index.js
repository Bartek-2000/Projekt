/*import React, {Components} from "react"
import {FirebaseContext} from '../Firebase'

const INITIAL_STATE = {
    username: '',
    email : '',
    password: '',
    confpassword: '',
    error: ''

}

class SingUpForm extends Components{
    constructor(props){
        super(props)

        this.state = {...INITIAL_STATE}
    }

    onChange = event =>{
        this.setState({[event.target.name]:event.target.value})
    }
    onSubmit = event => {
        const {username, email, password} = this.state

        this.props.firebase
        .doCreateWithEmailAndPassword(email, password)
        .then(authUser => {
            this.state({...INITIAL_STATE})
            alert("well done, now go away")
        })

    }

render(){
    
    const {
        username,
        email,
        password,
        confpassword,
        error
    } = {...this.state}
    const isInvalid = 
        password !== confpassword ||
        password === "" ||
        username === "" ||
        email === ""
    return(
        <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                     name="email"
                     value={email}
                     onChange={this.onChange}
                     type="email"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Enter email"
                     />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="confpassword">Confirm Password</label>
                    <input
                    name="confpassword"
                    value={confpassword}
                    onChange={this.onChange}
                    type="password"
                    className="form-control"
                    id="confpassword"
                    placeholder="Confirm Password"/>
                </div>
                <button type="submit" disabled={isInvalid} className="btn btn-primary">Submit</button>
                {error && <p>error.message</p>}
            </form>
    )
}}
export default SingUpForm
*/
import React, {Component} from 'react'

const INITIAL_STATE = {
    username: '',
    email:'',
    passwordOne: '',
    passwordTwo: '',
    error: ''
}

class SignUpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {...INITIAL_STATE}
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state 

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email,passwordOne)
            .then(authUser => {
                this.setState({...INITIAL_STATE})
                alert("You were logged in")
                console.log(authUser)
            } )
            .catch(error => this.setState({error}))
        event.preventDefault()
    }

    onChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state

        const isInvalid = 
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            username === '' ||
            email === ''
        
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                     name="email"
                     value={email}
                     onChange={this.onChange}
                     type="email"
                     className="form-control"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Enter email"
                     />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordOne">Password</label>
                    <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    className="form-control"
                    id="passwordOne"
                    placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordTwo">Confirm Password</label>
                    <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    className="form-control"
                    id="passwordTwo"
                    placeholder="Confirm Password"/>
                </div>
                <button type="submit" disabled={isInvalid} className="btn btn-primary">Submit</button>
                {error && <p>error.message</p>}
            </form>
        )
    }
}

export default SignUpForm