import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavBar extends React.Component{

 

    handleLogout= (evt) => {
        this.props.setUserLogout()
        localStorage.clear()
    }

    render(){
        return(
            <ul className="navBar">
                <li><Link to="/"> Home  </Link></li>
                <li><Link to="/restaurants"> Restaurants  </Link></li>
                

                {this.props.token ? 
                <li><Link onClick={this.handleLogout} to="login"> LogOut </Link></li> : 
                <li><Link to="/login"> LogIn  </Link></li>}
    

            </ul>
            
        )
    }
}

let mstp = state => {
    return{
        token: state.user.token
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


export default connect(mstp,mapDispatchToProps)(NavBar)