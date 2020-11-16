import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

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
        fetch("https://mod5restaurants-api.herokuapp.com/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
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
            <div className="loginformContainer">
            
                <Form className="loginform" onSubmit={this.handleSubmit}>
                     <h3> LOGIN </h3>
                    <Form.Group >
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" id="username" name="username" 
                            onChange={this.handleChange} 
                            value={this.state.username} 
                            required
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
                    
                    <Button variant="primary" type="submit"> Submit </Button>
                    <div className="registerSection">
                        <Link to="/register"> <Button>Register Now</Button> </Link>
                        <Form.Text className="text-muted">Don't have an account?</Form.Text>
                    </div>
                </Form>



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