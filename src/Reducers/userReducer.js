

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

      case "SET_INSPECTION_INFO":
        return{
          ...state,
          inspections: [...state.inspections, action.payload]
        }  

      case "UPDATE_INSPECTION_DATETIME":
        let updateArray = state.inspections[0].map(inspect => {
            if(inspect.id === action.payload.id){
              return action.payload
            } else {
              return inspect
            }
        })
        return{
          ...state,
          inspections: [updateArray]
        }  

      case "DELETE_INSPECTION":
        let deletedArray = state.inspections[0].filter(inspect => {
          return inspect.id !== action.payload.id
        })
        return {
          ...state,
          inspections: [deletedArray]
        }
      


      default:
        return state
    }
  }
  

  export default userReducer