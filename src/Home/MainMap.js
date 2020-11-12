import React from 'react'
import ReactMapboxGl, {  Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import { connect } from 'react-redux'
import MapInspection from './MapInspection'


class MainMap extends React.Component{

    state = {
        longitude: "",
        latitude: ""
    }

    componentDidMount(){
        if(navigator.geolocation){
            navigator.geolocation.watchPosition(position => {
                this.setState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
                this.props.mylocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            })
        }
    }

    // findLocation = (Map, evt) => {
    //     console.log(evt.lngLat)
    // }

    render() {
        
        let component = this.props.inspectionArray
        if(component !== undefined) {
            component = component.map(inspectionObj => {
               return <MapInspection key={inspectionObj.id} 
                        inspection={inspectionObj} 
                        selectDate={this.props.selectDate}
                        />
             })
         } 

         const Map = ReactMapboxGl({
            accessToken: process.env.REACT_APP_MAPBOX_API_KEY,
            doubleClickZoom: false
        });
  
        
        //Must be in longitude, latitude coordinate order   
      
        return (
            <div >
                <Map
                    className="main-map"
                    style="mapbox://styles/mapbox/streets-v9"
                    center={ [this.state.longitude, this.state.latitude] }
                    zoom={[12]}
                    onDblClick={this.findLocation}
                    containerStyle={{
                        height: '70vh',
                        width: '85vw',
                    }}
                >
    

                    <Marker 
                    coordinates={[this.state.longitude, this.state.latitude] }
                    anchor="bottom">
                    <div className="mylocation-border">
                    <button className="mylocation-button" disabled>
                        <img src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602968347/Project4/Umaru_Doma_jktg1r.jpg" width="20" height="30"/>
                    </button>
                    </div>
                    </Marker>

                    {component}
                </Map>
              
            </div>
        )
    }
}


let mapStateToProps = (state) => {
    // console.log(state)
    return {
        inspectionArray: state.userRR.user.inspections,
        token: state.userRR.token,
        mylocation: state.userRR.mylocation
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
 

export default connect(mapStateToProps, mdtp)(MainMap)

