import React from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';



class MapInspection extends React.Component{

    render() {
        let today = new Date().toISOString().slice(0, 10)
        console.log(this.props.inspection.date === today )
        let {lat, lon} = this.props.inspection.restaurant
        return (
            <>
                 <Marker
                    coordinates={[lon, lat]}
                    anchor="bottom">
                    <button>
                        <img src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602968347/Project4/Umaru_Doma_jktg1r.jpg" width="20" height="30"/>
                    </button>
                </Marker>
            </>
        );
    }
}

export default MapInspection 