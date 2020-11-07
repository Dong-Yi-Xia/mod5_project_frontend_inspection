import React from 'react'
import { connect } from 'react-redux'
import MainMap from './MainMap'

class HomePage extends React.Component {

    state = {
        curTime: ""
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({
            curTime : new Date().toLocaleString()
          })
        }, 1000)
      }

    render(){
        // let today = new Date().toISOString().slice(0, 10)
        // let today = new Date().toLocaleDateString()
        return(
            <div>
                <h1>{this.state.curTime}</h1>
                <h1>NYC Restaurant Inspection</h1> 
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