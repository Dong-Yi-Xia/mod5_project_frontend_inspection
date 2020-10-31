import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class LoginForm extends React.Component{

    state = {
        username: "",
        password: "",
        error_message: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(r => r.json())
        .then(resp => {
           if(resp.error){
               alert(resp.error)
               this.setState({
                //    error_message: resp.error,
                   username: "",
                   password: "", 
               })
           } else {
               this.props.setUserInfo(resp)
               localStorage.token = resp.token
               this.props.history.push("/")
           }
        })
    }


    render(){
        return(
            <div>
                 
                 <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" 
                        onChange={this.handleChange} 
                        value={this.state.username}
                        />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" 
                        name="password" 
                        onChange={this.handleChange}
                        value={this.state.password}
                    />

                    <input type="submit" value="Login"/>
                </form>

                <label htmlFor="Register">Don't have an account?</label>
                <Link to="/register"> <button>Register Now</button> </Link>
            </div>
        )
    }
}

let setUserInfo = (userInfo) => {
    return{
        type: "SET_USER_INFO",
        payload: userInfo
    }
}

let mapDispatchToProps = {
    setUserInfo: setUserInfo
}


export default connect(null, mapDispatchToProps)(LoginForm)