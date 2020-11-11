import React from 'react'
import {connect} from 'react-redux'
import RestaurantsContainer from './RestaurantsContainer'
import RestaurantMap from './RestaurantMap'


class StorePages extends React.Component{

    state = {
        i : 0,
        lat: 0,
        lon: 0
    }


  updateLocationFun = (info) => {
      this.setState({
            i : 0,
            lat: info.lat,
            lon: info.lng
        })
      this.firstPage()
  }  



  componentDidMount(){
    if(navigator.geolocation){
      navigator.geolocation.watchPosition(position => {
          this.setState({
              lat: position.coords.latitude,
              lon: position.coords.longitude
          })
          this.props.mylocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
          })
          this.firstPage()
          this.nextPage()
          this.backPage()
          
        })
     }
  }

      firstPage =() => {
          fetch(`https://developers.zomato.com/api/v2.1/search?lat=${this.state.lat}&lon=${this.state.lon}&sort=real_distance&start=0&count=20`, {
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
        fetch(`https://developers.zomato.com/api/v2.1/search?lat=${this.state.lat}&lon=${this.state.lon}&sort=real_distance&start=${this.state.i+20}&count=20`, {
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
        fetch(`https://developers.zomato.com/api/v2.1/search?lat=${this.state.lat}&lon=${this.state.lon}&sort=real_distance&start=${this.state.i-20}&count=20`, {
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
      console.log(this.state)
        return( 
            <div>
              <h1 id="top"> Restaurant Listing </h1>
              <RestaurantMap updateLocationFun={this.updateLocationFun}/>
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

let mstp = (state) => {
  console.log(state)
  return{
    location: state.userRR.user.location,
    newlocation: state.userRR.user.location
  }
}

let setRestaurants = (restaurantsArray) => {
  return {
    type:"SET_RESTAURANTS",
    payload: restaurantsArray
  }
}

let mylocation = (info) => {
  return {
      type: "SET_MY_LOCATION",
      payload: info
  }
} 


let mapDispatchToProps = {
  setRestaurants,
  mylocation
}


export default connect(mstp, mapDispatchToProps)(StorePages )






