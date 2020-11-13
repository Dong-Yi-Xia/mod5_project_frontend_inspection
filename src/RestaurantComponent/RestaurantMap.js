import React from 'react'
import ReactMapboxGl, {  Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import { connect } from 'react-redux'
import StoreMarker from './StoreMarker'


class RestaurantMap extends React.Component{

    state = {
        lat: "",
        lon: ""
    }


    componentDidMount(){
        if(navigator.geolocation){
        navigator.geolocation.watchPosition(position => {
            this.setState({
                lat: position.coords.latitude,
                lon: position.coords.longitude
            })
        })
        }
    }

    

    findLocation = (Map, evt) => {
        // console.log(evt.lngLat)
        this.setState({
            lat: evt.lngLat.lat,
            lon: evt.lngLat.lng
        })
        this.props.newlocation(evt.lngLat)
        this.props.updateLocationFun(evt.lngLat)
    }

    render() {
        
         const Map = ReactMapboxGl({
            accessToken: process.env.REACT_APP_MAPBOX_API_KEY,
            doubleClickZoom: false
        });

        let component = this.props.restaurantArray.map(restaurantObj => {
            return <StoreMarker key={restaurantObj.restaurant.id} store={restaurantObj.restaurant}/>
        })
        //Must be in longitude, latitude coordinate order   
      
        return (
            <div >
                <Map
                    className="main-map"
                    style="mapbox://styles/mapbox/streets-v9"
                    center={ [this.state.lon, this.state.lat] }
                    zoom={[15]}
                    onDblClick={this.findLocation}
                    containerStyle={{
                        height: '70vh',
                        width: '85vw',
                    }}
                >
    
                    <Marker 
                    coordinates={[this.state.lon, this.state.lat] }
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
        restaurantArray: state.restaurantRR.restaurants,
        mylocation: state.userRR.mylocation
    }
 }

 let newlocation = (location) => {
     return {
         type: "SET_NEW_LOCATION",
         payload: location
     }
 }

 let mdtp = {
    newlocation
 }

export default connect(mapStateToProps, mdtp)(RestaurantMap)