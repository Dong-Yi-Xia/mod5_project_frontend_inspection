import React from 'react'
import { connect } from 'react-redux';
import Inspection from './Inspection'
import uuid from 'react-uuid'


class InspectionContainer extends React.Component{

 

    render() {
        let inspectionComponent = this.props.inspections.map(inspectionObj => {
            return <Inspection key={uuid()} inspection={inspectionObj}/>
        })

        return (
            <div>     
                {inspectionComponent}
            </div>
        );
    }
}



export default InspectionContainer