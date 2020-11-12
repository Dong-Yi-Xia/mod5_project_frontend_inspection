import React from 'react'
import InspectionContainer from './InspectionContainer'
import { connect } from 'react-redux'
import uuid from 'react-uuid'

class InspectionsPage extends React.Component{

    render(){

        let inspectionComponent = this.props.inspectionsArray.map(inspectionObj => {
            return <InspectionContainer key={uuid()} inspections={inspectionObj}/>
        })

        return(
            <div>
                <h2>My Schedule Book</h2>
                {inspectionComponent}
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    // console.log(state.userRR.user.inspections)
    return{
        inspectionsArray: state.userRR.inspections
    }
}


export default connect(mapStateToProps)(InspectionsPage)