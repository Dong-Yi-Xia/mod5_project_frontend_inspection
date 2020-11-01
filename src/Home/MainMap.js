import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'


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
            accessToken:
              'pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A'
          });

        return (
            <div>
                Map Goes Here
            <Map className="mainMap"
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '50vh',
                    width: '50vw'
                }}
                >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                </Layer>
            </Map>
            </div>
        )
    }
}

export default MainMap 