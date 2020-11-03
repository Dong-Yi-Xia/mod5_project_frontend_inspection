

let initialStateOfReport = {
    reports: [],
    singleReport: ""
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

      default:
        return state
    }
  }
  

  export default reportReducer