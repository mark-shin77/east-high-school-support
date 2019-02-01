import React, {Component} from 'react';
import axios from "axios";
import LoginForm from './Login';

class LogApp extends Component {
    constructor(){
        super()
        this.state = {
            loggedIn: false,
            user: null
        }
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


    _login(username, password){
        axios({
            method:"post",
            url: '/auth/login',
            data: {
                email: username,
                password: password
            }
        }).then(response=>{
   
                console.log(response)
                if (response.status ===200){
                    this.setState({
                        loggedIn: true,
                        user: response.data.user
                    })
                 }
             })
    }
    render(){
        if(localStorage.token==="success"){
            window.location= "/dash"
        }
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


