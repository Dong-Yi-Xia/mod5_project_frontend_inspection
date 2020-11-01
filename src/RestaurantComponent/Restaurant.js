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
            <Col className="gridCol" xs={5} md={5} lg={5}>   
                <div className="singleRestaurant">
                    {name}
                    <img src={thumb} alt={name}/>
                    {address}
                </div>
                <div className="singleRestaurant-SideInfo">
                     <p>Type of cuisines: {cuisines}</p>

                    <AddInspectionForm restaurantInfo={this.props.restaurant.restaurant}/>

                </div>
            </Col>
            <Col className="gridCol" md={{ span: 5, offset: 1 }}>
                Map Image Goes Here
            </Col>
            </>
        )
    }
}

export default Restaurant