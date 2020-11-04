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
            accessToken: "pk.eyJ1IjoiY3JhdmU0Y29kZSIsImEiOiJja2dvN3VjN3cwOGptMzJwZ3plYmtidjU4In0.HmurhTxMmNKf6fQY9XUbKw"
        });

          const zoom = [8]
        //Must be in longitude, latitude coordinate order   
        return (
            <div>
                <Map
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
                </Layer>

                <Marker
                coordinates={[-73.985130, 40.758896]}
                anchor="bottom">
                <img src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602968347/Project4/Umaru_Doma_jktg1r.jpg" width="20" height="30"/>
                </Marker>

                </Map>;
                {/* <div ref={el => this.mapContainer = el} /> */}
            </div>
        )
    }
}

export default MainMap 

