import React, {useState} from 'react'
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
// import mapboxgl from 'mapbox-gl';



class MainMap extends React.Component{

    // state = {
    //     lng: 5,
    //     lat: 34,
    //     zoom: 2
    // }
 
    // componentDidMount() {
    //     const map = new mapboxgl.Map({
    //         container: this.mapContainer,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [this.state.lng, this.state.lat],
    //         zoom: this.state.zoom
    //     });
            
    //     map.on('move', () => {
    //         this.setState({
    //             lng: map.getCenter().lng.toFixed(4),
    //             lat: map.getCenter().lat.toFixed(4),
    //             zoom: map.getZoom().toFixed(2)
    //         });
    //      })
    // }

    render() {
         const Map = ReactMapboxGl({
            accessToken: process.env.REACT_APP_MAPBOX_API_KEY
        });

          const zoom = [8]
        //Must be in longitude, latitude coordinate order   
        return (
            <div >
                
                <Map
                    className="main-map"
                    style="mapbox://styles/mapbox/streets-v9"
                    center={ [-73.985130, 40.758896] }
                    zoom={[14]}
                    containerStyle={{
                        height: '70vh',
                        width: '70vw',
                    }}
                >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[-73.985130, 40.758896]} />
                        <Feature coordinates={[-74.004821, 40.742051]} />
                    </Layer>

                    <Marker
                    coordinates={[-73.985130, 40.758896]}
                    anchor="bottom">
                    <img src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602968347/Project4/Umaru_Doma_jktg1r.jpg" width="20" height="30"/>
                    </Marker>

                    <Marker
                    coordinates={[-73.9945, 40.7632]}
                    anchor="bottom">
                    <img src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602968347/Project4/Umaru_Doma_jktg1r.jpg" width="20" height="30"/>
                    </Marker>

                </Map>;
               
            </div>
        )
    }
}

export default MainMap 

