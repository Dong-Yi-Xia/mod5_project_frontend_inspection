import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
            <div className="loginformContainer">

                <Form className="loginform" onSubmit={this.handleSubmit}>
                    <h3> REGISTER </h3>
                    <Form.Group >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" id="username" name="username" 
                            onChange={this.handleChange} 
                            value={this.state.username} 
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control  type="password" id="password" name="password" 
                            onChange={this.handleChange}
                            value={this.state.password}
                            required
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" id="name" name="name" 
                            onChange={this.handleChange} 
                            value={this.state.name} 
                            required
                        />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" id="title" name="title" 
                            onChange={this.handleChange} 
                            value={this.state.title} 
                            required
                        />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit"> Submit </Button>
                </Form>

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