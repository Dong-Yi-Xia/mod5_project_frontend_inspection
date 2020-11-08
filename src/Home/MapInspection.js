import React from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';




class MapInspection extends React.Component{


    theMarker = () => {
        let {lat, lon} = this.props.inspection.restaurant
        return<Marker
                coordinates={[lon, lat]}
                anchor="bottom">
                <button>
                    <img src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602968345/Project4/Natsu_Dragneel_drviwm.jpg" width="20" height="30"/>
                </button>
            </Marker>
    }

    whichMarker = () => {
        if(this.props.selectDate === this.props.inspection.date){
            return this.theMarker()
        } else {
            return null
        }
    }

    render() {
       console.log(this.props.selectDate)

        // let {lat, lon} = this.props.inspection.restaurant
        return (
            <>
            {this.whichMarker()}
     
            </>
        );
    }
}


export default MapInspection 