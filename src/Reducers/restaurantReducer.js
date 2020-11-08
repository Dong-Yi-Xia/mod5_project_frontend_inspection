

let initialStateOfRestaruant = {
    restaurants: []
  }
  
  let restaurantReducer = (state = initialStateOfRestaruant, action) => {
      // console.log(action)
    switch(action.type){
      case "SET_RESTAURANTS":
      return{
          ...state,
          restaurants: action.payload.restaurants      
      }


      default:
        return state
    }
  }
  

  export default restaurantReducer