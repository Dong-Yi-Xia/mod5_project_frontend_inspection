import React from 'react'
import { connect } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBarr extends React.Component{

 

    handleLogout= (evt) => {
        this.props.setUserLogout()
        localStorage.clear()
    }

    render(){
        return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">RI</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/restaurants">Restaurants</Nav.Link>

                    {this.props.token ? 
                    <>
                    <Nav.Link href="inspections">UpComing-Inspections</Nav.Link>
                    <Nav.Link onClick={this.handleLogout} href="login"> LogOut </Nav.Link>
                    </>
                    :
                    <Nav.Link href="/login"> LogIn  </Nav.Link>
                    }

                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )
    }
}

let mstp = state => {
    return{
        token: state.userRR.token
    }
}

let setUserLogout = () => {
    return{
        type: "SET_USER_LOGOUT",
        payload: {user: "", token: ""}
    }
}

let mapDispatchToProps = {
    setUserLogout: setUserLogout
}


export default connect(mstp,mapDispatchToProps)(NavBarr)