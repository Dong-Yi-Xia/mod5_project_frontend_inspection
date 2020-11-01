

let initialStateOfUser = {
    user: "",
    token: "",
    inspections: []
  }
  
  let userReducer = (state = initialStateOfUser, action) => {
      // console.log(action)
    switch(action.type){
      case "SET_USER_INFO":
      return{
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          inspections: [...state.inspections, action.payload.user.inspections]
      }

      case "SET_USER_LOGOUT":
        return{
          ...state,
          user: action.payload.user,
          token: action.payload.token
        } 
  
      case "SET_NEW_USER":
        return{
          ...state,
          user: action.payload.user,
          token: action.payload.token,
          inspections: [...state.inspections, action.payload.user.inspections]
        }

      default:
        return state
    }
  }
  

  export default userReducer