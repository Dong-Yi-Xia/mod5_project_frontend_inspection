import React from 'react'
import Col from 'react-bootstrap/Col'
import AddInspectionForm from './AddInspectionForm'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class Restaurant extends React.Component{



    render(){

        // console.log(this.props.restaurant.restaurant)
        let {name, thumb, cuisines} = this.props.restaurant.restaurant
        let {address, latitude, longitude} = this.props.restaurant.restaurant.location
        return(
            <>
            <Col className="gridCol" >   
                <Card style={{ width: '22rem' }}>
                {/* <Card.Img variant="top" src={thumb} /> */}
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <object data={thumb}>
                        <img src="https://res.cloudinary.com/dfqzcsl8x/image/upload/v1604598187/Project4/cartoon_store_sjzhb8.jpg" alt={name} height="200px" width="200px"
                        />
                    </object>
                    <Card.Text>
                        <p>{address}</p>
                        <p className="cuisine-info">Type of cuisines: {cuisines}</p>
                    </Card.Text>

                    <Button variant="primary">
                        <AddInspectionForm restaurantInfo={this.props.restaurant.restaurant}/>
                    </Button>
                </Card.Body>
                </Card>
            </Col>
          
            </>
        )
    }
}

export default Restaurant