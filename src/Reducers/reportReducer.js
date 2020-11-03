

let initialStateOfReport = {
    reports: [],
    singleReport: "",
    currentInspection: ""
  }
  
  let reportReducer = (state = initialStateOfReport, action) => {
    //   console.log(action)
    switch(action.type){
     case "SET_SINGLE_INSPECTION_REPORTS":
         return{
             reports: action.payload
         }

     case "SET_SINGLE_REPORT":
         return{
             ...state,
             singleReport: action.payload
         }     

     case "SET_UPDATE_REPORT":
         let updateArr = state.reports.map(report => {
             if(report.id === action.payload.id){
                 return action.payload
             } else{
                 return report
             }
         })
         return{
             ...state,
             reports: updateArr
         }    

      case "SET_CURRENT_INSPECTION":   
          return{
             ...state,
             currentInspection: action.payload
           } 
        
      case "SET_NEW_REPORT":
          return{
              ...state,
              reports: [...state.reports, action.payload]
          }     

      case "DELETED_REPORT":
          let deletedNewArr = state.reports.filter(report => {
              return report.id !== action.payload.id
          })
          return{
              ...state,
              reports: deletedNewArr
          }    

      default:
        return state
    }
  }
  

  export default reportReducer