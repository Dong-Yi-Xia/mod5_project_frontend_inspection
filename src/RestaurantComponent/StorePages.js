import React from 'react'
import {connect} from 'react-redux'
import RestaurantsContainer from './RestaurantsContainer'

class StorePages extends React.Component{

    state = {
        i : 0
    }



  componentDidMount(){
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=0&count=20`, {
        headers: {
        Accept: "application/json",
        "User-Key": process.env.REACT_APP_ZOMATO_API_KEY
      }
    })
    .then(r => r.json())
    .then(resp => {
      this.props.setRestaurants(resp)
    })
  }



    nextPage = () => {
        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=${this.state.i+20}&count=20`, {
          headers: {
            Accept: "application/json",
            "User-Key": process.env.REACT_APP_ZOMATO_API_KEY
          }
        })
        .then(r => r.json())
        .then(resp => {
          console.log(resp)
          this.props.setRestaurants(resp)
        })
        
        this.setState({
          i: this.state.i + 20
        }) 
    
      }
    
      
      backPage = () => {
        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=${this.state.i-20}&count=20`, {
          headers: {
            Accept: "application/json",
            "User-Key": process.env.REACT_APP_ZOMATO_API_KEY
          }
        })
        .then(r => r.json())
        .then(resp => {
          this.props.setRestaurants(resp)
        })
        
        this.setState({
          i: this.state.i - 20
        }) 
    
      }


    render(){

        return( 
            <div>
              <h1 id="top">Lisiting </h1>
                <RestaurantsContainer />

                {this.state.i === 0 
                ? 
                <a href="#top"><button className="nextButton" onClick={this.nextPage}> Next</button></a> 
                : 
                <div>
                   <a href="#top"><button className="backButton" onClick={this.backPage}> back</button></a>
                   <a href="#top"><button className="nextButton" onClick={this.nextPage}> Next</button></a> 
                </div>
                }

               
            </div>

        )
    }
}


let setRestaurants = (restaurantsArray) => {
  return {
    type:"SET_RESTAURANTS",
    payload: restaurantsArray
  }
}

let mapDispatchToProps = {
  setRestaurants: setRestaurants
}


export default connect(null, mapDispatchToProps)(StorePages )






