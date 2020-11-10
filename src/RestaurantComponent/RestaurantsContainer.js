import React from 'react'
import {connect} from 'react-redux'
import Restaurant from './Restaurant'
import uuid from 'react-uuid'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



class RestaurantsContainer extends React.Component{

     

    render(){

        let arrayComponent = this.props.restaurantsArray.map(restaurantObj => {
            return <Restaurant key={uuid()} restaurant={restaurantObj}/>
        })

        return(
            <>
            <Container >
                <Row className="gridRow">
                    {arrayComponent}
                </Row>
            </Container>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    // console.log(state.restaurantRR.restaurants)
    return{
        restaurantsArray: state.restaurantRR.restaurants
    }
}

export default connect(mapStateToProps)(RestaurantsContainer)

