import React from 'react'
import {connect} from 'react-redux'

class Weather extends React.Component{

    state = {
        description: ""
    }

    componentDidMount(){
        this.weatherlocal()
    }

    weatherlocal = () => {
        let lat = this.props.mylocation.latitude
        let lon = this.props.mylocation.longitude
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
        .then(r => r.json())
        .then(resp => {
            console.log(resp)
            let current = resp.weather
            this.setState({
               description: current.description
            })
        })
    }


    render() {
        console.log(this.state)

        return (
            <div>
                <p>Welcomeadslo</p>

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
