import React from 'react'
import Col from 'react-bootstrap/Col'

class Restaurant extends React.Component{
    render(){
        // console.log(this.props.restaurant.restaurant)
        let {name, thumb} = this.props.restaurant.restaurant
        let {address, latitude, longitude} = this.props.restaurant.restaurant.location
        return(
            <Col>   
                <div className="singleRestaurant">
                    {name}
                    <img src={thumb} alt={name}/>
                </div>
            </Col>
        )
    }
}

export default Restaurant