import React from 'react'
import Col from 'react-bootstrap/Col'
import AddInspectionForm from './AddInspectionForm'

class Restaurant extends React.Component{



    render(){
        // console.log(this.props.restaurant.restaurant)
        let {name, thumb, cuisines} = this.props.restaurant.restaurant
        let {address, latitude, longitude} = this.props.restaurant.restaurant.location
        return(
            <>
            <Col className="gridCol"  md={{ span: 4, offset: 1 }} >   
                    <h3>{name}</h3>
                    <img src={thumb} alt={name}/>
                    <p>{address}</p>
                     <p className="cuisine-info">Type of cuisines: {cuisines}</p>
                    <AddInspectionForm restaurantInfo={this.props.restaurant.restaurant}/>
            </Col>
          
            </>
        )
    }
}

export default Restaurant