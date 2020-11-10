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
            <Col className="gridCol" >   
                    <h3>{name}</h3>
                    <object data={thumb}>
                        <img src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1604598187/Project4/cartoon_store_sjzhb8.jpg" alt={name} height="200px" width="200px"
                    />
                    </object>
                    <p>{address}</p>
                     <p className="cuisine-info">Type of cuisines: {cuisines}</p>
                    <AddInspectionForm restaurantInfo={this.props.restaurant.restaurant}/>
            </Col>
          
            </>
        )
    }
}

export default Restaurant