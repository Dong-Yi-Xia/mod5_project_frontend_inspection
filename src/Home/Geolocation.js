import React from 'react'
import { geolocated } from "react-geolocated"
import {connect} from 'react-redux'


class Geolocation extends React.Component {

   state = {
       latitude: "",
       longitude: ""
   }
  
  
    render() {
        const successCallBack = (position) => {
            console.log(position)
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        this.props.mylocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        })
        }
    
        navigator.geolocation.getCurrentPosition(successCallBack)
            // timeout: 5000
        

       console.log(this)
        return(
            <div>
                <p>longitude: {this.state.longitude}</p>
                <p>latitude: {this.state.latitude}</p>
            </div>

        )
    }
}



let mylocation = (info) => {
    return {
        type: "SET_MY_LOCATION",
        payload: info
    }
} 

let mdtp = {
    mylocation
}

export default connect(null, mdtp)(Geolocation);

