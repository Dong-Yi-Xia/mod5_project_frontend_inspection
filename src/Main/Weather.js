import React from 'react'
import {connect} from 'react-redux'

class Weather extends React.Component{




    render() {
        // console.log(this.props.mylocation.latitude)

        let weatherlocal = () => {
            let lat = this.props.mylocation.latitude
            let lon = this.props.mylocation.longitude
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
            .then(r => r.json())
            .then(resp => {
                console.log(resp)
            })
        }

        return (
            <div>
                {weatherlocal()}

            </div>
        );
    }
}


let mstp = (state) => {
    console.log(state)
    return{
        mylocation: state.userRR.mylocation
    }
}


export default connect(mstp)(Weather)
