import React from 'react'
import { connect } from 'react-redux'


class RegisterForm extends React.Component{

    state = {
        username: "",
        password: "",
        name: "",
        title: "",
    }


    handleChange = (evt) => {
        this.setState({
            [evt.target.name] : evt.target.value
        })
    }


    handleSubmit = (evt) => {
        evt.preventDefault()
        fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                name: this.state.name,
                title: this.state.title,
            })
        })
        .then(r => r.json())
        .then(createdUser => {
            if(createdUser.error){
                alert(createdUser.error)
                this.setState({
                    username: "",
                    password: "",
                    name: "",
                    title: "",
                })
            } else{
                this.props.setNewUser(createdUser)
                localStorage.token = createdUser.token
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
                    <input type="password" id="password" name="password" 
                        onChange={this.handleChange}
                        value={this.state.password}
                    />

                    <label htmlFor="name">name:</label>
                    <input type="text" id="name" name="name" 
                        onChange={this.handleChange}
                        value={this.state.name}
                    />

                    <label htmlFor="title">title:</label>
                    <input type="text" id="title" name="title" 
                        onChange={this.handleChange}
                        value={this.state.title}
                    />

                    <button onSubmit={this.handleSubmit} type="submit"> Submit </button> 
                </form>


            </div>
        )
    }
}

let setNewUser = (newUser) => {
    return {
        type: "SET_NEW_USER",
        payload: newUser
    }
} 

let mapDispatchToProps = {
    setNewUser:setNewUser
}



export default connect(null, mapDispatchToProps)(RegisterForm)