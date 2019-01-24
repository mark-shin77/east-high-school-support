import React, {Component} from 'react';
import axios from "axios";
import LoginForm from './Login';
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { runInThisContext } from 'vm';

/*const DisplayLinks = props=>{
    if (props.loggedIn){        return (
            
        )
    }
}*/
class LogApp extends Component {
    constructor(){
        super()
        this.state = {
            loggedIn: false,
            user: null
        }
        this._logout = this._logout.bind(this)
        this._login = this._login.bind(this)
 
    }
    
    componentDidMount(){
        axios.get("/auth/user").then(response =>{
            console.log(response.data)
            if (!!response.data.user){
                console.log(`There is a User`)
                this.setState({
                    loggedIn: true,
                    user: response.data.user
                })
            } else {
                this.setState({
                    loggedIn: false,
                    user: null
                })
            }
        },console.log("this is the state" +this.state))

    }

    _logout(event){
        event.preventDefault()
        console.log('logging out')
        axios.post('auth/logout').then(response=>{
            console.log(response.data)
            if (response.status ===200){
                this.setState({
                    loggedIn: false,
                    user: null
                })
            }
        })
    }

    _login(username, password){
        axios({
            method:"post",
            url: '/auth/login',
            data: {
                email: username,
                password: password
            }
        }).then(response=>{
            // .post(`/auth/login`, {
            //     username,
            //     password
            // })
            // .then(response =>{
                if (response.status ===200){
                    this.setState({
                        loggedIn: true,
                        user: response.data.user
                    })
                 }
             })
    }
    render(){
        return(
            <div>
               
                <LoginForm
               _login ={this._login}
               loggedIn={this.state.loggedIn}
               
               />
            </div>
            
        )
    }
}
export default LogApp


