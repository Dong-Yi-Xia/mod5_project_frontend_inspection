import React from 'react'
import ReactMapboxGl, { Marker, Popup } from 'react-mapbox-gl';

class StoreMarker extends React.Component{

    state = {
        show: false
    }

    showpop = (evt) => {
        this.setState({
            show: true
        })
    }

    closepop = (evt) => {
        this.setState({
            show: false
        })
    }


    render() {
     
        let {name} = this.props.store
        let {address, longitude, latitude} = this.props.store.location
        return (
            <>
            <Marker
                coordinates={[longitude, latitude]}
                anchor="bottom">
                <button className="markerPopup-button" onClick={this.showpop} onMouseLeave={this.closepop}>
                    <img src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1602968345/Project4/Natsu_Dragneel_drviwm.jpg" width="20" height="30"/>
                </button>
            </Marker>

            {this.state.show ? 
                <Popup
                className = "markerPopup"
                coordinates={[longitude, latitude]}
                offset={{
                    'bottom-left': [12, -38],  'bottom': [0, -38], 'bottom-right': [-12, -38]
                }}>
                <h5>{name}</h5>
                <p>{address}</p>
                </Popup>
                :
             null}
            </>
        );
    }
}

export default StoreMarker