import React from 'react'
import { connect } from 'react-redux'
import MainMap from './MainMap'

class HomePage extends React.Component {
    render(){
        return(
            <div>
                <h1>Restaurant Inspection</h1> 
                <p>Welcome {this.props.name}</p> 
                <MainMap/>
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