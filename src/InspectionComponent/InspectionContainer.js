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
            <div className="inspectionContainer">     
                <table className="ui celled striped padded table">
                    <tbody>
                        <tr>
                            <th>
                               <h3 className="ui center aligned header">Date</h3>
                            </th>
                            <th>
                              <h3 className="ui center aligned header">Time</h3>
                            </th>
                            <th>
                              <h3 className="ui center aligned header">Restaurant</h3>
                            </th>
                            <th>
                              <h3 className="ui center aligned header">Location</h3>
                            </th>
                            <th>
                              <h3 className="ui center aligned header">Reports</h3>
                            </th>
                            <th>
                              <h3 className="ui center aligned header">Edit</h3>
                            </th>
                        </tr>
                        {inspectionComponent}
                    </tbody>
              </table>

              
            </div>
        );
    }
}



export default InspectionContainer