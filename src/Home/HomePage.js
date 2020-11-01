import React from 'react'
import { connect } from 'react-redux'

class HomePage extends React.Component {
    render(){
        return(
            <div>
                <h1>Restaurant Inspection</h1> 
                <p>Welcome {this.props.name}</p> 
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    return {
      name: state.userRR.user.name
    }
 }


export default connect(mapStateToProps)(HomePage)